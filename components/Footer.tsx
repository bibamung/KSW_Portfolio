import { Github, Mail, Linkedin } from 'lucide-react';

export default function Footer() {
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
              <a href="#" style={{ padding: '0.5rem', background: 'var(--glass-bg)', borderRadius: '0.5rem', border: '1px solid var(--glass-border)' }}>
                <Mail size={20} />
              </a>
              <a href="#" style={{ padding: '0.5rem', background: 'var(--glass-bg)', borderRadius: '0.5rem', border: '1px solid var(--glass-border)' }}>
                <Github size={20} />
              </a>
              <a href="#" style={{ padding: '0.5rem', background: 'var(--glass-bg)', borderRadius: '0.5rem', border: '1px solid var(--glass-border)' }}>
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
    </footer>
  );
}
