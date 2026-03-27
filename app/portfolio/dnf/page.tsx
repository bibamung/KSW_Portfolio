'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

export default function DnFProject() {
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
            <div style={{ display: 'inline-block', padding: '0.25rem 1rem', background: 'rgba(59, 130, 246, 0.1)', color: 'var(--accent-secondary)', borderRadius: '9999px', fontSize: '0.875rem', fontWeight: 600, marginBottom: '1rem' }}>
              게임 분석
            </div>
            <h1 style={{ fontSize: 'clamp(2.5rem, 4vw, 4rem)', marginBottom: '1.5rem', lineHeight: 1.1 }}>던전 앤 파이터</h1>
            <p style={{ fontSize: '1.25rem', color: 'var(--text-secondary)', lineHeight: 1.6, maxWidth: '800px' }}>
              2D 액션 RPG의 장비 시스템을 분석하고, 세트 옵션·커스텀 옵션·미스트 기어 등 성장 시스템의 장단점을 도출하여 보완 방향을 제안했습니다.
            </p>
          </div>

          {/* 대표 이미지 */}
          <div className="glass-panel" style={{ height: '400px', marginBottom: '4rem', display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'rgba(3, 7, 18, 0.4)', padding: 0, overflow: 'hidden' }}>
            <img src="/pdf_page_18.png" alt="던전 앤 파이터 게임 분석" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
          </div>

          {/* 분석 요소 */}
          <div className="glass-panel card-padding" style={{ marginBottom: '4rem' }}>
            <h3 style={{ fontSize: '1.5rem', fontWeight: 600, color: 'var(--accent-primary)', marginBottom: '1.5rem' }}>분석 요소</h3>
            <div className="responsive-grid">
              <div style={{ padding: '1.5rem', borderRadius: '1.5rem', border: '1px solid rgba(139, 92, 246, 0.4)', background: 'rgba(3, 7, 18, 0.3)', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                <h4 style={{ fontSize: '1.15rem', marginBottom: '0.75rem', fontWeight: 600, color: '#fff' }}>게임의 장비 시스템 (기획의도)</h4>
                <p style={{ color: 'var(--text-secondary)', lineHeight: 1.6, fontSize: '0.95rem' }}>
                  각 직업마다의 색다른 전투 스타일, 픽셀답지 않은 화려한 이펙트와 던전을 통한 장비 파밍과 강화를 통해 캐릭터를 육성하면서 성장에 대한 뿌듯함과 재미를 선사.
                </p>
              </div>
              <div style={{ padding: '1.5rem', borderRadius: '1.5rem', border: '1px solid rgba(139, 92, 246, 0.4)', background: 'rgba(3, 7, 18, 0.3)', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                <h4 style={{ fontSize: '1.15rem', marginBottom: '0.75rem', fontWeight: 600, color: '#fff' }}>각 장비마다의 장단점</h4>
                <p style={{ color: 'var(--text-secondary)', lineHeight: 1.6, fontSize: '0.95rem' }}>
                  방어구 세트 옵션, 커스텀 옵션, 미스트 기어 등 다양한 장비 시스템의 장점과 단점을 비교 분석하여 각각의 특성 도출.
                </p>
              </div>
              <div style={{ padding: '1.5rem', borderRadius: '1.5rem', border: '1px solid rgba(139, 92, 246, 0.4)', background: 'rgba(3, 7, 18, 0.3)', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                <h4 style={{ fontSize: '1.15rem', marginBottom: '0.75rem', fontWeight: 600, color: '#fff' }}>단점 보완을 위한 추가적인 성장 시스템 제안</h4>
                <p style={{ color: 'var(--text-secondary)', lineHeight: 1.6, fontSize: '0.95rem' }}>
                  기존 시스템의 단점을 보완하고 신규/복귀 유저의 진입장벽을 낮추기 위한 개선 방향과 새로운 시스템을 제안.
                </p>
              </div>
            </div>
          </div>

          {/* 세부 분석 내용 */}
          <div className="glass-panel card-padding" style={{ marginBottom: '4rem' }}>
            <h3 style={{ fontSize: '1.5rem', fontWeight: 600, color: 'var(--accent-primary)', marginBottom: '1.5rem' }}>세부 분석 내용</h3>
            <div className="responsive-grid">
              <div style={{ padding: '1.5rem', borderRadius: '1.5rem', border: '1px solid rgba(139, 92, 246, 0.4)', background: 'rgba(3, 7, 18, 0.3)', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                <h4 style={{ fontSize: '1.15rem', marginBottom: '0.75rem', fontWeight: 600, color: '#fff' }}>방어구 세트 옵션</h4>
                <p style={{ color: 'var(--text-secondary)', lineHeight: 1.6, fontSize: '0.95rem' }}>
                  <strong style={{ color: '#a5b4fc' }}>장점:</strong> 간단하고 직관적 신규 및 복귀유저 진입 약화<br />
                  <strong style={{ color: '#fca5a5' }}>단점:</strong> 콘텐츠 소모 빠름 / 컨텐츠 부재 시 단조로움
                </p>
              </div>
              <div style={{ padding: '1.5rem', borderRadius: '1.5rem', border: '1px solid rgba(139, 92, 246, 0.4)', background: 'rgba(3, 7, 18, 0.3)', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                <h4 style={{ fontSize: '1.15rem', marginBottom: '0.75rem', fontWeight: 600, color: '#fff' }}>커스텀 옵션</h4>
                <p style={{ color: 'var(--text-secondary)', lineHeight: 1.6, fontSize: '0.95rem' }}>
                  <strong style={{ color: '#a5b4fc' }}>장점:</strong> 플레이어에게 다양한 경험을 선사할 수 있다<br />
                  <strong style={{ color: '#fca5a5' }}>단점:</strong> 신규 및 복귀유저의 너무 많은 옵션으로 인한 진입장벽
                </p>
              </div>
              <div style={{ padding: '1.5rem', borderRadius: '1.5rem', border: '1px solid rgba(139, 92, 246, 0.4)', background: 'rgba(3, 7, 18, 0.3)', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                <h4 style={{ fontSize: '1.15rem', marginBottom: '0.75rem', fontWeight: 600, color: '#fff' }}>미스트 기어</h4>
                <p style={{ color: 'var(--text-secondary)', lineHeight: 1.6, fontSize: '0.95rem' }}>
                  <strong style={{ color: '#a5b4fc' }}>장점:</strong> 커스텀 옵션의 단점이었던 진입 장벽을 낮출 수 있다<br />
                  원하는 옵션을 플레이어가 마음대로 부여할 수 있는 장비 시스템.
                </p>
              </div>
              <div style={{ padding: '1.5rem', borderRadius: '1.5rem', border: '1px solid rgba(139, 92, 246, 0.4)', background: 'rgba(3, 7, 18, 0.3)', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                <h4 style={{ fontSize: '1.15rem', marginBottom: '0.75rem', fontWeight: 600, color: '#fff' }}>세트 옵션 분석 및 보완 시스템 추가 제안</h4>
                <p style={{ color: 'var(--text-secondary)', lineHeight: 1.6, fontSize: '0.95rem' }}>
                  세트 옵션의 장단점을 분석하고, 전/레이드를 이후에 설계하여 세트 옵션에 단계를 만들어서 파밍 구조를 더욱 풍부하게 개선하는 방안 제시.
                </p>
              </div>
            </div>
          </div>

          {/* 안개 신 무기 업그레이드 분석 */}
          <div className="glass-panel card-padding" style={{ marginBottom: '4rem' }}>
            <h3 style={{ fontSize: '1.5rem', fontWeight: 600, color: 'var(--accent-primary)', marginBottom: '1.5rem' }}>안개 신 무기 업그레이드 분석</h3>
            <div className="responsive-grid">
              <div style={{ padding: '1.5rem', borderRadius: '1.5rem', border: '1px solid rgba(139, 92, 246, 0.4)', background: 'rgba(3, 7, 18, 0.3)', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                <h4 style={{ fontSize: '1.15rem', marginBottom: '0.75rem', fontWeight: 600, color: '#fff' }}>기억의 성단 / 기억의 종착지</h4>
                <p style={{ color: 'var(--text-secondary)', lineHeight: 1.6, fontSize: '0.95rem' }}>
                  기존에 플레이어가 소지하고 있는 에픽 무기를 업그레이드하여, 기운의 효과를 획득하고 업그레이드하는 시스템. 셋팅에 대한 다양성이 장점이나, 기간이 오래 걸린다는 단점이 존재.
                </p>
              </div>
              <div style={{ padding: '1.5rem', borderRadius: '1.5rem', border: '1px solid rgba(139, 92, 246, 0.4)', background: 'rgba(3, 7, 18, 0.3)', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                <h4 style={{ fontSize: '1.15rem', marginBottom: '0.75rem', fontWeight: 600, color: '#fff' }}>첫 기억으로의 반추</h4>
                <p style={{ color: 'var(--text-secondary)', lineHeight: 1.6, fontSize: '0.95rem' }}>
                  안개 신 무기를 한단계 더 업그레이드시켜 플레이어의 무기 등급을 바꿀 수 있는 시스템. 다른 업그레이드 시스템에 비해 짧은 기간이 장점.
                </p>
              </div>
              <div style={{ padding: '1.5rem', borderRadius: '1.5rem', border: '1px solid rgba(139, 92, 246, 0.4)', background: 'rgba(3, 7, 18, 0.3)', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                <h4 style={{ fontSize: '1.15rem', marginBottom: '0.75rem', fontWeight: 600, color: '#fff' }}>안개 신 무기 시스템 개선 방향</h4>
                <p style={{ color: 'var(--text-secondary)', lineHeight: 1.6, fontSize: '0.95rem' }}>
                  '기억의 편린'을 2배로 주는 방법으로 기존 유저와의 간극을 줄이고, 이벤트를 통해 신규/복귀 유저가 빠르게 성장하면서 재미를 느낄 수 있도록 개선 방안 제시.
                </p>
              </div>
              <div style={{ padding: '1.5rem', borderRadius: '1.5rem', border: '1px solid rgba(139, 92, 246, 0.4)', background: 'rgba(3, 7, 18, 0.3)', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                <h4 style={{ fontSize: '1.15rem', marginBottom: '0.75rem', fontWeight: 600, color: '#fff' }}>기운별 채택률 분석</h4>
                <p style={{ color: 'var(--text-secondary)', lineHeight: 1.6, fontSize: '0.95rem' }}>
                  안개 신 무기 성단의 기운 채택률을 조사·분석하여, 장비 업그레이드의 밸런스와 유저 선호도를 데이터 기반으로 분석.
                </p>
              </div>
            </div>
          </div>

        </motion.div>
      </div>
    </div>
  );
}
