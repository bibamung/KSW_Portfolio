'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

export default function LastThrowProject() {
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
            <div style={{ display: 'inline-block', padding: '0.25rem 1rem', background: 'rgba(245, 158, 11, 0.1)', color: '#F59E0B', borderRadius: '9999px', fontSize: '0.875rem', fontWeight: 600, marginBottom: '1rem' }}>
              로그라이크 슈팅 액션
            </div>
            <h1 style={{ fontSize: 'clamp(2.5rem, 4vw, 4rem)', marginBottom: '1.5rem', lineHeight: 1.1 }}>라스트 투척의 신</h1>
            <p style={{ fontSize: '1.25rem', color: 'var(--text-secondary)', lineHeight: 1.6, maxWidth: '950px' }}>
              스테이지 진행에 따른 무기 해금과 스킬 선택을 통해 새로운 전략을 구사하는 게임
            </p>
          </div>

          <div className="glass-panel" style={{ height: '400px', marginBottom: '4rem', display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'rgba(3, 7, 18, 0.4)', padding: 0, overflow: 'hidden' }}>
            <iframe
              width="100%"
              height="100%"
              src="https://www.youtube.com/embed/qPb1uidbwOY"
              title="Last Throw Video"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              style={{ borderRadius: 'inherit', border: 'none' }}
            ></iframe>
          </div>

          <div className="glass-panel card-padding" style={{ marginBottom: '4rem' }}>
            <h3 style={{ fontSize: '1.5rem', fontWeight: 600, color: 'var(--accent-primary)', marginBottom: '1.5rem' }}>주요 담당업무</h3>

            <div style={{ marginBottom: '2rem', padding: '1.5rem', background: 'rgba(255, 255, 255, 0.03)', borderRadius: '1.5rem', border: '1px solid rgba(255, 255, 255, 0.1)' }}>
              <h4 style={{ fontSize: '1.25rem', fontWeight: 600, color: 'var(--accent-primary)', marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                기획
              </h4>
              <div className="responsive-grid">
                <div style={{ padding: '1.5rem', borderRadius: '1.5rem', border: '1px solid rgba(139, 92, 246, 0.4)', background: 'rgba(3, 7, 18, 0.3)', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                  <h4 style={{ fontSize: '1.15rem', marginBottom: '0.75rem', fontWeight: 600, color: '#fff' }}>UI 기획</h4>
                  <p style={{ color: 'var(--text-secondary)', lineHeight: 1.6, fontSize: '0.95rem' }}>
                    탑다운 슈팅 특유의 빠른 전투 템포 속에서도 플레이어가 무기 상태, 체력, 재사용 대기시간 등을 직관적으로 파악할 수 있는 시인성 높은 화면 레이아웃 설계.
                  </p>
                </div>
                <div style={{ padding: '1.5rem', borderRadius: '1.5rem', border: '1px solid rgba(139, 92, 246, 0.4)', background: 'rgba(3, 7, 18, 0.3)', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                  <h4 style={{ fontSize: '1.15rem', marginBottom: '0.75rem', fontWeight: 600, color: '#fff' }}>데이터 테이블 기획</h4>
                  <p style={{ color: 'var(--text-secondary)', lineHeight: 1.6, fontSize: '0.95rem' }}>
                    로그라이크 장르의 핵심인 수많은 무기와 아이템, 몬스터의 스탯을 체계적으로 수치화하고, 향후 업데이트와 밸런스 조정이 용이하도록 확장성 있는 데이터베이스 구조 설계.
                  </p>
                </div>
                <div style={{ padding: '1.5rem', borderRadius: '1.5rem', border: '1px solid rgba(139, 92, 246, 0.4)', background: 'rgba(3, 7, 18, 0.3)', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                  <h4 style={{ fontSize: '1.15rem', marginBottom: '0.75rem', fontWeight: 600, color: '#fff' }}>레벨 디자인</h4>
                  <p style={{ color: 'var(--text-secondary)', lineHeight: 1.6, fontSize: '0.95rem' }}>
                    랜덤하게 생성되는 맵 환경 속에서도 유저가 엄폐물과 지형지물을 활용하여 '투척' 궤적을 전략적으로 계산할 수 있는 밀도 높은 전투 공간 및 동선 구축.
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
                  <h4 style={{ fontSize: '1.15rem', marginBottom: '0.75rem', fontWeight: 600, color: '#fff' }}>데이터 매니저 개발</h4>
                  <p style={{ color: 'var(--text-secondary)', lineHeight: 1.6, fontSize: '0.95rem' }}>
                    기획 단계에서 설계된 데이터 테이블을 게임 엔진과 안정적으로 연동하고, 런타임 중 방대한 수치 데이터를 병목 없이 효율적으로 로드하고 관리하는 시스템 구현.
                  </p>
                </div>
                <div style={{ padding: '1.5rem', borderRadius: '1.5rem', border: '1px solid rgba(59, 130, 246, 0.4)', background: 'rgba(3, 7, 18, 0.3)', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                  <h4 style={{ fontSize: '1.15rem', marginBottom: '0.75rem', fontWeight: 600, color: '#fff' }}>랜덤 맵 생성 시스템 구현</h4>
                  <p style={{ color: 'var(--text-secondary)', lineHeight: 1.6, fontSize: '0.95rem' }}>
                    절차적 생성(Procedural Generation) 알고리즘을 도입하여, 유저가 반복적으로 플레이하더라도 매번 새로운 지형과 변수를 마주하게 만드는 로그라이크 맵 생성 로직 개발.
                  </p>
                </div>
                <div style={{ padding: '1.5rem', borderRadius: '1.5rem', border: '1px solid rgba(59, 130, 246, 0.4)', background: 'rgba(3, 7, 18, 0.3)', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                  <h4 style={{ fontSize: '1.15rem', marginBottom: '0.75rem', fontWeight: 600, color: '#fff' }}>무기 선택 UI 구현</h4>
                  <p style={{ color: 'var(--text-secondary)', lineHeight: 1.6, fontSize: '0.95rem' }}>
                    획득한 무기 풀(Pool)을 시각적으로 명확하게 제공하고, 급박한 적의 공세 속에서도 신속하고 정확하게 무기를 교체(스위칭)할 수 있도록 조작 편의성과 반응성을 극대화한 UI 프로그래밍.
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
