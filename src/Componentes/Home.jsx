import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import RotatingText from "./AnimatedText";

const scrollTo = (id) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });

const stats = [
  { value: '1', label: 'SaaS en Producción', icon: '🚀' },
  { value: '2+', label: 'Años de Experiencia', icon: '📅' },
  { value: '10+', label: 'Tecnologías', icon: '⚡' },
  { value: '5+', label: 'Proyectos', icon: '💻' },
];

export default function Home() {
  const orbGoldRef = useRef(null);
  const orbIndigoRef = useRef(null);
  const orbBlueRef = useRef(null);

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      if (orbGoldRef.current) orbGoldRef.current.style.transform = `translateY(${y * 0.18}px)`;
      if (orbIndigoRef.current) orbIndigoRef.current.style.transform = `translateY(${y * 0.12}px)`;
      if (orbBlueRef.current) orbBlueRef.current.style.transform = `translateY(${y * 0.08}px)`;
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <section style={{
      position: 'relative',
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '6rem 1.5rem 3rem',
      overflow: 'hidden',
      background: 'var(--bg-primary)',
    }}>

      {/* Background orbs — parallax on scroll */}
      <div ref={orbGoldRef} className="orb orb-gold" style={{ width: 500, height: 500, top: '-10%', right: '-8%', willChange: 'transform' }} />
      <div ref={orbIndigoRef} className="orb orb-indigo" style={{ width: 400, height: 400, bottom: '-5%', left: '-8%', willChange: 'transform' }} />
      <div ref={orbBlueRef} className="orb orb-blue" style={{ width: 300, height: 300, top: '40%', left: '30%', opacity: 0.15, willChange: 'transform' }} />

      {/* Grid overlay subtle */}
      <div style={{
        position: 'absolute', inset: 0, pointerEvents: 'none', zIndex: 0,
        backgroundImage: 'linear-gradient(rgba(255,255,255,0.02) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.02) 1px, transparent 1px)',
        backgroundSize: '60px 60px',
      }} />

      <div style={{ maxWidth: 1100, width: '100%', margin: '0 auto', zIndex: 1 }}>

        {/* Main hero */}
        <div style={{
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: '3rem',
          flexWrap: 'wrap',
        }}>

          {/* Left: Text */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            style={{ flex: '1 1 340px', minWidth: 280 }}
          >
            {/* Availability badge */}
            <div style={{
              display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
              background: 'rgba(245,158,11,0.1)', border: '1px solid rgba(245,158,11,0.25)',
              borderRadius: 50, padding: '0.35rem 0.9rem', marginBottom: '1.5rem',
            }}>
              <span style={{ width: 7, height: 7, borderRadius: '50%', background: '#4ade80', boxShadow: '0 0 6px #4ade80' }} />
              <span style={{ fontSize: '0.75rem', fontWeight: 600, color: 'var(--accent-gold)', letterSpacing: '0.06em' }}>
                DISPONIBLE PARA PROYECTOS
              </span>
            </div>

            <h1 style={{
              fontFamily: "'Outfit', sans-serif",
              fontSize: 'clamp(2.4rem, 6vw, 4rem)',
              fontWeight: 900,
              lineHeight: 1.12,
              marginBottom: '1.25rem',
              color: 'var(--text-primary)',
              letterSpacing: '-0.02em',
            }}>
              Construyo{' '}
              <span className="gradient-gold">productos digitales</span>
              {' '}que escalan.
            </h1>

            <div style={{ marginBottom: '1.25rem', minHeight: 48, display: 'flex', alignItems: 'center' }}>
              <RotatingText
                texts={[
                  "Desarrollador Full-Stack 💻",
                  "Arquitectura de Software 🏗️",
                  "SaaS & APIs REST ⚙️",
                ]}
                mainClassName=""
                splitLevelClassName=""
                elementLevelClassName=""
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                staggerFrom="first"
                staggerDuration={0.04}
                rotationInterval={4000}
                style={{
                  fontSize: 'clamp(1rem, 2.5vw, 1.3rem)',
                  fontWeight: 600,
                  color: 'var(--text-secondary)',
                }}
              />
            </div>

            <p style={{
              fontSize: '1rem',
              color: 'var(--text-secondary)',
              lineHeight: 1.75,
              maxWidth: 480,
              marginBottom: '2rem',
            }}>
              Full-stack developer especializado en aplicaciones web modernas, SaaS multi-tenant y
              arquitecturas escalables. De la idea al producto live, con código limpio y diseño que importa.
            </p>

            <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
              <button onClick={() => scrollTo('portafolio')} className="btn-gold" style={{ border: 'none', cursor: 'pointer' }}>
                Ver mi proyecto SaaS 🚀
              </button>
              <button onClick={() => scrollTo('sobre-mi')} className="btn-outline" style={{ cursor: 'pointer' }}>
                Sobre mí
              </button>
            </div>
          </motion.div>

          {/* Right: Photo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            style={{ flex: '0 0 auto', display: 'flex', justifyContent: 'center' }}
          >
            <div style={{ position: 'relative', width: 260, height: 260 }}>
              {/* Glow ring */}
              <div style={{
                position: 'absolute', inset: -12,
                borderRadius: '50%',
                background: 'conic-gradient(from 180deg, var(--accent-gold), var(--accent-indigo), var(--accent-gold))',
                opacity: 0.3,
                filter: 'blur(20px)',
              }} />
              {/* Gold ring border */}
              <div style={{
                position: 'absolute', inset: -3,
                borderRadius: '50%',
                border: '2px solid rgba(245,158,11,0.35)',
                background: 'transparent',
              }} />
              <img
                src="/kris.png"
                alt="Kristian Archila"
                loading="lazy"
                className="animate-float"
                style={{
                  width: '100%', height: '100%',
                  objectFit: 'cover',
                  borderRadius: '50%',
                  border: '3px solid rgba(245,158,11,0.2)',
                  position: 'relative', zIndex: 1,
                }}
              />
            </div>
          </motion.div>
        </div>

        {/* Stats row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(120px, 1fr))',
            gap: '1rem',
            marginTop: '4rem',
            paddingTop: '2.5rem',
            borderTop: '1px solid var(--border-subtle)',
          }}
        >
          {stats.map((s, i) => (
            <div
              key={i}
              className="glass-card"
              style={{ padding: '1.25rem', textAlign: 'center' }}
            >
              <div style={{ fontSize: '1.5rem', marginBottom: '0.3rem' }}>{s.icon}</div>
              <div style={{
                fontFamily: "'Outfit', sans-serif",
                fontSize: '1.9rem', fontWeight: 800,
                color: 'var(--accent-gold)',
                lineHeight: 1,
              }}>{s.value}</div>
              <div style={{ fontSize: '0.72rem', color: 'var(--text-muted)', marginTop: '0.3rem', fontWeight: 500 }}>
                {s.label}
              </div>
            </div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}