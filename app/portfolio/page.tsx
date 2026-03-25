'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowUpRight, ArrowRight } from 'lucide-react';

export default function Portfolio() {
  const projects = [
    {
      id: 'raid',
      title: 'Project:RAID',
      icon: '/raid_logo.png',
      image: '/pr_title.png',
      category: '헌팅액션 RPG',
      description: '팀워크와 전술이 강조되는 협동 FPS 프로젝트. 시스템 기획 및 밸런스 설계 담당.',
      link: '/portfolio/raid',
    },
    {
      id: 'infest',
      title: 'INFEST',
      icon: '/infest_logo.png',
      image: '/infest_title.png',
      category: '코옵 FPS',
      description: '몰려오는 적들을 막아내는 웨이브 기반 디펜스. 역기획서를 통한 핵심 BM 도출.',
      link: '/portfolio/infest',
    },
    {
      id: 'last-throw',
      title: '라스트 투척의 신',
      icon: '/last_logo.png',
      image: '/las_title.png',
      category: '로그라이크 슈팅 액션',
      description: '타이밍과 물리 엔진을 활용한 액션 기획. 재밌는 플레이 룰 구축.',
      link: '/portfolio/last-throw',
    },
    {
      id: 'sylphid',
      title: 'Sylpyr',
      icon: '/sylpyr_logo.png',
      image: '/sylpyr_title.png',
      category: 'TextRPG',
      description: '바람을 이용한 퍼즐 어드벤처 플랫포머. 레벨 디자인과 기믹 설계 참여.',
      link: '/portfolio/sylphid',
    },
    {
      id: 'twintower',
      title: 'TwinTower',
      icon: '/twintower_logo.png',
      image: '/twintower_title.png',
      category: '퍼즐',
      description: '기존의 팩맨을 3D로 재해석하고 새로운 규칙을 추가하여 밸런스를 재설계.',
      link: '/portfolio/twintower',
    }
  ];

  return (
    <div style={{ paddingTop: '8rem', minHeight: '100vh', paddingBottom: '6rem' }}>
      <div className="container">

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          style={{ textAlign: 'center', marginBottom: '4rem' }}
        >
          <h1 className="section-title" style={{ marginBottom: '1rem' }}>
            <span className="text-gradient">Projects</span>
          </h1>
          <p style={{ color: 'var(--text-secondary)', fontSize: '1.25rem', maxWidth: '1000px', margin: '0 auto' }}>
            기획자로서 참여한 핵심 프로젝트들과 각 프로젝트에서 담당했던 기획/개발 내용을 소개합니다.
          </p>
        </motion.div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2rem' }}>
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Link href={project.link} className="glass-panel project-card" style={{
                display: 'block',
                height: '100%'
              }}>
                <div style={{
                  height: '200px',
                  background: 'rgba(3, 7, 18, 0.5)',
                  borderBottom: '1px solid var(--glass-border)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'var(--text-secondary)',
                  position: 'relative',
                  overflow: 'hidden'
                }}>
                  <div style={{
                    position: 'absolute',
                    top: 0, left: 0, right: 0, bottom: 0,
                    background: 'var(--accent-gradient)',
                    opacity: 0.05
                  }} />
                  {'image' in project && project.image ? (
                    <img src={project.image as string} alt={project.title} style={{ width: '100%', height: '100%', objectFit: 'cover', position: 'absolute', top: 0, left: 0 }} />
                  ) : (
                    <span style={{ fontSize: '0.875rem' }}>Image placeholder for {project.title}</span>
                  )}
                </div>

                <div style={{ padding: '2rem' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1rem' }}>
                    <div>
                      <span style={{
                        fontSize: '0.75rem',
                        fontWeight: 600,
                        color: 'var(--accent-primary)',
                        textTransform: 'uppercase',
                        letterSpacing: '0.05em',
                        marginBottom: '0.5rem',
                        display: 'block'
                      }}>
                        {project.category}
                      </span>
                      <h2 style={{ fontSize: '1.5rem', fontWeight: 700 }}>{project.title}</h2>
                    </div>
                    <div style={{
                      width: '40px',
                      height: '40px',
                      borderRadius: '50%',
                      background: 'rgba(255,255,255,0.05)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      border: '1px solid var(--glass-border)',
                      overflow: 'hidden'
                    }}>
                      {'icon' in project && project.icon ? (
                        <img src={project.icon as string} alt={`${project.title} logo`} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                      ) : (
                        <ArrowUpRight size={20} style={{ color: 'var(--text-secondary)' }} />
                      )}
                    </div>
                  </div>
                  <p style={{ color: 'var(--text-secondary)', lineHeight: 1.6 }}>
                    {project.description}
                  </p>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* ETC Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.6 }}
          style={{ marginTop: '8rem' }}
        >
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <h2 className="section-title" style={{ marginBottom: '1rem', fontSize: 'clamp(2rem, 3vw, 3rem)' }}>
              <span className="text-gradient">ETC.</span>
            </h2>
            <p style={{ color: 'var(--text-secondary)', fontSize: '1.15rem', maxWidth: '800px', margin: '0 auto' }}>
              각종 역기획서 및 분석서 등 기타 문서 작업물 모음입니다.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2rem' }}>
            {/* 궁수의 전설2 */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <Link href="/portfolio/archero2" className="glass-panel project-card" style={{ display: 'block', height: '100%' }}>
                <div style={{
                  height: '200px',
                  background: 'rgba(3, 7, 18, 0.5)',
                  borderBottom: '1px solid var(--glass-border)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  position: 'relative',
                  overflow: 'hidden'
                }}>
                  <div style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, background: 'var(--accent-gradient)', opacity: 0.05 }} />
                  <img src="/pdf_page_16.png" alt="궁수의 전설2" style={{ width: '100%', height: '100%', objectFit: 'cover', position: 'absolute', top: 0, left: 0 }} />
                </div>
                <div style={{ padding: '2rem' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1rem' }}>
                    <div>
                      <span style={{ fontSize: '0.75rem', fontWeight: 600, color: 'var(--accent-primary)', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '0.5rem', display: 'block' }}>
                        기타 기획서 · 게임 분석
                      </span>
                      <h2 style={{ fontSize: '1.5rem', fontWeight: 700 }}>궁수의 전설2</h2>
                    </div>
                    <div style={{ width: '40px', height: '40px', borderRadius: '50%', background: 'rgba(255,255,255,0.05)', display: 'flex', alignItems: 'center', justifyContent: 'center', border: '1px solid var(--glass-border)', overflow: 'hidden' }}>
                      <ArrowUpRight size={20} style={{ color: 'var(--text-secondary)' }} />
                    </div>
                  </div>
                  <p style={{ color: 'var(--text-secondary)', lineHeight: 1.6 }}>
                    로그라이크, 슈팅, RPG | 신규 콘텐츠 기획 및 재미 요소 분석. 스테이지 배틀 모드 기획.
                  </p>
                </div>
              </Link>
            </motion.div>

            {/* 던전 앤 파이터 */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Link href="/portfolio/dnf" className="glass-panel project-card" style={{ display: 'block', height: '100%' }}>
                <div style={{
                  height: '200px',
                  background: 'rgba(3, 7, 18, 0.5)',
                  borderBottom: '1px solid var(--glass-border)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  position: 'relative',
                  overflow: 'hidden'
                }}>
                  <div style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, background: 'var(--accent-gradient)', opacity: 0.05 }} />
                  <img src="/pdf_page_18.png" alt="던전 앤 파이터" style={{ width: '100%', height: '100%', objectFit: 'cover', position: 'absolute', top: 0, left: 0 }} />
                </div>
                <div style={{ padding: '2rem' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1rem' }}>
                    <div>
                      <span style={{ fontSize: '0.75rem', fontWeight: 600, color: 'var(--accent-primary)', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '0.5rem', display: 'block' }}>
                        게임 분석
                      </span>
                      <h2 style={{ fontSize: '1.5rem', fontWeight: 700 }}>던전 앤 파이터</h2>
                    </div>
                    <div style={{ width: '40px', height: '40px', borderRadius: '50%', background: 'rgba(255,255,255,0.05)', display: 'flex', alignItems: 'center', justifyContent: 'center', border: '1px solid var(--glass-border)', overflow: 'hidden' }}>
                      <ArrowUpRight size={20} style={{ color: 'var(--text-secondary)' }} />
                    </div>
                  </div>
                  <p style={{ color: 'var(--text-secondary)', lineHeight: 1.6 }}>
                    2D, 액션, RPG | 장비 시스템(세트 옵션, 커스텀 옵션, 미스트 기어) 및 업그레이드 분석.
                  </p>
                </div>
              </Link>
            </motion.div>
          </div>
        </motion.div>

        {/* Portfolio Download Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          style={{ marginTop: '4rem', textAlign: 'center' }}
        >
          <Link href="/download" className="btn-primary" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }}>
            Portfolio <ArrowRight size={18} />
          </Link>
        </motion.div>

      </div>
    </div>
  );
}
