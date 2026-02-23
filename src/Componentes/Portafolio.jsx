import { motion } from 'framer-motion';
import { useState } from 'react';

const scrollTo = (id) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });


// ── BarberSaaS: Proyecto Estrella ──
const projectoEstrella = {
  titulo: "BarberSaaS",
  subtitulo: "Plataforma SaaS Multi-Tenant para Barberías",
  descripcion: "Sistema completo de gestión para barberías con múltiple tenancy. Cada barbería opera como tenant aislado con su propio subdominio, barberos, reservas, pagos y configuración.",
  logros: [
    "Arquitectura hexagonal (DDD) con separación de dominio, casos de uso e infraestructura",
    "Multi-tenancy real: aislamiento total de datos por barbería",
    "Autenticación JWT con roles (SuperAdmin, Admin, Barbero)",
    "Sistema de reservas con disponibilidad en tiempo real",
    "Pagos con IVA configurable y reportes de ingresos",
    "Panel SuperAdmin con audit logs y gestión de suscripciones",
    "Dockerizado con Nginx reverse-proxy, desplegado en VPS",
  ],
  tecnologias: ["Node.js", "React", "MongoDB", "Docker", "Nginx", "JWT", "Express", "PWA"],
  link: "https://barbersaas.duckdns.org/ilovebarbero",
  github: "https://github.com/Kristianarchila",
};

// ── Otros Proyectos ──
const otrosProyectos = [
  {
    titulo: "Sistema de Rifas SaaS",
    subtitulo: "Plataforma multi-tenant de gestión de rifas",
    descripcion: "SaaS para gestionar rifas con arquitectura multi-tenant, roles de usuario, panel de administración y control de participantes. Construido con React, Vite y separación por roles.",
    link: "#",
    github: "https://github.com/Kristianarchila/sistema-rifas-frontend",
    tecnologias: ["React", "Vite", "Multi-tenant", "Roles", "JavaScript"],
    imagen: "/rifa.png",
  },
  {
    titulo: "Rick & Morty Auth System",
    subtitulo: "Sistema de autenticación con API REST",
    descripcion: "App full-stack con registro, login y consumo de API externa. Validaciones cliente/servidor, React hooks y diseño responsive.",
    link: "https://apimorthy.vercel.app",
    github: "https://github.com/Kristianarchila",
    tecnologias: ["React", "REST API", "Tailwind CSS", "JavaScript"],
    imagen: "/apiRickMorty.png",
  },
  {
    titulo: "Weather Dashboard",
    subtitulo: "Clima en tiempo real",
    descripcion: "Consumo de OpenWeather API con geolocalización, búsqueda por ciudad y visualización de pronóstico extendido.",
    link: "https://clima-kappa-red.vercel.app/",
    github: "https://github.com/Kristianarchila",
    tecnologias: ["React", "OpenWeather API", "Geolocation"],
    imagen: "/capture.png",
  },
  {
    titulo: "To-Do List App",
    subtitulo: "Gestión de tareas con persistencia",
    descripcion: "CRUD completo con localStorage, filtros por estado y UX enfocada en productividad.",
    link: "https://todo-list-tan-delta.vercel.app/",
    github: "https://github.com/Kristianarchila",
    tecnologias: ["React", "LocalStorage", "Hooks"],
    imagen: "/todo-list.png",
  },
  {
    titulo: "Battle Royale Game",
    subtitulo: "Juego interactivo",
    descripcion: "Mecánicas de combate, sistema de puntuación y múltiples estados de juego con transiciones animadas.",
    link: "https://battleroyal.vercel.app/",
    github: "https://github.com/Kristianarchila",
    tecnologias: ["JavaScript", "CSS", "Game Logic"],
    imagen: "/Battle.png",
  },
  {
    titulo: "Laravel CRUD System",
    subtitulo: "Backend con gestión de base de datos",
    descripcion: "Proyecto backend con Laravel y MySQL. Migraciones, modelos Eloquent, relaciones entre tablas y operaciones CRUD.",
    link: "#",
    github: "https://github.com/Kristianarchila",
    tecnologias: ["Laravel", "PHP", "MySQL", "Eloquent ORM"],
    imagen: "/MySql.png",
  },
];

const ExternalIcon = () => (
  <svg width="14" height="14" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
  </svg>
);
const GithubIcon = () => (
  <svg width="14" height="14" fill="currentColor" viewBox="0 0 24 24">
    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
  </svg>
);

export default function Portafolio() {
  const [hoveredCard, setHoveredCard] = useState(null);

  return (
    <section style={{
      minHeight: '100vh',
      background: 'var(--bg-primary)',
      padding: '7rem 1.5rem 5rem',
      position: 'relative',
      overflow: 'hidden',
    }}>
      {/* Orbs */}
      <div className="orb orb-gold" style={{ width: 400, height: 400, top: '5%', right: '-5%', opacity: 0.2 }} />
      <div className="orb orb-indigo" style={{ width: 350, height: 350, bottom: '10%', left: '-5%', opacity: 0.2 }} />

      <div style={{ maxWidth: 1100, margin: '0 auto', position: 'relative', zIndex: 1 }}>

        {/* ── Header ── */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          style={{ textAlign: 'center', marginBottom: '4rem' }}
        >
          <div className="section-label" style={{ justifyContent: 'center', marginBottom: '0.75rem' }}>
            Mis Proyectos
          </div>
          <h1 className="section-title" style={{ marginBottom: '1rem' }}>
            Lo que he construido
          </h1>
          <p style={{ color: 'var(--text-secondary)', maxWidth: 560, margin: '0 auto', fontSize: '1rem', lineHeight: 1.7 }}>
            Proyectos reales que demuestran capacidad técnica, desde aplicaciones simples hasta un SaaS completo en producción.
          </p>
        </motion.div>

        {/* ──────────── PROYECTO ESTRELLA: BarberSaaS ──────────── */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.15 }}
          style={{
            background: 'linear-gradient(135deg, rgba(245,158,11,0.06), rgba(99,102,241,0.06))',
            border: '1px solid rgba(245,158,11,0.25)',
            borderRadius: 20,
            padding: '2.5rem',
            marginBottom: '4rem',
            position: 'relative',
            overflow: 'hidden',
          }}
        >
          {/* Glow top-right */}
          <div style={{
            position: 'absolute', top: -80, right: -80,
            width: 300, height: 300,
            background: 'radial-gradient(circle, rgba(245,158,11,0.18), transparent 70%)',
            borderRadius: '50%', pointerEvents: 'none',
          }} />

          {/* Featured badge */}
          <div style={{
            display: 'inline-flex', alignItems: 'center', gap: '0.4rem',
            background: 'rgba(245,158,11,0.15)',
            border: '1px solid rgba(245,158,11,0.4)',
            borderRadius: 50, padding: '0.3rem 0.9rem',
            marginBottom: '1.5rem',
          }}>
            <span style={{ fontSize: '0.75rem', fontWeight: 700, color: 'var(--accent-gold)', letterSpacing: '0.1em' }}>
              ⭐ PROYECTO ESTRELLA · SAAS EN PRODUCCIÓN
            </span>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'minmax(280px,1fr) minmax(260px,420px)',
            gap: '3rem',
            alignItems: 'start',
          }} className="saas-grid">

            {/* Left: Info */}
            <div>
              <h2 style={{
                fontFamily: "'Outfit', sans-serif",
                fontSize: 'clamp(1.8rem, 4vw, 2.6rem)',
                fontWeight: 900,
                lineHeight: 1.1,
                marginBottom: '0.5rem',
                letterSpacing: '-0.02em',
              }}>
                <span className="gradient-gold">{projectoEstrella.titulo}</span>
              </h2>
              <p style={{ color: 'var(--accent-gold)', fontWeight: 600, fontSize: '0.95rem', marginBottom: '1rem', opacity: 0.85 }}>
                {projectoEstrella.subtitulo}
              </p>
              <p style={{ color: 'var(--text-secondary)', lineHeight: 1.75, marginBottom: '1.75rem', fontSize: '0.95rem' }}>
                {projectoEstrella.descripcion}
              </p>

              {/* Achievements */}
              <div style={{ marginBottom: '1.75rem' }}>
                <div style={{ fontSize: '0.72rem', fontWeight: 700, color: 'var(--text-muted)', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '0.75rem' }}>
                  Logros técnicos
                </div>
                <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                  {projectoEstrella.logros.map((logro, i) => (
                    <li key={i} style={{
                      display: 'flex', alignItems: 'flex-start', gap: '0.6rem',
                      color: 'var(--text-secondary)', fontSize: '0.88rem', lineHeight: 1.5,
                    }}>
                      <span style={{ color: 'var(--accent-gold)', marginTop: '0.15rem', flexShrink: 0 }}>✓</span>
                      {logro}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Tech stack */}
              <div style={{ marginBottom: '2rem' }}>
                <div style={{ fontSize: '0.72rem', fontWeight: 700, color: 'var(--text-muted)', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '0.6rem' }}>
                  Tech Stack
                </div>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                  {projectoEstrella.tecnologias.map((tech, i) => (
                    <span key={i} className="tech-pill tech-pill-gold">{tech}</span>
                  ))}
                </div>
              </div>

              {/* CTAs */}
              <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
                <a href={projectoEstrella.link} target="_blank" rel="noopener noreferrer" className="btn-gold">
                  <ExternalIcon /> Ver live →
                </a>
                <a href={projectoEstrella.github} target="_blank" rel="noopener noreferrer" className="btn-outline">
                  <GithubIcon /> GitHub
                </a>
              </div>
            </div>

            {/* Right: Project Image */}
            <div style={{ height: 340, overflow: 'hidden', borderRadius: 12, border: '1px solid rgba(255,255,255,0.06)' }} className="saas-image-col">
              <img
                src="/barberia web.png"
                alt="BarberSaaS - Landing page"
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  objectPosition: 'top',
                  transition: 'transform 0.6s ease',
                }}
                onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.05)'}
                onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'}
              />
            </div>

          </div>
        </motion.div>

        {/* ──────────── Otros Proyectos ──────────── */}
        <div style={{ marginBottom: '2rem' }}>
          <div className="section-label" style={{ marginBottom: '0.5rem' }}>Más Proyectos</div>
          <h2 style={{
            fontFamily: "'Outfit', sans-serif",
            fontSize: '1.6rem', fontWeight: 700,
            color: 'var(--text-primary)',
          }}>
            Otros trabajos
          </h2>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
          gap: '1.25rem',
        }}>
          {otrosProyectos.map((proyecto, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className="glass-card"
              onMouseEnter={() => setHoveredCard(index)}
              onMouseLeave={() => setHoveredCard(null)}
              style={{
                overflow: 'hidden',
                transform: hoveredCard === index ? 'translateY(-4px)' : 'translateY(0)',
                transition: 'all 0.3s ease',
              }}
            >
              {/* Image placeholder */}
              <div style={{ height: 180, overflow: 'hidden', position: 'relative' }}>
                {proyecto.imagen && proyecto.imagen !== '/MySql.png' ? (
                  <img
                    src={proyecto.imagen}
                    alt={proyecto.titulo}
                    loading="lazy"
                    style={{
                      width: '100%', height: '100%', objectFit: 'cover',
                      transition: 'transform 0.5s ease',
                      transform: hoveredCard === index ? 'scale(1.06)' : 'scale(1)',
                      opacity: 0.85,
                    }}
                  />
                ) : (
                  <div className="img-placeholder" style={{ borderRadius: 0, border: 'none', background: 'rgba(255,255,255,0.03)' }}>
                    <svg width="32" height="32" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1}>
                      <rect x="3" y="3" width="18" height="18" rx="2" />
                      <circle cx="8.5" cy="8.5" r="1.5" />
                      <polyline points="21 15 16 10 5 21" />
                    </svg>
                    <span style={{ fontSize: '0.75rem' }}>Imagen del proyecto</span>
                  </div>
                )}
                <div style={{
                  position: 'absolute', inset: 0,
                  background: 'linear-gradient(to top, rgba(8,13,26,0.95) 0%, rgba(8,13,26,0.3) 60%, transparent 100%)',
                }} />

                {/* Hover actions */}
                <div style={{
                  position: 'absolute', bottom: '0.75rem', right: '0.75rem',
                  display: 'flex', gap: '0.5rem',
                  opacity: hoveredCard === index ? 1 : 0,
                  transition: 'opacity 0.3s ease',
                }}>
                  {proyecto.link !== '#' && (
                    <a href={proyecto.link} target="_blank" rel="noopener noreferrer" style={{
                      width: 32, height: 32, borderRadius: 8,
                      background: 'var(--accent-gold)', color: '#080d1a',
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      textDecoration: 'none', transition: 'all 0.2s ease',
                    }}>
                      <ExternalIcon />
                    </a>
                  )}
                  <a href={proyecto.github} target="_blank" rel="noopener noreferrer" style={{
                    width: 32, height: 32, borderRadius: 8,
                    background: 'rgba(255,255,255,0.1)', color: 'var(--text-primary)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    textDecoration: 'none', transition: 'all 0.2s ease',
                  }}>
                    <GithubIcon />
                  </a>
                </div>
              </div>

              {/* Card content */}
              <div style={{ padding: '1.25rem' }}>
                <h3 style={{
                  fontFamily: "'Outfit', sans-serif",
                  fontWeight: 700, fontSize: '1rem',
                  color: 'var(--text-primary)', marginBottom: '0.25rem',
                }}>
                  {proyecto.titulo}
                </h3>
                <p style={{ fontSize: '0.78rem', color: 'var(--accent-gold)', marginBottom: '0.6rem', opacity: 0.8 }}>
                  {proyecto.subtitulo}
                </p>
                <p style={{ fontSize: '0.83rem', color: 'var(--text-secondary)', lineHeight: 1.6, marginBottom: '1rem' }}>
                  {proyecto.descripcion}
                </p>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem' }}>
                  {proyecto.tecnologias.map((tech, ti) => (
                    <span key={ti} className="tech-pill" style={{ fontSize: '0.7rem' }}>{tech}</span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.8 }}
          style={{ textAlign: 'center', marginTop: '4rem', padding: '3rem', borderRadius: 20, border: '1px solid var(--border-subtle)', background: 'var(--bg-card)' }}
        >
          <h2 style={{ fontFamily: "'Outfit', sans-serif", fontSize: '1.75rem', fontWeight: 800, marginBottom: '0.75rem' }}>
            ¿Tienes un proyecto en mente?
          </h2>
          <p style={{ color: 'var(--text-secondary)', marginBottom: '1.75rem', maxWidth: 400, margin: '0 auto 1.75rem' }}>
            Disponible para colaboraciones, freelance y posiciones full-time.
          </p>
          <button onClick={() => scrollTo('contacto')} className="btn-gold" style={{ border: 'none', cursor: 'pointer' }}>
            Iniciar conversación →
          </button>
        </motion.div>

      </div>

      <style>{`
        @media (max-width: 768px) {
          .saas-grid {
            grid-template-columns: 1fr !important;
          }
          .saas-image-col {
            height: 220px !important;
          }
        }
      `}</style>
    </section>
  );
}