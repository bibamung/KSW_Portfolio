'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

export default function Archero2Project() {
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
            <div style={{ display: 'inline-block', padding: '0.25rem 1rem', background: 'rgba(59, 130, 246, 0.1)', color: 'var(--accent-secondary)', borderRadius: '9999px', fontSize: '0.875rem', fontWeight: 600, marginBottom: '1rem' }}>
              기타 기획서
            </div>
            <h1 style={{ fontSize: 'clamp(2.5rem, 4vw, 4rem)', marginBottom: '1.5rem', lineHeight: 1.1 }}>궁수의 전설2</h1>
            <p style={{ fontSize: '1.25rem', color: 'var(--text-secondary)', lineHeight: 1.6, maxWidth: '800px' }}>
              재미 요소를 분석하고 신규 콘텐츠(스테이지 배틀 모드)를 기획했습니다.
            </p>
          </div>

          {/* 대표 이미지 */}
          <div className="glass-panel" style={{ height: '400px', marginBottom: '4rem', display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'rgba(3, 7, 18, 0.4)', padding: 0, overflow: 'hidden' }}>
            <img src="/pdf_page_16.png" alt="궁수의 전설2 게임 분석" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
          </div>

          {/* 기획 의도 */}
          <div className="glass-panel" style={{ padding: '2.5rem', marginBottom: '4rem' }}>
            <h3 style={{ fontSize: '1.5rem', fontWeight: 600, color: 'var(--accent-primary)', marginBottom: '1.5rem' }}>기획 의도</h3>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem' }}>
              <div style={{ padding: '1.5rem', borderRadius: '1.5rem', border: '1px solid rgba(139, 92, 246, 0.4)', background: 'rgba(3, 7, 18, 0.3)', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                <h4 style={{ fontSize: '1.15rem', marginBottom: '0.75rem', fontWeight: 600, color: '#fff' }}>"궁수의 전설2" 재미요소 분석</h4>
                <p style={{ color: 'var(--text-secondary)', lineHeight: 1.6, fontSize: '0.95rem' }}>
                  몬스터가 가득한 스테이지를 클리어하면서 스킬 조합과 장비를 활용해 더 강한 캐릭터로 성장하고 높은 단계까지 도달하는 핵심 재미 요소 분석.
                </p>
              </div>
              <div style={{ padding: '1.5rem', borderRadius: '1.5rem', border: '1px solid rgba(139, 92, 246, 0.4)', background: 'rgba(3, 7, 18, 0.3)', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                <h4 style={{ fontSize: '1.15rem', marginBottom: '0.75rem', fontWeight: 600, color: '#fff' }}>기존 PVP 콘텐츠 자동 전투방식 개선</h4>
                <p style={{ color: 'var(--text-secondary)', lineHeight: 1.6, fontSize: '0.95rem' }}>
                  기존의 자동 전투 기반 PVP 콘텐츠의 한계를 분석하고, 플레이어가 직접 조작하며 경쟁할 수 있는 새로운 형태의 대전 콘텐츠 방향 제시.
                </p>
              </div>
              <div style={{ padding: '1.5rem', borderRadius: '1.5rem', border: '1px solid rgba(139, 92, 246, 0.4)', background: 'rgba(3, 7, 18, 0.3)', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                <h4 style={{ fontSize: '1.15rem', marginBottom: '0.75rem', fontWeight: 600, color: '#fff' }}>기존 재미요소 극대화 및 경쟁에 대한 긴장감 생성</h4>
                <p style={{ color: 'var(--text-secondary)', lineHeight: 1.6, fontSize: '0.95rem' }}>
                  로그라이크 특유의 변칙성과 스킬 선택의 재미를 유지하면서, 실시간 경쟁 요소를 더해 긴장감 있는 플레이 경험을 설계.
                </p>
              </div>
            </div>
          </div>

          {/* 재미 요소 분석 */}
          <div className="glass-panel" style={{ padding: '2.5rem', marginBottom: '4rem' }}>
            <h3 style={{ fontSize: '1.5rem', fontWeight: 600, color: 'var(--accent-primary)', marginBottom: '1.5rem' }}>재미 요소 분석</h3>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem' }}>
              <div style={{ padding: '1.5rem', borderRadius: '1.5rem', border: '1px solid rgba(139, 92, 246, 0.4)', background: 'rgba(3, 7, 18, 0.3)', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                <h4 style={{ fontSize: '1.15rem', marginBottom: '0.75rem', fontWeight: 600, color: '#fff' }}>변칙성과 다양한 스킬 선택</h4>
                <p style={{ color: 'var(--text-secondary)', lineHeight: 1.6, fontSize: '0.95rem' }}>
                  로그라이크 요소를 차용한 스킬 조합 시스템으로, 매 플레이마다 다른 빌드를 경험하며 전략적 선택의 재미를 제공.
                </p>
              </div>
              <div style={{ padding: '1.5rem', borderRadius: '1.5rem', border: '1px solid rgba(139, 92, 246, 0.4)', background: 'rgba(3, 7, 18, 0.3)', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                <h4 style={{ fontSize: '1.15rem', marginBottom: '0.75rem', fontWeight: 600, color: '#fff' }}>섬세한 원터치 컨트롤</h4>
                <p style={{ color: 'var(--text-secondary)', lineHeight: 1.6, fontSize: '0.95rem' }}>
                  캐릭터가 멈췄을 때만 공격 가능한 형태의 조작 방식으로, 이동과 공격 타이밍 사이의 판단력을 요구하는 섬세한 컨트롤 재미 부여.
                </p>
              </div>
            </div>
          </div>

          {/* 신규 콘텐츠 기획 - 스테이지 배틀 모드 */}
          <div className="glass-panel" style={{ padding: '2.5rem', marginBottom: '4rem' }}>
            <h3 style={{ fontSize: '1.5rem', fontWeight: 600, color: 'var(--accent-primary)', marginBottom: '1.5rem' }}>신규 콘텐츠 기획: 스테이지 배틀 모드</h3>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem' }}>
              <div style={{ padding: '1.5rem', borderRadius: '1.5rem', border: '1px solid rgba(139, 92, 246, 0.4)', background: 'rgba(3, 7, 18, 0.3)', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                <h4 style={{ fontSize: '1.15rem', marginBottom: '0.75rem', fontWeight: 600, color: '#fff' }}>기획 의도</h4>
                <p style={{ color: 'var(--text-secondary)', lineHeight: 1.6, fontSize: '0.95rem' }}>
                  웨이브 배틀 모드 콘텐츠를 제공하여 플레이어들 사이의 경쟁심을 유발시키고, 콘텐츠가 부족한 플레이어의 이탈을 방지하기 위함.
                </p>
              </div>
              <div style={{ padding: '1.5rem', borderRadius: '1.5rem', border: '1px solid rgba(139, 92, 246, 0.4)', background: 'rgba(3, 7, 18, 0.3)', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                <h4 style={{ fontSize: '1.15rem', marginBottom: '0.75rem', fontWeight: 600, color: '#fff' }}>핵심 규칙</h4>
                <p style={{ color: 'var(--text-secondary)', lineHeight: 1.6, fontSize: '0.95rem' }}>
                  기존 캐릭터와 조작방식을 유지하되, 점수표시를 위한 UI를 추가. 플레이어가 자신과 상대의 점수를 실시간으로 확인하며 긴장감 있는 경쟁 진행.
                </p>
              </div>
              <div style={{ padding: '1.5rem', borderRadius: '1.5rem', border: '1px solid rgba(139, 92, 246, 0.4)', background: 'rgba(3, 7, 18, 0.3)', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                <h4 style={{ fontSize: '1.15rem', marginBottom: '0.75rem', fontWeight: 600, color: '#fff' }}>진입 경로 및 해금</h4>
                <p style={{ color: 'var(--text-secondary)', lineHeight: 1.6, fontSize: '0.95rem' }}>
                  35챕터 이상 도달한 플레이어에게 웨이브 배틀모드 콘텐츠 제공. 로비에서도 스테이지 배틀 모드에 진입할 수 있는 아이콘을 배치.
                </p>
              </div>
              <div style={{ padding: '1.5rem', borderRadius: '1.5rem', border: '1px solid rgba(139, 92, 246, 0.4)', background: 'rgba(3, 7, 18, 0.3)', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                <h4 style={{ fontSize: '1.15rem', marginBottom: '0.75rem', fontWeight: 600, color: '#fff' }}>인게임 UI 설계</h4>
                <p style={{ color: 'var(--text-secondary)', lineHeight: 1.6, fontSize: '0.95rem' }}>
                  점수판을 통해 자신이 낸 데미지와 상대가 낸 데미지를 실시간으로 표시. 만 단위가 넘어갈 경우 약어(K)로 표시하는 UI 규칙 적용.
                </p>
              </div>
            </div>
          </div>

        </motion.div>
      </div>
    </div>
  );
}
