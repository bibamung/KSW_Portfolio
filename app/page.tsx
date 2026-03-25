'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Terminal } from 'lucide-react';
import Link from 'next/link';

export default function Home() {
  return (
    <div style={{ paddingTop: '6rem', minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>

      {/* Hero Section */}
      <section className="section" style={{ minHeight: '80vh', display: 'flex', alignItems: 'center', position: 'relative' }}>
        {/* Abstract Background Element */}
        <div style={{
          position: 'absolute',
          top: '20%',
          right: '10%',
          width: '400px',
          height: '400px',
          background: 'var(--accent-primary)',
          filter: 'blur(100px)',
          opacity: 0.15,
          borderRadius: '50%',
          zIndex: -1
        }} />

        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            style={{ maxWidth: '800px' }}
          >
            <div style={{ display: 'inline-flex', alignItems: 'center', padding: '0.5rem 1.2rem', background: 'var(--glass-bg)', borderRadius: '9999px', border: '1px solid var(--glass-border)', marginBottom: '2rem' }}>
              <span style={{ fontSize: '0.875rem', fontWeight: 500, letterSpacing: '0.05em', background: 'linear-gradient(to right, var(--accent-primary), var(--accent-secondary))', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
                Game Designer
              </span>
            </div>

            <h1 style={{ fontSize: 'clamp(3rem, 5vw, 5rem)', marginBottom: '1.5rem', letterSpacing: '-0.02em' }}>
              Designing Experiences, <br />
              <span className="text-gradient">Engineering Fun.</span>
            </h1>

            <p style={{ fontSize: '1.25rem', color: 'var(--text-secondary)', marginBottom: '3rem', maxWidth: '600px', lineHeight: 1.8 }}>
              기획과 개발의 교집합에서 새로운 규칙을 설계하고, 게임의 밸런스와 진행 방식을 전면적으로 재해석하여 유저에게 특별한 경험을 제공합니다.
            </p>

            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
              <Link href="/about" className="btn-primary" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }}>
                More About Me
              </Link>
              <Link href="/portfolio" className="btn-secondary">
                View Projects <ArrowRight size={18} />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* About Me Snippet Section */}
      <section className="section" style={{ background: 'rgba(17, 24, 39, 0.4)', borderTop: '1px solid var(--glass-border)', borderBottom: '1px solid var(--glass-border)' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '4rem', alignItems: 'center' }}>

            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="section-title" style={{ textAlign: 'left', marginBottom: '2rem' }}>
                <span className="text-gradient">About Me</span>
              </h2>
              <div className="glass-panel" style={{ padding: '2rem', borderLeft: '4px solid var(--accent-primary)' }}>
                <p style={{ color: 'var(--text-secondary)', marginBottom: '1rem', lineHeight: 1.8 }}>
                  프로젝트를 진행하던 중에 저는 대학교 시절에 배웠던 지식을 기반으로 빠르게 진행할 수 있었습니다. 기획 커리큘럼에서 진행했던 역기획서, BM, 시스템 기획 과제를 바탕으로 최종 프로젝트의 기획서를 작성하였고, 2달 안에 코옵 FPS게임을 개발을 마무리 할 수 있었습니다.
                </p>
                <p style={{ color: 'var(--text-secondary)', lineHeight: 1.8 }}>
                  끝난 이후에도 기획 스터디와 다양한 프로젝트에 참여하면서 기획자로서의 첫 발걸음을 준비하고 있습니다.
                </p>
                <div style={{ marginTop: '2rem' }}>
                  <Link href="/about" style={{ color: 'white', display: 'inline-flex', alignItems: 'center', gap: '0.5rem', fontWeight: 500 }}>
                    About Me <ArrowRight size={16} />
                  </Link>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              style={{ position: 'relative', height: '400px', borderRadius: '1rem', overflow: 'hidden', border: '1px solid var(--glass-border)', background: 'var(--glass-bg)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
            >
              <img
                src="/about/profile_img.png"
                alt="Profile"
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
            </motion.div>

          </div>
        </div>
      </section>

    </div>
  );
}
