'use client';

import React, { useState, useEffect, useRef, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface Bullet {
  id: number;
  x: number;
  y: number;
  speed: number;
}

interface Particle {
  id: number;
  x: number;
  y: number;
  vx: number;
  vy: number;
  life: number;
  color: string;
}

export default function GalagaBackground() {
  const [mousePos, setMousePos] = useState({ x: -100, y: -100 });
  const [characterState, setCharacterState] = useState<'alive' | 'dying' | 'dead' | 'respawning'>('alive');
  const [bullets, setBullets] = useState<Bullet[]>([]);
  const [particles, setParticles] = useState<Particle[]>([]);
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });
  
  const requestRef = useRef<number>(null);
  const lastBulletSpawn = useRef<number>(0);
  const bulletIdCounter = useRef<number>(0);
  const particleIdCounter = useRef<number>(0);
  const containerRef = useRef<HTMLDivElement>(null);

  // Manage cursor visibility based on ship state
  useEffect(() => {
    // We only hide cursor when ship is alive/respawning/dying (visually present or transitioning)
    // When dead, we show the default cursor.
    const isVisible = characterState !== 'dead';
    if (isVisible) {
      document.body.classList.add('home-game-container');
    } else {
      document.body.classList.remove('home-game-container');
    }
    
    return () => {
      document.body.classList.remove('home-game-container');
    };
  }, [characterState]);

  // Resize handler
  useEffect(() => {
    const handleResize = () => {
      setDimensions({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Mouse move handler
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (characterState === 'alive' || characterState === 'respawning') {
        setMousePos({ x: e.clientX, y: e.clientY });
      }
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [characterState]);

  const createExplosion = useCallback((x: number, y: number) => {
    const newParticles: Particle[] = [];
    const colors = ['#8B5CF6', '#EC4899', '#FFFFFF', '#F59E0B'];
    for (let i = 0; i < 20; i++) {
        const angle = Math.random() * Math.PI * 2;
        const speed = Math.random() * 5 + 2;
        newParticles.push({
            id: particleIdCounter.current++,
            x,
            y,
            vx: Math.cos(angle) * speed,
            vy: Math.sin(angle) * speed,
            life: 1,
            color: colors[Math.floor(Math.random() * colors.length)]
        });
    }
    setParticles(prev => [...prev, ...newParticles]);
  }, []);

  // Game Loop
  const animate = useCallback((time: number) => {
    // 1. Bullet Spawning
    // Fewer bullets on smaller screens, more on wider screens
    const baseSpawnRate = dimensions.width < 768 ? 1200 : 800; 
    const spawnRate = Math.max(200, baseSpawnRate - (dimensions.width / 5));
    
    if (time - lastBulletSpawn.current > spawnRate && characterState !== 'dead') {
      const bulletCount = Math.max(1, Math.floor(dimensions.width / 400));
      const newBullets: Bullet[] = [];
      for(let i = 0; i < bulletCount; i++) {
          newBullets.push({
            id: bulletIdCounter.current++,
            x: Math.random() * dimensions.width,
            y: -20,
            speed: Math.random() * 2 + 3, // slightly slower for background feel
          });
      }
      setBullets(prev => [...prev, ...newBullets]);
      lastBulletSpawn.current = time;
    }

    // 2. Bullet Movement & Cleanup
    setBullets(prev => {
      const nextBullets = prev
        .map(b => ({ ...b, y: b.y + b.speed }))
        .filter(b => b.y < dimensions.height + 50);
      
      // 3. Collision Detection
      if (characterState === 'alive') {
        const charRadius = 15;
        const hit = nextBullets.find(b => {
            const dx = b.x - mousePos.x;
            const dy = b.y - (mousePos.y + 15); // Adjust center to match tip alignment
            return Math.sqrt(dx*dx + dy*dy) < charRadius + 10;
        });

        if (hit) {
          setCharacterState('dying');
          createExplosion(mousePos.x, mousePos.y);
          // 3 seconds death duration as requested
          setTimeout(() => setCharacterState('dead'), 150);
          setTimeout(() => setCharacterState('respawning'), 3000);
          setTimeout(() => setCharacterState('alive'), 3800); 
        }
      }
      
      return nextBullets;
    });

    // 4. Particle Movement
    setParticles(prev => prev
        .map(p => ({
            ...p,
            x: p.x + p.vx,
            y: p.y + p.vy,
            life: p.life - 0.015
        }))
        .filter(p => p.life > 0)
    );

    requestRef.current = requestAnimationFrame(animate);
  }, [dimensions, characterState, mousePos, createExplosion]);

  useEffect(() => {
    requestRef.current = requestAnimationFrame(animate);
    return () => {
      if (requestRef.current) cancelAnimationFrame(requestRef.current);
    };
  }, [animate]);

  return (
    <div 
      ref={containerRef}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        pointerEvents: 'none',
        zIndex: 0,
        overflow: 'hidden'
      }}
    >
      {/* Bullets */}
      {bullets.map(bullet => (
        <div 
          key={bullet.id}
          style={{
            position: 'absolute',
            left: bullet.x,
            top: bullet.y,
            width: '3px',
            height: '25px',
            background: 'linear-gradient(to bottom, transparent, #EC4899, #8B5CF6, transparent)',
            borderRadius: '2px',
            boxShadow: '0 0 12px rgba(139, 92, 246, 0.6)',
            filter: 'blur(0.5px)',
          }}
        />
      ))}

      {/* Particles (Explosion) */}
      {particles.map(p => (
          <div 
            key={p.id}
            style={{
                position: 'absolute',
                left: p.x,
                top: p.y,
                width: '4px',
                height: '4px',
                borderRadius: '50%',
                background: p.color,
                opacity: p.life,
                boxShadow: `0 0 8px ${p.color}`,
                transform: `scale(${p.life * 2})`
            }}
          />
      ))}

      {/* Character */}
      <AnimatePresence mode="wait">
        {(characterState === 'alive' || characterState === 'respawning') && (
          <motion.div
            key="ship"
            initial={characterState === 'respawning' ? { 
              scale: 0.2, 
              opacity: 0, 
              filter: 'blur(20px) brightness(2)',
              rotate: 180
            } : { opacity: 1 }}
            animate={{ 
                x: mousePos.x - 20, 
                y: mousePos.y - 5,
                scale: 1,
                opacity: 1,
                filter: 'blur(0px) brightness(1)',
                rotate: 0
            }}
            exit={{ 
              scale: 0, 
              opacity: 0, 
              filter: 'blur(10px) brightness(2)',
              transition: { duration: 0.2 }
            }}
            transition={{ 
                x: { type: 'spring', damping: 25, stiffness: 200, mass: 0.5 },
                y: { type: 'spring', damping: 25, stiffness: 200, mass: 0.5 },
                scale: { duration: 0.8, ease: "easeOut" },
                rotate: { duration: 0.8, ease: "easeOut" },
                filter: { duration: 0.8 },
                opacity: { duration: 0.4 }
            }}
            style={{
              position: 'absolute',
              width: '40px',
              height: '40px',
              zIndex: 1,
              willChange: 'transform, opacity, filter'
            }}
          >
            <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ filter: 'drop-shadow(0 0 10px rgba(139, 92, 246, 0.8))' }}>
              <path 
                d="M20 5L10 32L20 27L30 32L20 5Z" 
                fill="url(#ship-gradient)" 
                stroke="white" 
                strokeWidth="1.5"
                strokeLinejoin="round"
              />
              <path 
                d="M15 28L20 25L25 28" 
                stroke="rgba(255,255,255,0.5)" 
                strokeWidth="1"
              />
              <defs>
                <linearGradient id="ship-gradient" x1="20" y1="5" x2="20" y2="30" gradientUnits="userSpaceOnUse">
                  <stop stopColor="#8B5CF6" />
                  <stop offset="1" stopColor="#EC4899" />
                </linearGradient>
              </defs>
            </svg>
            
            {/* Engine Glow */}
            <motion.div 
              animate={{ 
                scale: [1, 1.2, 1],
                opacity: [0.5, 0.8, 0.5]
              }}
              transition={{ repeat: Infinity, duration: 0.2 }}
              style={{
                position: 'absolute',
                bottom: '5px',
                left: '50%',
                transform: 'translateX(-50%)',
                width: '12px',
                height: '12px',
                background: '#EC4899',
                filter: 'blur(6px)',
                borderRadius: '50%',
                zIndex: -1
              }}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
