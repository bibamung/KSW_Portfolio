'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

export default function InfestProject() {
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
              코옵 FPS
            </div>
            <h1 style={{ fontSize: 'clamp(2.5rem, 4vw, 4rem)', marginBottom: '1.5rem', lineHeight: 1.1 }}>INFEST</h1>
            <p style={{ fontSize: '1.25rem', color: 'var(--text-secondary)', lineHeight: 1.6, maxWidth: '800px' }}>
              좀비 웨이브를 격퇴하며 단계별로 패턴이 진화하는 보스를 추적·토벌하는 게임
            </p>
          </div>

          <div className="glass-panel" style={{ height: '400px', marginBottom: '4rem', display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'rgba(3, 7, 18, 0.4)', padding: 0, overflow: 'hidden' }}>
            <iframe
              width="100%"
              height="100%"
              src="https://www.youtube.com/embed/ZbKr9C13bc4"
              title="INFEST Video"
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
                <h4 style={{ fontSize: '1.15rem', marginBottom: '0.75rem', fontWeight: 600, color: '#fff' }}>몬스터 AI 시스템 기획</h4>
                <p style={{ color: 'var(--text-secondary)', lineHeight: 1.6, fontSize: '0.95rem' }}>
                  플레이어의 위치와 행동에 따라 유기적으로 반응하고 압박하는 AI 패턴을 설계하여, 코옵 생존 특유의 긴장감 극대화.
                </p>
              </div>
              <div style={{ padding: '1.5rem', borderRadius: '1.5rem', border: '1px solid rgba(139, 92, 246, 0.4)', background: 'rgba(3, 7, 18, 0.3)', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                <h4 style={{ fontSize: '1.15rem', marginBottom: '0.75rem', fontWeight: 600, color: '#fff' }}>조작 및 피격 시스템 설계</h4>
                <p style={{ color: 'var(--text-secondary)', lineHeight: 1.6, fontSize: '0.95rem' }}>
                  부위별(머리, 몸, 팔다리) 세분화된 히트박스와 데미지 차등 적용을 통해, 정교한 사격(에임)의 손맛과 전술적 사격의 재미 부여.
                </p>
              </div>
              <div style={{ padding: '1.5rem', borderRadius: '1.5rem', border: '1px solid rgba(139, 92, 246, 0.4)', background: 'rgba(3, 7, 18, 0.3)', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                <h4 style={{ fontSize: '1.15rem', marginBottom: '0.75rem', fontWeight: 600, color: '#fff' }}>웨이브 이벤트 시스템 기획</h4>
                <p style={{ color: 'var(--text-secondary)', lineHeight: 1.6, fontSize: '0.95rem' }}>
                  웨이브 진행에 따른 몬스터 스폰 주기와 난이도 상승 곡선을 정교하게 설계하여, 지루함 없는 몰입감 있는 전투 템포 구축.
                </p>
              </div>
              <div style={{ padding: '1.5rem', borderRadius: '1.5rem', border: '1px solid rgba(139, 92, 246, 0.4)', background: 'rgba(3, 7, 18, 0.3)', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                <h4 style={{ fontSize: '1.15rem', marginBottom: '0.75rem', fontWeight: 600, color: '#fff' }}>보스 헌트 모드기획</h4>
                <p style={{ color: 'var(--text-secondary)', lineHeight: 1.6, fontSize: '0.95rem' }}>
                  단순한 화력 집중을 넘어, 팀원 간의 역할 분담과 협동 추적을 통해 거대 보스를 토벌하는 전략적 레이드 경험 설계.
                </p>
              </div>
              <div style={{ padding: '1.5rem', borderRadius: '1.5rem', border: '1px solid rgba(139, 92, 246, 0.4)', background: 'rgba(3, 7, 18, 0.3)', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                <h4 style={{ fontSize: '1.15rem', marginBottom: '0.75rem', fontWeight: 600, color: '#fff' }}>보스 전투 디자인</h4>
                <p style={{ color: 'var(--text-secondary)', lineHeight: 1.6, fontSize: '0.95rem' }}>
                  보스만의 고유한 기믹과 페이즈별로 변화하는 위협적인 공격 패턴을 구성하여, 능동적인 약점 공략과 파훼의 재미 제공.
                </p>
              </div>
              <div style={{ padding: '1.5rem', borderRadius: '1.5rem', border: '1px solid rgba(139, 92, 246, 0.4)', background: 'rgba(3, 7, 18, 0.3)', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                <h4 style={{ fontSize: '1.15rem', marginBottom: '0.75rem', fontWeight: 600, color: '#fff' }}>무기 및 아이템 기획</h4>
                <p style={{ color: 'var(--text-secondary)', lineHeight: 1.6, fontSize: '0.95rem' }}>
                  각 총기류의 개성과 타격감이 돋보이는 전투 밸런스 설계 및, 위기 상황을 변수 삼아 극복할 수 있는 전술적인 아이템 활용 구조 기획.
                </p>
              </div>
              <div style={{ padding: '1.5rem', borderRadius: '1.5rem', border: '1px solid rgba(139, 92, 246, 0.4)', background: 'rgba(3, 7, 18, 0.3)', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                <h4 style={{ fontSize: '1.15rem', marginBottom: '0.75rem', fontWeight: 600, color: '#fff' }}>웨이브 배틀 모드기획</h4>
                <p style={{ color: 'var(--text-secondary)', lineHeight: 1.6, fontSize: '0.95rem' }}>
                  단순 생존이나 직접적인 유저 간 교전(PvP)이 아닌, 몬스터/보스에게 가한 누적 데미지로 승패를 가르는 독창적인 룰을 도입하여 치열하고 공격적인 딜링 경쟁 유도.
                </p>
              </div>
              <div style={{ padding: '1.5rem', borderRadius: '1.5rem', border: '1px solid rgba(139, 92, 246, 0.4)', background: 'rgba(3, 7, 18, 0.3)', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                <h4 style={{ fontSize: '1.15rem', marginBottom: '0.75rem', fontWeight: 600, color: '#fff' }}>UI/UX 기획</h4>
                <p style={{ color: 'var(--text-secondary)', lineHeight: 1.6, fontSize: '0.95rem' }}>
                  급박하게 돌아가는 FPS 전투 환경 속에서도 체력, 잔탄, 목표 위치 등의 핵심 전투 정보를 직관적으로 파악할 수 있는 유저 친화적 인터페이스 설계.
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
