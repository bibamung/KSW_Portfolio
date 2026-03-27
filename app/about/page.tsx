'use client';

import { motion } from 'framer-motion';
import { Calendar, CheckCircle2, Trophy, Wrench, ArrowRight } from 'lucide-react';
import Link from 'next/link';

export default function About() {
  const skillCategories = [
    { name: '문서화', skills: ['Word', 'PPT', 'Excel'] },
    { name: '개발', skills: ['유니티', 'C#', 'C++'] },
    { name: '협업', skills: ['노션', '피그마', 'Git'] }
  ];

  const experiences = [
    {
      title: '2025 지스타(G-STAR) 부스 참여',
      icon: <img src="/about/G-Star_logo.jpg" alt="지스타 로고" style={{ width: '100%', height: '100%', objectFit: 'contain', borderRadius: '50%' }} />,
      items: [
        {
          date: '2025.11',
          details: [
            '지스타 2025 B2C 부스 전시 및 운영 참여',
            '자체 인디 게임 개발 프로젝트 출품 및 현장 유저 피드백 수집',
            '현지 관람객 대상 게임 시연 및 부스 이벤트 진행 지원'
          ]
        }
      ]
    },
    {
      title: '내일배움캠프 게임 기획 과정 이수',
      icon: <img src="/about/NaeBaeCamp_Logo.png" alt="내일배움캠프 로고" style={{ width: '100%', height: '100%', objectFit: 'contain', borderRadius: '50%' }} />,
      items: [
        {
          date: '2025.03 - 2025.04 (Unity 트랙 기획 커리큘럼 수료)',
          details: [
            '역기획서, BM, 시스템 기획 기초 과정 이수',
            '프로젝트 참여 (Project:RAID, INFEST, 실피르, 라스트 투척)'
          ]
        },
        {
          date: '2025.01 - 2025.02 (Unity 트랙 수료)',
          details: [
            'C#, Unity 수강',
            'C# 기초 문법, 알고리즘, Unity 엔진 기초 활용 과정 이수'
          ]
        }
      ]
    }
  ];

  return (
    <div className="page-pt" style={{ minHeight: '100vh', paddingBottom: '4rem' }}>
      <div className="container" style={{ maxWidth: '900px' }}>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <h1 className="section-title" style={{ marginBottom: '1rem' }}>
              <span className="text-gradient">About Me</span>
            </h1>
            <p style={{ color: 'var(--text-secondary)', fontSize: '1.25rem' }}>
              아이디어를 설계하고 기술로 구현하는 기획자
            </p>
          </div>

          <div style={{ marginBottom: '6rem', textAlign: 'center' }}>
            <h2 className="section-title" style={{ marginBottom: '3rem', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: '0rem' }}>
              <Wrench size={32} className="text-gradient" style={{ flexShrink: 0 }} /> <span className="text-gradient">Tool</span>
            </h2>
            <div className="responsive-grid">
              {skillCategories.map((category, catIndex) => (
                <div key={catIndex} className="glass-panel card-padding" style={{ display: 'flex', flexDirection: 'column' }}>
                  <h3 style={{ fontSize: '1.125rem', marginBottom: '1rem', fontWeight: 600, color: 'var(--accent-primary)' }}>{category.name}</h3>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem' }}>
                    {category.skills.map((skill, index) => (
                      <motion.span
                        key={index}
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.1 * index + 0.1 * catIndex, duration: 0.4 }}
                        style={{
                          padding: '0.5rem 1rem',
                          background: 'rgba(139, 92, 246, 0.1)',
                          border: '1px solid rgba(139, 92, 246, 0.3)',
                          borderRadius: '9999px',
                          fontWeight: 500,
                          color: 'white',
                          fontSize: '0.875rem'
                        }}
                      >
                        {skill}
                      </motion.span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* 개인 역량 Section */}
          <div style={{ marginBottom: '6rem' }}>
            <h2 className="section-title" style={{ marginBottom: '2rem', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem' }}>
              <span className="text-gradient">개인 역량</span>
            </h2>
            <p style={{ color: 'var(--text-secondary)', fontSize: '1.1rem', textAlign: 'center', marginBottom: '2rem' }}>
              게임 기획 및 개발을 위한 다양한 역량을 보유하고 있습니다
            </p>
            <div className="skills-grid">
              {[
                {
                  icon: '🎮',
                  title: '게임 시스템 디자인',
                  desc: '플레이어 경험을 중심으로 한 시스템 설계'
                },
                {
                  icon: '🕹️',
                  title: 'UI/UX 디자인',
                  desc: '직관적이고 사용하기 편한 게임 인터페이스 설계'
                },
                {
                  icon: '💻',
                  title: '프로그래밍 지식 보유',
                  desc: '게임 개발에 필요한 기본적인 지식 보유'
                },
                {
                  icon: '📊',
                  title: '데이터 테이블 작성',
                  desc: '게임에 필요한 데이터 테이블 작성 및 관리'
                }
              ].map((skill, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ y: -6, transition: { duration: 0.25 } }}
                  style={{
                    background: 'rgba(15, 20, 40, 0.7)',
                    border: '1px solid rgba(100, 120, 200, 0.2)',
                    borderRadius: '1rem',
                    padding: '2rem 1.5rem',
                    textAlign: 'center',
                    cursor: 'default',
                  }}
                >
                  <div style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>
                    {skill.icon}
                  </div>
                  <h3 style={{ fontSize: '1rem', fontWeight: 700, marginBottom: '0.75rem', color: 'var(--text-primary)' }}>
                    {skill.title}
                  </h3>
                  <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', lineHeight: 1.6 }}>
                    {skill.desc}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>

          <div>
            <h2 className="section-title" style={{ marginBottom: '3rem', textAlign: 'center' }}>
              <span className="text-gradient">Experience & Education</span>
            </h2>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
              {experiences.map((exp, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  className="glass-panel card-padding mobile-flex-col"
                >
                  <div style={{
                    minWidth: '60px',
                    height: '60px',
                    borderRadius: '50%',
                    background: 'rgba(255, 255, 255, 0.05)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    border: '1px solid var(--glass-border)'
                  }}>
                    {exp.icon}
                  </div>
                  <div>
                    <h3 style={{ fontSize: '1.25rem', marginBottom: '0.5rem', fontWeight: 600 }}>{exp.title}</h3>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', marginTop: '1rem' }}>
                      {exp.items.map((item, itemIdx) => (
                        <div key={itemIdx}>
                          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--text-secondary)', marginBottom: '0.75rem', fontSize: '0.875rem' }}>
                            <Calendar size={16} /> {item.date}
                          </div>
                          <ul style={{ listStyleType: 'disc', paddingLeft: '1.5rem', color: 'var(--text-secondary)', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                            {item.details.map((detail, idx) => (
                              <li key={idx}>{detail}</li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          <div style={{ marginTop: '5rem', textAlign: 'center' }}>
            <h2 className="section-title" style={{ marginBottom: '2rem' }}>
              <span className="text-gradient">Full Story</span>
            </h2>
            <div className="glass-panel card-padding" style={{ textAlign: 'left' }}>
              <p style={{ color: 'var(--text-secondary)', marginBottom: '1rem', lineHeight: 1.8 }}>
                대학교에서 진행한 1인 프로젝트는 저에게 창의적으로 문제를 해결하는 능력을 길러준 중요한 경험이었습니다. 기존의 ‘팩맨’을 3D로 재해석하고 새로운 규칙을 추가하여, 게임의 진행 방식과 밸런스를 전면적으로 재설계했습니다. 이 과정에서 새로운 룰을 설계하는 일이 기획자에게 얼마나 중요한 역할인지를 체감할 수 있었습니다. 기획 역량을 키우기 위해 인사이트를 찾아보던 중 "내일배움캠프"를 알게 되어 지원하게 되었고, 개발적인 지식과 기획적인 지식을 모두 공부할 수 있었습니다.
              </p>
              <p style={{ color: 'var(--text-secondary)', marginBottom: '1rem', lineHeight: 1.8 }}>
                프로젝트를 진행하던 중에 저는 대학교 시절에 배웠던 지식을 기반으로 빠르게 진행할 수 있었습니다. 기획 커리큘럼에서 진행했던 역기획서, BM, 시스템 기획 과제를 바탕으로 최종 프로젝트의 기획서를 작성하였고, 2달 안에 코옵 FPS게임을 개발을 마무리 할 수 있었습니다.
              </p>
              <p style={{ color: 'var(--text-secondary)', lineHeight: 1.8, marginBottom: '0' }}>
                끝난 이후에도 기획 스터디와 다양한 프로젝트에 참여하면서 기획자로서의 첫 발걸음을 준비하고 있습니다.
              </p>
            </div>
            <div style={{ marginTop: '2rem', textAlign: 'center' }}>
              <Link href="/portfolio" className="btn-primary" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }}>
                View Projects <ArrowRight size={18} />
              </Link>
            </div>
          </div>

        </motion.div>
      </div>
    </div>
  );
}
