'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Terminal } from 'lucide-react';
import Link from 'next/link';
import GalagaBackground from '@/components/GalagaBackground';

export default function Home() {
  return (
    <div className="page-pt" style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', position: 'relative' }}>
      <GalagaBackground />

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
      <section className="section" style={{ background: 'rgba(17, 24, 39, 0.4)', borderTop: '1px solid var(--glass-border)', borderBottom: '1px solid var(--glass-border)', position: 'relative', zIndex: 1 }}>
        <div className="container">
          <div className="responsive-grid" style={{ alignItems: 'center', gap: '2rem' }}>

            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="section-title" style={{ textAlign: 'left', marginBottom: '2rem' }}>
                <span className="text-gradient">About Me</span>
              </h2>
              <div className="glass-panel card-padding" style={{ borderLeft: '4px solid var(--accent-primary)' }}>
                <p style={{ color: 'var(--text-secondary)', marginBottom: '1.5rem', lineHeight: 1.8 }}>
                  기획자는 기획만 잘해서는 부족하다고 생각합니다. 개발자의 언어를 이해해야 소통이 원활해지고, 아트의 방향성을 알아야 세계관을 온전히 설계할 수 있습니다. 저는 기획 역량을 중심에 두되, 개발·아트·UX 등 다양한 영역에 대한 폭넓은 이해를 쌓기 위해 꾸준히 노력해왔습니다.
                </p>
                <p style={{ color: 'var(--text-secondary)', lineHeight: 1.8 }}>
                  각 분야의 지식이 유기적으로 맞물릴 때 더 나은 기획이 완성된다는 것을 경험을 통해 배웠기 때문입니다. 앞으로도 게임 산업의 흐름과 새로운 트렌드를 지속적으로 학습하며, 어떤 상황에서도 팀에 실질적인 기여를 할 수 있는 유연한 기획자로 성장해 나가겠습니다.
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
