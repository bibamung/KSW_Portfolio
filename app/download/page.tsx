'use client';

import { motion } from 'framer-motion';
import { Download, FileText, Eye } from 'lucide-react';

export default function DownloadPage() {
  return (
    <div className="page-pt" style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>

      <section className="section" style={{ flex: 1, display: 'flex', alignItems: 'center' }}>
        {/* Background glow */}
        <div style={{
          position: 'absolute',
          top: '30%',
          left: '50%',
          transform: 'translateX(-50%)',
          width: '500px',
          height: '500px',
          background: 'var(--accent-primary)',
          filter: 'blur(150px)',
          opacity: 0.1,
          borderRadius: '50%',
          zIndex: -1
        }} />

        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            style={{ textAlign: 'center', marginBottom: '3rem' }}
          >
            <h1 style={{ fontSize: 'clamp(2rem, 5vw, 4rem)', marginBottom: '1rem', wordBreak: 'keep-all' }}>
              <span className="text-gradient">포트폴리오 다운로드</span>
            </h1>
            <p style={{ color: 'var(--text-secondary)', fontSize: '1.1rem', maxWidth: '500px', margin: '0 auto' }}>
              포트폴리오 PDF 파일을 다운로드하거나 미리보기 할 수 있습니다
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            style={{
              maxWidth: '500px',
              margin: '0 auto',
            }}
          >
            {/* PDF Card */}
            <div className="glass-panel card-padding" style={{
              textAlign: 'center',
            }}>
              {/* File icon */}
              <div style={{
                width: '80px',
                height: '80px',
                borderRadius: '1rem',
                background: 'linear-gradient(135deg, rgba(139, 92, 246, 0.2), rgba(236, 72, 153, 0.2))',
                border: '1px solid rgba(139, 92, 246, 0.3)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto 1.5rem',
              }}>
                <FileText size={36} style={{ color: 'var(--accent-primary)' }} />
              </div>

              <h2 style={{ fontSize: '1.4rem', fontWeight: 700, marginBottom: '0.5rem' }}>
                포트폴리오.pdf
              </h2>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', marginBottom: '2rem' }}>
                게임 디자이너 포트폴리오 문서
              </p>

              {/* Action Buttons */}
              <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
                <a
                  href="/portfolio3.pdf"
                  download="포트폴리오.pdf"
                  className="btn-primary"
                  style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', textDecoration: 'none' }}
                >
                  <Download size={18} />
                  다운로드
                </a>
                <a
                  href="/portfolio3.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-secondary"
                  style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', textDecoration: 'none' }}
                >
                  <Eye size={18} />
                  미리보기
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

    </div>
  );
}
