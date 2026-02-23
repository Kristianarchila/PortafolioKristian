import { useState, useEffect } from 'react';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('inicio');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 60);

      // Detect active section
      const sections = ['inicio', 'sobre-mi', 'tecnologias', 'portafolio', 'contacto'];
      const offsets = sections.map(id => {
        const el = document.getElementById(id);
        return el ? { id, top: el.getBoundingClientRect().top } : null;
      }).filter(Boolean);

      const current = offsets.filter(o => o.top <= 120).pop();
      if (current) setActiveSection(current.id);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setMobileMenuOpen(false);
  };

  const navLinks = [
    { id: 'inicio', label: 'Inicio' },
    { id: 'sobre-mi', label: 'Sobre Mí' },
    { id: 'tecnologias', label: 'Tecnologías' },
    { id: 'portafolio', label: 'Proyectos' },
    { id: 'contacto', label: 'Contacto' },
  ];

  return (
    <>
      <nav style={{
        position: 'fixed', top: 0, width: '100%', zIndex: 50,
        transition: 'all 0.35s ease',
        padding: scrolled ? '0.8rem 0' : '1.2rem 0',
        background: scrolled ? 'rgba(8,13,26,0.93)' : 'transparent',
        backdropFilter: scrolled ? 'blur(18px)' : 'none',
        borderBottom: scrolled ? '1px solid rgba(255,255,255,0.06)' : 'none',
      }}>
        <div style={{
          maxWidth: 1100, margin: '0 auto', padding: '0 1.5rem',
          display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        }}>
          {/* Logo */}
          <button onClick={() => scrollTo('inicio')} style={{
            background: 'none', border: 'none', cursor: 'pointer',
            fontFamily: "'Outfit', sans-serif",
            fontSize: '1.35rem', fontWeight: 800, letterSpacing: '-0.02em',
          }}>
            <span style={{ color: '#f1f5f9' }}>Kris</span>
            <span style={{ color: 'var(--accent-gold)' }}>.</span>
            <span style={{ color: '#6366f1' }}>dev</span>
          </button>

          {/* Desktop links */}
          <div className="desktop-nav" style={{ display: 'flex', alignItems: 'center', gap: '0.15rem' }}>
            {navLinks.map(link => {
              const isActive = activeSection === link.id;
              return (
                <button key={link.id} onClick={() => scrollTo(link.id)} style={{
                  background: isActive ? 'rgba(245,158,11,0.08)' : 'none',
                  border: 'none', cursor: 'pointer',
                  padding: '0.45rem 0.95rem', borderRadius: 8,
                  fontSize: '0.87rem', fontWeight: isActive ? 600 : 500,
                  color: isActive ? 'var(--accent-gold)' : 'var(--text-secondary)',
                  transition: 'all 0.2s ease',
                }}
                  onMouseEnter={e => { if (!isActive) { e.target.style.color = 'var(--text-primary)'; e.target.style.background = 'rgba(255,255,255,0.05)'; } }}
                  onMouseLeave={e => { if (!isActive) { e.target.style.color = 'var(--text-secondary)'; e.target.style.background = 'none'; } }}
                >
                  {link.label}
                </button>
              );
            })}
          </div>

          {/* CTA */}
          <button
            onClick={() => scrollTo('contacto')}
            className="btn-gold desktop-cta"
            style={{ fontSize: '0.83rem', padding: '0.55rem 1.3rem', border: 'none', cursor: 'pointer' }}
          >
            Hablemos →
          </button>

          {/* Mobile burger */}
          <button className="mobile-burger" onClick={() => setMobileMenuOpen(!mobileMenuOpen)} style={{
            background: 'none', border: 'none', cursor: 'pointer', color: 'var(--text-primary)', padding: '0.3rem',
          }}>
            {mobileMenuOpen
              ? <svg width="24" height="24" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
              : <svg width="24" height="24" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" /></svg>
            }
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div style={{
          position: 'fixed', inset: 0, zIndex: 49,
          background: 'rgba(8,13,26,0.97)', backdropFilter: 'blur(20px)',
          display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: '1.5rem',
        }}>
          {navLinks.map(link => (
            <button key={link.id} onClick={() => scrollTo(link.id)} style={{
              background: 'none', border: 'none', cursor: 'pointer',
              fontFamily: "'Outfit', sans-serif", fontSize: '1.75rem', fontWeight: 700,
              color: activeSection === link.id ? 'var(--accent-gold)' : 'var(--text-primary)',
              transition: 'color 0.2s',
            }}>
              {link.label}
            </button>
          ))}
          <button onClick={() => scrollTo('contacto')} className="btn-gold" style={{ marginTop: '0.5rem', border: 'none', cursor: 'pointer' }}>
            Hablemos →
          </button>
        </div>
      )}

      <style>{`
        @media (max-width: 768px) {
          .desktop-nav { display: none !important; }
          .desktop-cta { display: none !important; }
          .mobile-burger { display: block !important; }
        }
        @media (min-width: 769px) {
          .mobile-burger { display: none !important; }
        }
      `}</style>
    </>
  );
}