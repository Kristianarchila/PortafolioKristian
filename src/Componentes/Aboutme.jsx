import { motion } from 'framer-motion';

const scrollTo = (id) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });


const stats = [
  { valor: '2+', etiqueta: 'Años de experiencia', icon: '📅' },
  { valor: '5+', etiqueta: 'Proyectos completados', icon: '🚀' },
  { valor: '1', etiqueta: 'SaaS en producción', icon: '⚡' },
  { valor: '10+', etiqueta: 'Tecnologías', icon: '💻' },
];

const habilidades = [
  'Resolución de problemas', 'Trabajo en equipo', 'Comunicación efectiva',
  'Aprendizaje continuo', 'Gestión del tiempo', 'Pensamiento crítico',
];

export default function SobreMi() {
  return (
    <section style={{
      minHeight: '100vh',
      background: 'var(--bg-primary)',
      padding: '7rem 1.5rem 5rem',
      position: 'relative',
      overflow: 'hidden',
    }}>
      <div className="orb orb-indigo" style={{ width: 450, height: 450, top: '0%', left: '-8%', opacity: 0.2 }} />
      <div className="orb orb-gold" style={{ width: 350, height: 350, bottom: '5%', right: '-5%', opacity: 0.18 }} />

      <div style={{ maxWidth: 1100, margin: '0 auto', position: 'relative', zIndex: 1 }}>

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          style={{ marginBottom: '4rem' }}
        >
          <div className="section-label" style={{ marginBottom: '0.75rem' }}>Sobre Mí</div>
          <h1 className="section-title">
            Quién soy &{' '}
            <span className="gradient-gold">qué construyo</span>
          </h1>
        </motion.div>

        {/* Main grid: foto + texto */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
          style={{
            display: 'grid',
            gridTemplateColumns: 'auto 1fr',
            gap: '4rem',
            alignItems: 'center',
            marginBottom: '4rem',
          }}
          className="about-grid"
        >
          {/* Foto */}
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <div style={{ position: 'relative', width: 260, flexShrink: 0 }}>
              <div style={{
                position: 'absolute', inset: -10, borderRadius: 20,
                background: 'linear-gradient(135deg, rgba(245,158,11,0.2), rgba(99,102,241,0.2))',
                filter: 'blur(20px)',
              }} />
              <img
                src="/kris.png"
                alt="Kristian Archila"
                loading="lazy"
                style={{
                  width: 260, height: 300,
                  objectFit: 'cover',
                  borderRadius: 16,
                  border: '2px solid rgba(245,158,11,0.25)',
                  position: 'relative', zIndex: 1,
                  display: 'block',
                }}
              />
              {/* Badge */}
              <div style={{
                position: 'absolute', bottom: -14, right: -14, zIndex: 2,
                background: 'var(--accent-gold)',
                color: '#080d1a', borderRadius: 10,
                padding: '0.5rem 0.85rem',
                fontWeight: 700, fontSize: '0.8rem',
                boxShadow: '0 4px 20px rgba(245,158,11,0.35)',
                whiteSpace: 'nowrap',
              }}>
                Full-Stack Dev 💻
              </div>
            </div>
          </div>

          {/* Texto */}
          <div>
            <p style={{ fontSize: '1.05rem', color: 'var(--text-secondary)', lineHeight: 1.8, marginBottom: '1.25rem' }}>
              Hola, soy <strong style={{ color: 'var(--text-primary)' }}>Kristian Archila</strong>, desarrollador full-stack
              apasionado por crear soluciones web que combinan buena arquitectura, rendimiento real y experiencia de usuario cuidada.
            </p>
            <p style={{ fontSize: '1rem', color: 'var(--text-secondary)', lineHeight: 1.8, marginBottom: '1.25rem' }}>
              Mi proyecto más reciente es <strong style={{ color: 'var(--accent-gold)' }}>BarberSaaS</strong>, una plataforma
              SaaS multi-tenant en producción para gestión de barberías — con arquitectura hexagonal, JWT, roles, reservas,
              pagos y despliegue en VPS con Docker y Nginx.
            </p>
            <p style={{ fontSize: '1rem', color: 'var(--text-secondary)', lineHeight: 1.8, marginBottom: '2rem' }}>
              Me especializo en <strong style={{ color: 'var(--text-primary)' }}>React</strong>,{' '}
              <strong style={{ color: 'var(--text-primary)' }}>Node.js</strong>,{' '}
              <strong style={{ color: 'var(--text-primary)' }}>MongoDB</strong> y{' '}
              <strong style={{ color: 'var(--text-primary)' }}>MySQL</strong>.
              Creo en el código limpio, la separación de responsabilidades y el aprendizaje constante.
            </p>
            <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
              <button onClick={() => scrollTo('portafolio')} className="btn-gold" style={{ border: 'none', cursor: 'pointer' }}>Ver mis proyectos</button>
              <button onClick={() => scrollTo('contacto')} className="btn-outline" style={{ cursor: 'pointer' }}>Contactarme</button>
            </div>
          </div>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.35 }}
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))',
            gap: '1rem',
            marginBottom: '4rem',
          }}
        >
          {stats.map((s, i) => (
            <div key={i} className="glass-card" style={{ padding: '1.5rem', textAlign: 'center' }}>
              <div style={{ fontSize: '1.75rem', marginBottom: '0.4rem' }}>{s.icon}</div>
              <div style={{
                fontFamily: "'Outfit', sans-serif",
                fontSize: '2.25rem', fontWeight: 800,
                color: 'var(--accent-gold)', lineHeight: 1,
              }}>{s.valor}</div>
              <div style={{ fontSize: '0.78rem', color: 'var(--text-muted)', marginTop: '0.35rem', fontWeight: 500 }}>
                {s.etiqueta}
              </div>
            </div>
          ))}
        </motion.div>

        {/* Habilidades blandas */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="glass-card"
          style={{ padding: '2rem' }}
        >
          <div className="section-label" style={{ marginBottom: '0.5rem' }}>Soft Skills</div>
          <div className="divider-gold" />
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.6rem' }}>
            {habilidades.map((h, i) => (
              <span key={i} style={{
                padding: '0.5rem 1.1rem',
                borderRadius: 50,
                background: 'rgba(255,255,255,0.04)',
                border: '1px solid var(--border-subtle)',
                fontSize: '0.85rem',
                color: 'var(--text-secondary)',
                fontWeight: 500,
                transition: 'all 0.25s ease',
                cursor: 'default',
              }}
                onMouseEnter={e => {
                  e.target.style.borderColor = 'rgba(245,158,11,0.4)';
                  e.target.style.color = 'var(--accent-gold)';
                  e.target.style.background = 'rgba(245,158,11,0.07)';
                }}
                onMouseLeave={e => {
                  e.target.style.borderColor = 'var(--border-subtle)';
                  e.target.style.color = 'var(--text-secondary)';
                  e.target.style.background = 'rgba(255,255,255,0.04)';
                }}
              >
                {h}
              </span>
            ))}
          </div>
        </motion.div>

      </div>

      <style>{`
        @media (max-width: 768px) {
          .about-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}