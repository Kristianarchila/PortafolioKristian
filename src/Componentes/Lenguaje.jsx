import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const categories = [
  { id: 'all', label: 'Todas' },
  { id: 'frontend', label: 'Frontend' },
  { id: 'backend', label: 'Backend' },
  { id: 'database', label: 'Base de datos' },
  { id: 'devops', label: 'DevOps & Tools' },
];

const technologies = [
  // Frontend
  { name: 'React', icon: '⚛️', category: 'frontend', level: 90, color: '#61dafb' },
  { name: 'JavaScript', icon: '🟨', category: 'frontend', level: 88, color: '#f7df1e' },
  { name: 'CSS / Tailwind', icon: '🎨', category: 'frontend', level: 85, color: '#38bdf8' },
  { name: 'HTML5', icon: '🌐', category: 'frontend', level: 92, color: '#e34f26' },
  // Backend
  { name: 'Node.js', icon: '🟢', category: 'backend', level: 85, color: '#68a063' },
  { name: 'Express', icon: '🚂', category: 'backend', level: 82, color: '#94a3b8' },
  { name: 'Python', icon: '🐍', category: 'backend', level: 70, color: '#3572a5' },
  { name: 'PHP / Laravel', icon: '🐘', category: 'backend', level: 65, color: '#8892be' },
  { name: 'REST APIs', icon: '🔌', category: 'backend', level: 88, color: '#a78bfa' },
  // Database
  { name: 'MongoDB', icon: '🍃', category: 'database', level: 83, color: '#4db33d' },
  { name: 'MySQL', icon: '🐬', category: 'database', level: 78, color: '#00758f' },
  // DevOps
  { name: 'Docker', icon: '🐳', category: 'devops', level: 72, color: '#2496ed' },
  { name: 'Nginx', icon: '⚙️', category: 'devops', level: 65, color: '#009639' },
  { name: 'Git / GitHub', icon: '🐙', category: 'devops', level: 85, color: '#f05033' },
  { name: 'Linux / VPS', icon: '🖥️', category: 'devops', level: 68, color: '#fcc624' },
];

const levelLabel = (l) => l >= 85 ? 'Avanzado' : l >= 70 ? 'Intermedio' : 'En desarrollo';
const levelColor = (l) => l >= 85 ? '#f59e0b' : l >= 70 ? '#6366f1' : '#64748b';

export default function Tecnologias() {
  const [selected, setSelected] = useState('all');

  const filtered = selected === 'all'
    ? technologies
    : technologies.filter(t => t.category === selected);

  return (
    <section style={{
      minHeight: '100vh',
      background: 'var(--bg-primary)',
      padding: '7rem 1.5rem 5rem',
      position: 'relative',
      overflow: 'hidden',
    }}>
      {/* Orbs */}
      <div className="orb orb-indigo" style={{ width: 380, height: 380, top: '10%', right: '-6%', opacity: 0.18 }} />
      <div className="orb orb-gold" style={{ width: 300, height: 300, bottom: '8%', left: '-5%', opacity: 0.15 }} />

      <div style={{ maxWidth: 1100, margin: '0 auto', position: 'relative', zIndex: 1 }}>

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          style={{ marginBottom: '3rem' }}
        >
          <div className="section-label" style={{ marginBottom: '0.75rem' }}>Stack Técnico</div>
          <h2 className="section-title">
            Tecnologías que{' '}
            <span className="gradient-gold">domino</span>
          </h2>
          <p style={{ color: 'var(--text-secondary)', marginTop: '0.75rem', maxWidth: 500, fontSize: '0.95rem', lineHeight: 1.7 }}>
            Herramientas con las que construyo productos reales, desde el frontend hasta el despliegue en producción.
          </p>
        </motion.div>

        {/* Category filters */}
        <div style={{
          display: 'flex', flexWrap: 'wrap', gap: '0.5rem',
          marginBottom: '2.5rem',
        }}>
          {categories.map(cat => {
            const isActive = selected === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setSelected(cat.id)}
                style={{
                  padding: '0.45rem 1.1rem',
                  borderRadius: 50,
                  border: `1.5px solid ${isActive ? 'var(--accent-gold)' : 'var(--border-subtle)'}`,
                  background: isActive ? 'rgba(245,158,11,0.1)' : 'transparent',
                  color: isActive ? 'var(--accent-gold)' : 'var(--text-secondary)',
                  fontSize: '0.82rem', fontWeight: 600,
                  cursor: 'pointer', transition: 'all 0.25s ease',
                }}
              >
                {cat.label}
              </button>
            );
          })}
        </div>

        {/* Tech grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={selected}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
              gap: '1rem',
            }}
          >
            {filtered.map((tech, i) => (
              <motion.div
                key={tech.name}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.35, delay: i * 0.05 }}
                className="glass-card"
                style={{ padding: '1.25rem 1.4rem', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}
              >
                {/* Top row: icon + name + level badge */}
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                  <span style={{ fontSize: '1.75rem', lineHeight: 1 }}>{tech.icon}</span>
                  <div style={{ flex: 1 }}>
                    <div style={{
                      fontFamily: "'Outfit', sans-serif",
                      fontWeight: 700, fontSize: '0.95rem',
                      color: 'var(--text-primary)',
                    }}>{tech.name}</div>
                  </div>
                  <span style={{
                    padding: '0.2rem 0.65rem', borderRadius: 50,
                    fontSize: '0.68rem', fontWeight: 700,
                    background: `${levelColor(tech.level)}22`,
                    color: levelColor(tech.level),
                    border: `1px solid ${levelColor(tech.level)}44`,
                    whiteSpace: 'nowrap',
                  }}>
                    {levelLabel(tech.level)}
                  </span>
                </div>

                {/* Progress bar */}
                <div style={{
                  height: 5, borderRadius: 3,
                  background: 'rgba(255,255,255,0.07)',
                  overflow: 'hidden',
                }}>
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${tech.level}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.9, delay: 0.1 + i * 0.04, ease: 'easeOut' }}
                    style={{
                      height: '100%',
                      borderRadius: 3,
                      background: `linear-gradient(90deg, ${tech.color}99, ${tech.color})`,
                    }}
                  />
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Extra skills pills */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          style={{ marginTop: '3rem' }}
        >
          <div style={{
            fontSize: '0.75rem', fontWeight: 700, color: 'var(--text-muted)',
            letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '1rem',
          }}>
            También trabajo con
          </div>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.6rem' }}>
            {['Responsive Design', 'Arquitectura Hexagonal', 'UI/UX Principles', 'Agile / Scrum', 'JWT Auth', 'Multi-tenant SaaS', 'PWA', 'EmailJS', 'WordPress'].map(s => (
              <span key={s} className="tech-pill">{s}</span>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  );
}