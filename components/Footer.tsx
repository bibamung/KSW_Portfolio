'use client';

import { useState } from 'react';
import { Github, Mail, Linkedin } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Footer() {
  const [showToast, setShowToast] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText('worni5015@gmail.com');
    setShowToast(true);
    setTimeout(() => setShowToast(false), 1000);
  };

  return (
    <footer style={{
      borderTop: '1px solid var(--glass-border)',
      background: 'rgba(3, 7, 18, 0.8)',
      padding: '4rem 0 2rem 0',
      marginTop: 'auto'
    }}>
      <div className="container">
        <div style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: '2rem', marginBottom: '3rem' }}>
          <div style={{ maxWidth: '500px' }}>
            <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem', fontFamily: 'var(--font-heading)' }}>
              Portfolio<span className="text-gradient">.</span>
            </h3>
            <p style={{ color: 'var(--text-secondary)' }}>
              기획자로서의 역량을 바탕으로 새로운 규칙을 설계하고,<br />
              게임 개발과 기획의 교집합에서 더 나은 경험을 창출하고자 합니다.
            </p>
          </div>
          
          <div>
            <h4 style={{ color: 'white', marginBottom: '1rem', fontWeight: 600 }}>Connect</h4>
            <div style={{ display: 'flex', gap: '1rem' }}>
              <button 
                onClick={handleCopyEmail}
                style={{ 
                  padding: '0.5rem', 
                  background: 'var(--glass-bg)', 
                  borderRadius: '0.5rem', 
                  border: '1px solid var(--glass-border)',
                  color: 'white',
                  cursor: 'pointer',
                  transition: 'all 0.2s ease',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}
                className="hover-glow"
              >
                <Mail size={20} />
              </button>
              <a 
                href="https://github.com/bibamung" 
                target="_blank" 
                rel="noopener noreferrer"
                style={{ padding: '0.5rem', background: 'var(--glass-bg)', borderRadius: '0.5rem', border: '1px solid var(--glass-border)', color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
                className="hover-glow"
              >
                <Github size={20} />
              </a>
              <a 
                href="https://www.linkedin.com/in/성원-김-7b4891357" 
                target="_blank" 
                rel="noopener noreferrer"
                style={{ padding: '0.5rem', background: 'var(--glass-bg)', borderRadius: '0.5rem', border: '1px solid var(--glass-border)', color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
                className="hover-glow"
              >
                <Linkedin size={20} />
              </a>
            </div>
          </div>
        </div>
        
        <div style={{ 
          borderTop: '1px solid var(--glass-border)', 
          paddingTop: '2rem', 
          textAlign: 'center',
          color: 'var(--text-secondary)',
          fontSize: '0.875rem'
        }}>
          &copy; {new Date().getFullYear()} Portfolio. All rights reserved.
        </div>
      </div>

      {/* Toast Notification */}
      <AnimatePresence>
        {showToast && (
          <motion.div
            initial={{ opacity: 0, y: 20, x: '-50%' }}
            animate={{ opacity: 1, y: 0, x: '-50%' }}
            exit={{ opacity: 0, y: 20, x: '-50%' }}
            style={{
              position: 'fixed',
              bottom: '2rem',
              left: '50%',
              background: 'var(--accent-primary)',
              color: 'white',
              padding: '0.75rem 1.5rem',
              borderRadius: '9999px',
              fontSize: '0.875rem',
              fontWeight: 600,
              boxShadow: '0 4px 20px rgba(139, 92, 246, 0.4)',
              zIndex: 9999,
              pointerEvents: 'none',
              whiteSpace: 'nowrap'
            }}
          >
            Copy your email address
          </motion.div>
        )}
      </AnimatePresence>
    </footer>
  );
}
