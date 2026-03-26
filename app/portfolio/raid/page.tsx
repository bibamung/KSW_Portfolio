'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

export default function RaidProject() {
  return (
    <div style={{ paddingTop: '8rem', minHeight: '100vh', paddingBottom: '6rem' }}>
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
              헌팅액션 RPG
            </div>
            <h1 style={{ fontSize: 'clamp(2.5rem, 4vw, 4rem)', marginBottom: '1.5rem', lineHeight: 1.1 }}>Project:RAID</h1>
            <p style={{ fontSize: '1.25rem', color: 'var(--text-secondary)', lineHeight: 1.6, maxWidth: '800px', whiteSpace: 'pre-line' }}>
              애니메이션풍 그래픽을 바탕으로 직관적인 전투를 누구나 즐길 수 있는 게임
            </p>
          </div>

          <div className="glass-panel" style={{ height: '400px', marginBottom: '4rem', display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'rgba(3, 7, 18, 0.4)', padding: 0, overflow: 'hidden' }}>
            <iframe
              width="100%"
              height="100%"
              src="https://www.youtube.com/embed/cXN3jnGYsZQ"
              title="Project RAID Video"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              style={{ borderRadius: 'inherit', border: 'none' }}
            ></iframe>
          </div>

          <div className="glass-panel" style={{ padding: '2.5rem', marginBottom: '4rem' }}>
            <h3 style={{ fontSize: '1.5rem', fontWeight: 600, color: 'var(--accent-primary)', marginBottom: '1.5rem' }}>주요 담당업무</h3>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem' }}>
              <div style={{ padding: '1.5rem', borderRadius: '1.5rem', border: '1px solid rgba(139, 92, 246, 0.4)', background: 'rgba(3, 7, 18, 0.3)', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                <h4 style={{ fontSize: '1.15rem', marginBottom: '0.75rem', fontWeight: 600, color: '#fff' }}>NPC 대화 시스템 설계</h4>
                <p style={{ color: 'var(--text-secondary)', lineHeight: 1.6, fontSize: '0.95rem' }}>
                  플레이어의 세계관 몰입도를 높이고, 선택지에 따라 유기적으로 변화하는 입체적인 대화 흐름 및 스크립트 기획.
                </p>
              </div>
              <div style={{ padding: '1.5rem', borderRadius: '1.5rem', border: '1px solid rgba(139, 92, 246, 0.4)', background: 'rgba(3, 7, 18, 0.3)', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                <h4 style={{ fontSize: '1.15rem', marginBottom: '0.75rem', fontWeight: 600, color: '#fff' }}>파츠 및 파츠 강화 시스템 기획</h4>
                <p style={{ color: 'var(--text-secondary)', lineHeight: 1.6, fontSize: '0.95rem' }}>
                  유저의 지속적인 성장 체감을 극대화하고, 다채로운 장비 조합을 통해 자신만의 전투 스타일을 커스터마이징할 수 있는 밸런스 설계.
                </p>
              </div>
              <div style={{ padding: '1.5rem', borderRadius: '1.5rem', border: '1px solid rgba(139, 92, 246, 0.4)', background: 'rgba(3, 7, 18, 0.3)', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                <h4 style={{ fontSize: '1.15rem', marginBottom: '0.75rem', fontWeight: 600, color: '#fff' }}>홀로그램 연습장 & 보스 도감 기획</h4>
                <p style={{ color: 'var(--text-secondary)', lineHeight: 1.6, fontSize: '0.95rem' }}>
                  신규 유저의 진입 장벽을 낮추기 위한 안전한 패턴 학습 환경 구축 및 보스별 약점·공략법을 직관적으로 제공하는 가이드 시스템 설계.
                </p>
              </div>
              <div style={{ padding: '1.5rem', borderRadius: '1.5rem', border: '1px solid rgba(139, 92, 246, 0.4)', background: 'rgba(3, 7, 18, 0.3)', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                <h4 style={{ fontSize: '1.15rem', marginBottom: '0.75rem', fontWeight: 600, color: '#fff' }}>아이템 & 방어구 체계 구축</h4>
                <p style={{ color: 'var(--text-secondary)', lineHeight: 1.6, fontSize: '0.95rem' }}>
                  유저에게 명확한 파밍(사냥) 동기를 부여하는 보상 구조 설계 및 각 등급과 옵션에 따른 장비 시너지 기획.
                </p>
              </div>
              <div style={{ padding: '1.5rem', borderRadius: '1.5rem', border: '1px solid rgba(139, 92, 246, 0.4)', background: 'rgba(3, 7, 18, 0.3)', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                <h4 style={{ fontSize: '1.15rem', marginBottom: '0.75rem', fontWeight: 600, color: '#fff' }}>보스(쏜배쉬) 전투 기획</h4>
                <p style={{ color: 'var(--text-secondary)', lineHeight: 1.6, fontSize: '0.95rem' }}>
                  페이즈별 다채로운 공격 패턴과 기믹을 구성하여, 긴장감 넘치는 전투 경험과 능동적인 공략의 재미를 제공하는 보스 디자인.
                </p>
              </div>
              <div style={{ padding: '1.5rem', borderRadius: '1.5rem', border: '1px solid rgba(139, 92, 246, 0.4)', background: 'rgba(3, 7, 18, 0.3)', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                <h4 style={{ fontSize: '1.15rem', marginBottom: '0.75rem', fontWeight: 600, color: '#fff' }}>BM(비즈니스 모델) 기획</h4>
                <p style={{ color: 'var(--text-secondary)', lineHeight: 1.6, fontSize: '0.95rem' }}>
                  게임 내 전투 밸런스를 해치지 않는 선에서 유저의 만족도를 높이고, 지속적인 플레이와 수익 창출을 유도하는 합리적인 상점 및 재화 구조 기획.
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
