import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";

const contactCards = [
  {
    icon: '💬',
    label: 'WhatsApp',
    value: '+56 9 8562 2986',
    sub: 'Respuesta en minutos',
    link: 'https://wa.me/56985622986',
    color: '#25d366',
  },
  {
    icon: '✉️',
    label: 'Email',
    value: 'kristianarchila65@gmail.com',
    sub: 'Respuesta en < 24 h',
    link: 'mailto:kristianarchila65@gmail.com',
    color: 'var(--accent-gold)',
  },
  {
    icon: '💼',
    label: 'LinkedIn',
    value: 'Kristian Archila',
    sub: 'Red profesional',
    link: 'https://www.linkedin.com/in/kristian-archila-34409718a/',
    color: '#0a66c2',
  },
  {
    icon: '🐙',
    label: 'GitHub',
    value: 'Kristianarchila',
    sub: 'Ver mis repositorios',
    link: 'https://github.com/Kristianarchila',
    color: '#f1f5f9',
  },
];

const inputStyle = {
  width: '100%',
  padding: '0.85rem 1rem',
  borderRadius: 10,
  border: '1px solid rgba(255,255,255,0.1)',
  background: 'rgba(255,255,255,0.04)',
  color: 'var(--text-primary)',
  fontSize: '0.9rem',
  outline: 'none',
  transition: 'border-color 0.25s ease',
  fontFamily: "'Inter', sans-serif",
};

export default function Contacto() {
  const form = useRef();
  const [status, setStatus] = useState(null); // null | 'sending' | 'ok' | 'error'

  const sendEmail = (e) => {
    e.preventDefault();
    setStatus('sending');

    emailjs
      .sendForm("service_4riiu1n", "template_yaxclmd", form.current, "Y1A1kU_Rw2biLgWkB")
      .then(() => {
        setStatus('ok');
        form.current.reset();
        setTimeout(() => setStatus(null), 5000);
      })
      .catch(() => {
        setStatus('error');
        setTimeout(() => setStatus(null), 5000);
      });
  };

  return (
    <section style={{
      minHeight: '100vh',
      background: 'linear-gradient(180deg, var(--bg-primary) 0%, #0a0d1f 100%)',
      padding: '7rem 1.5rem 5rem',
      position: 'relative',
      overflow: 'hidden',
    }}>
      <div className="orb orb-gold" style={{ width: 420, height: 420, top: '5%', left: '-8%', opacity: 0.16 }} />
      <div className="orb orb-indigo" style={{ width: 350, height: 350, bottom: '0%', right: '-5%', opacity: 0.18 }} />

      <div style={{ maxWidth: 1100, margin: '0 auto', position: 'relative', zIndex: 1 }}>

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          style={{ textAlign: 'center', marginBottom: '3.5rem' }}
        >
          <div className="section-label" style={{ justifyContent: 'center', marginBottom: '0.75rem' }}>Contacto</div>
          <h2 className="section-title">¿Hablamos?</h2>
          <p style={{ color: 'var(--text-secondary)', marginTop: '0.75rem', maxWidth: 480, margin: '0.75rem auto 0', fontSize: '1rem', lineHeight: 1.7 }}>
            Estoy disponible para proyectos freelance, colaboraciones y posiciones full-time. ¡Escríbeme!
          </p>
          {/* Available badge */}
          <div style={{
            display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
            marginTop: '1.25rem',
            background: 'rgba(74, 222, 128, 0.1)', border: '1px solid rgba(74, 222, 128, 0.3)',
            borderRadius: 50, padding: '0.35rem 1rem',
          }}>
            <span style={{ width: 7, height: 7, borderRadius: '50%', background: '#4ade80', boxShadow: '0 0 6px #4ade80' }} />
            <span style={{ fontSize: '0.75rem', fontWeight: 600, color: '#4ade80' }}>Disponible ahora</span>
          </div>
        </motion.div>

        {/* Grid: form + contact cards */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 380px',
          gap: '2rem',
          alignItems: 'start',
        }} className="contact-grid">

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="glass-card"
            style={{ padding: '2.25rem' }}
          >
            <h3 style={{ fontFamily: "'Outfit', sans-serif", fontSize: '1.2rem', fontWeight: 700, marginBottom: '1.5rem', color: 'var(--text-primary)' }}>
              Envíame un mensaje
            </h3>

            <form ref={form} onSubmit={sendEmail} style={{ display: 'flex', flexDirection: 'column', gap: '1.1rem' }}>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }} className="form-row">
                <div>
                  <label style={{ fontSize: '0.78rem', fontWeight: 600, color: 'var(--text-muted)', letterSpacing: '0.06em', textTransform: 'uppercase', marginBottom: '0.4rem', display: 'block' }}>
                    Nombre
                  </label>
                  <input
                    type="text" name="name" required placeholder="Tu nombre"
                    style={inputStyle}
                    onFocus={e => e.target.style.borderColor = 'var(--accent-gold)'}
                    onBlur={e => e.target.style.borderColor = 'rgba(255,255,255,0.1)'}
                  />
                </div>
                <div>
                  <label style={{ fontSize: '0.78rem', fontWeight: 600, color: 'var(--text-muted)', letterSpacing: '0.06em', textTransform: 'uppercase', marginBottom: '0.4rem', display: 'block' }}>
                    Email
                  </label>
                  <input
                    type="email" name="email" required placeholder="tu@email.com"
                    style={inputStyle}
                    onFocus={e => e.target.style.borderColor = 'var(--accent-gold)'}
                    onBlur={e => e.target.style.borderColor = 'rgba(255,255,255,0.1)'}
                  />
                </div>
              </div>

              <div>
                <label style={{ fontSize: '0.78rem', fontWeight: 600, color: 'var(--text-muted)', letterSpacing: '0.06em', textTransform: 'uppercase', marginBottom: '0.4rem', display: 'block' }}>
                  Tipo de proyecto
                </label>
                <select
                  name="project_type" required
                  style={{ ...inputStyle, cursor: 'pointer' }}
                  onFocus={e => e.target.style.borderColor = 'var(--accent-gold)'}
                  onBlur={e => e.target.style.borderColor = 'rgba(255,255,255,0.1)'}
                >
                  <option value="" style={{ background: '#0d1428' }}>Selecciona una opción</option>
                  <option value="web" style={{ background: '#0d1428' }}>Sitio web / Landing page</option>
                  <option value="app" style={{ background: '#0d1428' }}>Aplicación web</option>
                  <option value="backend" style={{ background: '#0d1428' }}>Backend / API REST</option>
                  <option value="full" style={{ background: '#0d1428' }}>Proyecto Full-Stack</option>
                  <option value="other" style={{ background: '#0d1428' }}>Otro</option>
                </select>
              </div>

              <div>
                <label style={{ fontSize: '0.78rem', fontWeight: 600, color: 'var(--text-muted)', letterSpacing: '0.06em', textTransform: 'uppercase', marginBottom: '0.4rem', display: 'block' }}>
                  Mensaje
                </label>
                <textarea
                  name="message" required rows="5"
                  placeholder="Cuéntame sobre tu proyecto, plazos, presupuesto..."
                  style={{ ...inputStyle, resize: 'vertical', minHeight: 120 }}
                  onFocus={e => e.target.style.borderColor = 'var(--accent-gold)'}
                  onBlur={e => e.target.style.borderColor = 'rgba(255,255,255,0.1)'}
                />
              </div>

              <button
                type="submit"
                disabled={status === 'sending'}
                className="btn-gold"
                style={{
                  width: '100%', justifyContent: 'center', border: 'none',
                  opacity: status === 'sending' ? 0.7 : 1,
                  padding: '0.9rem',
                  fontSize: '0.95rem',
                }}
              >
                {status === 'sending' ? 'Enviando...' : 'Enviar mensaje →'}
              </button>

              {/* Status messages */}
              {status === 'ok' && (
                <div style={{ borderRadius: 10, padding: '0.75rem 1rem', background: 'rgba(74,222,128,0.1)', border: '1px solid rgba(74,222,128,0.3)', color: '#4ade80', fontSize: '0.85rem', fontWeight: 500, textAlign: 'center' }}>
                  ✓ Mensaje enviado. Te responderé en menos de 24 horas.
                </div>
              )}
              {status === 'error' && (
                <div style={{ borderRadius: 10, padding: '0.75rem 1rem', background: 'rgba(239,68,68,0.1)', border: '1px solid rgba(239,68,68,0.3)', color: '#f87171', fontSize: '0.85rem', fontWeight: 500, textAlign: 'center' }}>
                  ✗ Error al enviar. Escríbeme por WhatsApp.
                </div>
              )}
            </form>
          </motion.div>

          {/* Contact cards */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            style={{ display: 'flex', flexDirection: 'column', gap: '0.9rem' }}
          >
            {contactCards.map((card, i) => (
              <a
                key={i}
                href={card.link}
                target="_blank"
                rel="noopener noreferrer"
                className="glass-card"
                style={{
                  display: 'flex', alignItems: 'center', gap: '1rem',
                  padding: '1.1rem 1.25rem', textDecoration: 'none',
                  transition: 'all 0.3s ease',
                }}
                onMouseEnter={e => { e.currentTarget.style.borderColor = card.color + '55'; e.currentTarget.style.transform = 'translateX(4px)'; }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.08)'; e.currentTarget.style.transform = 'translateX(0)'; }}
              >
                <div style={{
                  width: 44, height: 44, borderRadius: 12, flexShrink: 0,
                  background: card.color + '18',
                  border: `1px solid ${card.color}44`,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontSize: '1.3rem',
                }}>
                  {card.icon}
                </div>
                <div style={{ flex: 1, minWidth: 0 }}>
                  <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', fontWeight: 600, marginBottom: '0.15rem' }}>
                    {card.label}
                  </div>
                  <div style={{
                    fontSize: '0.85rem', color: 'var(--text-primary)', fontWeight: 600,
                    overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap',
                  }}>
                    {card.value}
                  </div>
                  <div style={{ fontSize: '0.72rem', color: 'var(--text-muted)' }}>{card.sub}</div>
                </div>
                <svg width="14" height="14" fill="none" stroke="var(--text-muted)" viewBox="0 0 24 24" style={{ flexShrink: 0 }}>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </a>
            ))}
          </motion.div>
        </div>

        {/* Footer line */}
        <div style={{ textAlign: 'center', marginTop: '4rem', color: 'var(--text-muted)', fontSize: '0.8rem' }}>
          Diseñado & desarrollado por <strong style={{ color: 'var(--accent-gold)' }}>Kristian Archila</strong> · 2025
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .contact-grid { grid-template-columns: 1fr !important; }
          .form-row { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}