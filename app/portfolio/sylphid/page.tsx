'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

export default function SylphidProject() {
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
            <div style={{ display: 'inline-block', padding: '0.25rem 1rem', background: 'rgba(16, 185, 129, 0.1)', color: '#10B981', borderRadius: '9999px', fontSize: '0.875rem', fontWeight: 600, marginBottom: '1rem' }}>
              TextRPG
            </div>
            <h1 style={{ fontSize: 'clamp(2.5rem, 4vw, 4rem)', marginBottom: '1.5rem', lineHeight: 1.1 }}>Sylpyr</h1>
            <p style={{ fontSize: '1.25rem', color: 'var(--text-secondary)', lineHeight: 1.6, maxWidth: '800px' }}>
              신비한 대지를 배경으로 역경을 극복하며 구름 위 세계로 향하는 여정을 담은 TextRPG 게임
            </p>
          </div>

          <div className="glass-panel" style={{ height: '400px', marginBottom: '4rem', display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'rgba(3, 7, 18, 0.4)', padding: 0, overflow: 'hidden' }}>
            <iframe
              width="100%"
              height="100%"
              src="https://www.youtube.com/embed/H2sojhkOTik"
              title="Sylpyr Video"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              style={{ borderRadius: 'inherit', border: 'none' }}
            ></iframe>
          </div>

          <div className="glass-panel" style={{ padding: '2.5rem', marginBottom: '4rem' }}>
            <h3 style={{ fontSize: '1.5rem', fontWeight: 600, color: 'var(--accent-primary)', marginBottom: '1.5rem' }}>주요 담당업무</h3>
            <div style={{ marginBottom: '2rem', padding: '1.5rem', background: 'rgba(255, 255, 255, 0.03)', borderRadius: '1.5rem', border: '1px solid rgba(255, 255, 255, 0.1)' }}>
              <h4 style={{ fontSize: '1.25rem', fontWeight: 600, color: 'var(--accent-primary)', marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                기획
              </h4>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem' }}>
                <div style={{ padding: '1.5rem', borderRadius: '1.5rem', border: '1px solid rgba(139, 92, 246, 0.4)', background: 'rgba(3, 7, 18, 0.3)', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                  <h4 style={{ fontSize: '1.15rem', marginBottom: '0.75rem', fontWeight: 600, color: '#fff' }}>데이터 테이블 기획</h4>
                  <p style={{ color: 'var(--text-secondary)', lineHeight: 1.6, fontSize: '0.95rem' }}>
                    시각적 효과가 제한된 텍스트 기반 환경에 맞춰 몬스터, 아이템, 스탯 등의 방대한 수치를 체계적으로 문서화하고, 직관적인 밸런스 조정이 가능한 데이터베이스 구조 설계.
                  </p>
                </div>
                <div style={{ padding: '1.5rem', borderRadius: '1.5rem', border: '1px solid rgba(139, 92, 246, 0.4)', background: 'rgba(3, 7, 18, 0.3)', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                  <h4 style={{ fontSize: '1.15rem', marginBottom: '0.75rem', fontWeight: 600, color: '#fff' }}>던전 기획</h4>
                  <p style={{ color: 'var(--text-secondary)', lineHeight: 1.6, fontSize: '0.95rem' }}>
                    플레이어의 상상력과 텍스트 몰입도를 극대화할 수 있도록, 단계별 인카운터(전투, 확률형 이벤트) 배치와 긴장감 있는 텍스트 로그 흐름을 고려한 던전 진행 룰 설계.
                  </p>
                </div>
                <div style={{ padding: '1.5rem', borderRadius: '1.5rem', border: '1px solid rgba(139, 92, 246, 0.4)', background: 'rgba(3, 7, 18, 0.3)', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                  <h4 style={{ fontSize: '1.15rem', marginBottom: '0.75rem', fontWeight: 600, color: '#fff' }}>캐릭터(스킬) 기획</h4>
                  <p style={{ color: 'var(--text-secondary)', lineHeight: 1.6, fontSize: '0.95rem' }}>
                    텍스트 전투 환경에서 전략적인 선택을 유도하기 위해 각 캐릭터의 고유한 스킬셋을 구성하고, 시너지를 낼 수 있는 버프/디버프 효과 및 데미지 연산 공식 기획.
                  </p>
                </div>
              </div>
            </div>

            <div style={{ padding: '1.5rem', background: 'rgba(255, 255, 255, 0.03)', borderRadius: '1.5rem', border: '1px solid rgba(255, 255, 255, 0.1)' }}>
              <h4 style={{ fontSize: '1.25rem', fontWeight: 600, color: '#3B82F6', marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                개발
              </h4>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem' }}>
                <div style={{ padding: '1.5rem', borderRadius: '1.5rem', border: '1px solid rgba(59, 130, 246, 0.4)', background: 'rgba(3, 7, 18, 0.3)', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                  <h4 style={{ fontSize: '1.15rem', marginBottom: '0.75rem', fontWeight: 600, color: '#fff' }}>몬스터 시스템 구현</h4>
                  <p style={{ color: 'var(--text-secondary)', lineHeight: 1.6, fontSize: '0.95rem' }}>
                    기획된 데이터 테이블을 게임 로직과 연동하여 몬스터의 등장, 스킬 사용 패턴, 체력 및 피격 판정 등을 텍스트 전투 턴에 맞춰 논리적으로 구현.
                  </p>
                </div>
                <div style={{ padding: '1.5rem', borderRadius: '1.5rem', border: '1px solid rgba(59, 130, 246, 0.4)', background: 'rgba(3, 7, 18, 0.3)', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                  <h4 style={{ fontSize: '1.15rem', marginBottom: '0.75rem', fontWeight: 600, color: '#fff' }}>던전 시스템 구현</h4>
                  <p style={{ color: 'var(--text-secondary)', lineHeight: 1.6, fontSize: '0.95rem' }}>
                    유저의 던전 입장부터 단계별 몬스터 스폰, 실시간 전투 텍스트 로그 출력, 그리고 클리어에 따른 보상 지급까지 이어지는 전체 던전 사이클 프로그래밍.
                  </p>
                </div>
                <div style={{ padding: '1.5rem', borderRadius: '1.5rem', border: '1px solid rgba(59, 130, 246, 0.4)', background: 'rgba(3, 7, 18, 0.3)', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                  <h4 style={{ fontSize: '1.15rem', marginBottom: '0.75rem', fontWeight: 600, color: '#fff' }}>데이터 저장 시스템(세이브/로드) 구현</h4>
                  <p style={{ color: 'var(--text-secondary)', lineHeight: 1.6, fontSize: '0.95rem' }}>
                    유저의 캐릭터 성장치, 보유 재화, 인벤토리 상태 등 핵심 플레이 데이터를 손실 없이 안전하게 저장하고 불러올 수 있는 데이터 관리 로직 개발.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
