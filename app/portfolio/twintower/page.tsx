'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

export default function Pacman3DProject() {
  return (
    <div className="page-pt" style={{ minHeight: '100vh', paddingBottom: '6rem' }}>
      <div className="container" style={{ maxWidth: '1000px' }}>

        <Link href="/portfolio" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', color: 'var(--text-secondary)', marginBottom: '2rem' }}>
          <ArrowLeft size={16} /> Back to Projects
        </Link>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div style={{ marginBottom: '4rem' }}>
            <div style={{ display: 'inline-block', padding: '0.25rem 1rem', background: 'rgba(139, 92, 246, 0.1)', color: 'var(--accent-primary)', borderRadius: '9999px', fontSize: '0.875rem', fontWeight: 600, marginBottom: '1rem' }}>
              퍼즐
            </div>
            <h1 style={{ fontSize: 'clamp(2.5rem, 4vw, 4rem)', marginBottom: '1.5rem', lineHeight: 1.1 }}>TwinTower</h1>
            <p style={{ fontSize: '1.25rem', color: 'var(--text-secondary)', lineHeight: 1.6, maxWidth: '800px' }}>
              방향키 하나로 두 캐릭터를 동시에 조작하며, 동시에 목적지에 도달하는 퍼즐게임
            </p>
          </div>

          <div className="glass-panel" style={{ height: '400px', marginBottom: '4rem', display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'rgba(3, 7, 18, 0.4)', padding: 0, overflow: 'hidden' }}>
            <iframe
              width="100%"
              height="100%"
              src="https://www.youtube.com/embed/hl8OBAJ6paY?start=5"
              title="TwinTower Video"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              style={{ borderRadius: 'inherit', border: 'none' }}
            ></iframe>
          </div>

          <div className="glass-panel card-padding" style={{ marginBottom: '4rem' }}>
            <h3 style={{ fontSize: '1.5rem', fontWeight: 600, color: 'var(--accent-primary)', marginBottom: '1.5rem' }}>주요 담당업무</h3>
            <div className="responsive-grid">
              <div style={{ padding: '1.5rem', borderRadius: '1.5rem', border: '1px solid rgba(139, 92, 246, 0.4)', background: 'rgba(3, 7, 18, 0.3)', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                <h4 style={{ fontSize: '1.15rem', marginBottom: '0.75rem', fontWeight: 600, color: '#fff' }}>캐릭터 이동 규칙 기획</h4>
                <p style={{ color: 'var(--text-secondary)', lineHeight: 1.6, fontSize: '0.95rem' }}>
                  퍼즐의 핵심 메커니즘과 연계되는 직관적인 조작감을 구현하고, 타일 및 그리드 환경에 맞춘 정교한 이동 로직과 제약 조건 설계.
                </p>
              </div>
              <div style={{ padding: '1.5rem', borderRadius: '1.5rem', border: '1px solid rgba(139, 92, 246, 0.4)', background: 'rgba(3, 7, 18, 0.3)', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                <h4 style={{ fontSize: '1.15rem', marginBottom: '0.75rem', fontWeight: 600, color: '#fff' }}>오브젝트 상호작용 기획</h4>
                <p style={{ color: 'var(--text-secondary)', lineHeight: 1.6, fontSize: '0.95rem' }}>
                  게임 내 다양한 사물(스위치, 발판, 장애물 등)과의 유기적인 상호작용 기믹을 설계하여, 플레이어의 논리적 추론과 퍼즐 해결의 쾌감 극대화.
                </p>
              </div>
              <div style={{ padding: '1.5rem', borderRadius: '1.5rem', border: '1px solid rgba(139, 92, 246, 0.4)', background: 'rgba(3, 7, 18, 0.3)', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                <h4 style={{ fontSize: '1.15rem', marginBottom: '0.75rem', fontWeight: 600, color: '#fff' }}>레벨 디자인 (1~24스테이지)</h4>
                <p style={{ color: 'var(--text-secondary)', lineHeight: 1.6, fontSize: '0.95rem' }}>
                  점진적으로 상승하는 난이도 곡선(Learning Curve)을 적용하여, 플레이어가 새로운 기믹을 자연스럽게 학습하고 응용하며 도전 의식을 느낄 수 있는 24단계의 체계적인 공간 및 동선 구축.
                </p>
              </div>
              <div style={{ padding: '1.5rem', borderRadius: '1.5rem', border: '1px solid rgba(139, 92, 246, 0.4)', background: 'rgba(3, 7, 18, 0.3)', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                <h4 style={{ fontSize: '1.15rem', marginBottom: '0.75rem', fontWeight: 600, color: '#fff' }}>시나리오 기획 및 작성</h4>
                <p style={{ color: 'var(--text-secondary)', lineHeight: 1.6, fontSize: '0.95rem' }}>
                  단순한 퍼즐 풀이를 넘어 'TwinTower'라는 공간적 배경에 몰입할 수 있도록, 스테이지 진행도와 맞물려 전개되는 흥미로운 스토리텔링 및 텍스트 기획.
                </p>
              </div>
              <div style={{ padding: '1.5rem', borderRadius: '1.5rem', border: '1px solid rgba(139, 92, 246, 0.4)', background: 'rgba(3, 7, 18, 0.3)', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                <h4 style={{ fontSize: '1.15rem', marginBottom: '0.75rem', fontWeight: 600, color: '#fff' }}>캐릭터 컨셉 기획</h4>
                <p style={{ color: 'var(--text-secondary)', lineHeight: 1.6, fontSize: '0.95rem' }}>
                  게임의 전반적인 아트 스타일과 퍼즐 기믹에 부합하는 매력적인 캐릭터의 외형 및 설정, 세계관과의 통일성을 고려한 설정 기획.
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
