import { Link, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';

export default function Navbar() {
  const location = useLocation();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { to: '/', label: 'Home' },
    { to: '/sobre-mi', label: 'Sobre Mí' },
    { to: '/tecnologias', label: 'Tecnologías' },
    { to: '/portafolio', label: 'Portafolio' },
    { to: '/contacto', label: 'Contacto' }
  ];

  return (
    <>
      <nav 
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          scrolled 
            ? 'bg-purple-950/95 backdrop-blur-md shadow-lg shadow-blue-500/10 py-3' 
            : 'bg-transparent py-6'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
          
          {/* Logo */}
          <Link 
            to="/" 
            className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-cyan-400 via-blue-400 to-indigo-400 bg-clip-text text-transparent hover:scale-105 transition-transform z-50"
          >
            Kris.dev
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className={`relative px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
                  location.pathname === link.to
                    ? 'text-cyan-400'
                    : 'text-blue-100/80 hover:text-cyan-300'
                }`}
              >
                {link.label}
                {location.pathname === link.to && (
                  <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1/2 h-0.5 bg-gradient-to-r from-cyan-400 to-blue-400 rounded-full" />
                )}
              </Link>
            ))}
          </div>

          {/* CTA Button Desktop */}
          <Link
            to="/contacto"
            className="hidden md:block bg-gradient-to-r from-cyan-500 via-blue-500 to-indigo-600 hover:from-cyan-400 hover:via-blue-400 hover:to-indigo-500 text-white px-6 py-2 rounded-full font-semibold text-sm transition-all duration-300 shadow-lg shadow-blue-500/30 hover:shadow-cyan-400/40 hover:scale-105"
          >
            Hablemos 🚀
          </Link>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-cyan-400 hover:text-cyan-300 transition-colors z-50"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 md:hidden">
          <div 
            className="absolute inset-0 bg-purple-950/95 backdrop-blur-lg"
            onClick={() => setMobileMenuOpen(false)}
          />
          <div className="relative h-full flex flex-col items-center justify-center space-y-8">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                onClick={() => setMobileMenuOpen(false)}
                className={`text-2xl font-bold transition-all duration-300 ${
                  location.pathname === link.to
                    ? 'text-cyan-400 scale-110'
                    : 'text-blue-100/80 hover:text-cyan-300 hover:scale-105'
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Link
              to="/contacto"
              onClick={() => setMobileMenuOpen(false)}
              className="bg-gradient-to-r from-cyan-500 via-blue-500 to-indigo-600 text-white px-8 py-3 rounded-full font-semibold text-lg shadow-lg shadow-blue-500/30 hover:scale-105 transition-transform"
            >
              Hablemos 🚀
            </Link>
          </div>
        </div>
      )}
    </>
  );
}