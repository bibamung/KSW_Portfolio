'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion } from 'framer-motion';

export default function Navbar() {
  const pathname = usePathname();

  const links = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Projects', path: '/portfolio' },
    { name: 'Portfolio', path: '/download' },
  ];

  return (
    <nav style={{
      position: 'fixed',
      top: 0,
      width: '100%',
      zIndex: 50,
      background: 'var(--glass-bg)',
      backdropFilter: 'blur(12px)',
      borderBottom: '1px solid var(--glass-border)',
      padding: '1rem 0'
    }}>
      <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <Link href="/" style={{
          fontFamily: 'var(--font-heading)',
          fontWeight: 800,
          fontSize: '1.5rem',
          letterSpacing: '-0.02em'
        }}>
          Game Designer<span className="text-gradient">.</span>
        </Link>
        <div style={{ display: 'flex', gap: '2rem' }}>
          {links.map((link) => {
            const isActive = pathname === link.path || (link.path !== '/' && pathname.startsWith(link.path));

            return (
              <Link key={link.path} href={link.path} style={{
                position: 'relative',
                fontWeight: 500,
                color: isActive ? 'var(--text-primary)' : 'var(--text-secondary)',
                transition: 'color 0.2s ease',
                padding: '0.5rem 0'
              }}>
                {link.name}
                {isActive && (
                  <motion.div
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ duration: 0.25, ease: 'easeOut' }}
                    style={{
                      position: 'absolute',
                      bottom: -2,
                      left: 0,
                      right: 0,
                      height: '2px',
                      background: 'var(--accent-gradient)',
                      borderRadius: '2px',
                      transformOrigin: 'center'
                    }}
                  />
                )}
              </Link>
            );
          })}
        </div>
      </div>
    </nav>
  );
}
