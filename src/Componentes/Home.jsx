import { useState } from 'react';
import { Link } from 'react-router-dom';
import RotatingText from "./AnimatedText";
import Particles from "./Backgrods";

export default function Home() {
  const [hoveredService, setHoveredService] = useState(null);

  const servicios = [
    {
      icon: '🌐',
      titulo: 'Desarrollo Web',
      descripcion: 'Sitios modernos, rápidos y responsive',
      tecnologias: 'React, Next.js, Tailwind'
    },
    {
      icon: '⚙️',
      titulo: 'Backend & APIs',
      descripcion: 'Sistemas escalables y seguros',
      tecnologias: 'Node.js, Python, MongoDB'
    },
    {
      icon: '📱',
      titulo: 'Aplicaciones Full-Stack',
      descripcion: 'Soluciones completas de principio a fin',
      tecnologias: 'MERN, MySQL, PostgreSQL'
    },
    {
      icon: '🎨',
      titulo: 'UI/UX Diseño',
      descripcion: 'Interfaces intuitivas y atractivas',
      tecnologias: 'Figma, Responsive Design'
    }
  ];

  return (
    <div className="relative bg-purple-950 text-white overflow-hidden">
      
      {/* 🌌 Fondo de partículas - IGUAL QUE TU VERSION */}
      <div className="absolute inset-0 -z-10 bg-purple-950">
        <Particles
          particleCount={80}
          particleSpread={12}
          speed={0.2}
          particleColors={["#150e18ff", "#114888ff", "#041e68ff"]}
          moveParticlesOnHover={false}
          particleHoverFactor={0}
          alphaParticles={false}
          particleBaseSize={180}
          sizeRandomness={1.8}
          cameraDistance={25}
        />
      </div>

      {/* Partículas decorativas */}
      <div className="absolute inset-0 -z-10 opacity-20">
        <div className="absolute top-20 left-10 w-72 h-72 bg-cyan-500/20 rounded-full blur-2xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-500/20 rounded-full blur-2xl animate-pulse-slow" />
      </div>

      {/* ============================================ */}
      {/* HERO SECTION - VERSIÓN ORIENTADA A CLIENTES */}
      {/* ============================================ */}
      <section className="relative min-h-screen flex items-center justify-center px-6 md:px-24 py-20">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          
          {/* Contenido principal */}
          <div className="space-y-6 text-center md:text-left order-2 md:order-1">
            
            {/* Badge de disponibilidad */}
            <div className="inline-block px-4 py-2 bg-cyan-500/10 border border-cyan-400/30 rounded-full text-cyan-400 text-sm font-semibold mb-4">
              ✨ Disponible para proyectos
            </div>
            
            {/* Título principal - ENFOCADO EN VALOR */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight">
              Convierto ideas en{' '}
              <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-indigo-400 bg-clip-text text-transparent">
                aplicaciones web
              </span>{' '}
              que funcionan
            </h1>
            
            {/* Subtítulo con propuesta de valor clara */}
            <p className="text-lg md:text-xl text-blue-100/80 leading-relaxed max-w-xl">
              Desarrollo soluciones <strong>full-stack escalables</strong> con React, Node.js y bases de datos modernas. 
              Desde landing pages hasta sistemas completos.
            </p>

            {/* Estadísticas rápidas */}
            <div className="flex flex-wrap gap-6 justify-center md:justify-start py-4">
              <div>
                <div className="text-3xl font-bold text-cyan-400">2+</div>
                <div className="text-sm text-blue-100/60">Años</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-cyan-400">5+</div>
                <div className="text-sm text-blue-100/60">Proyectos</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-cyan-400">100%</div>
                <div className="text-sm text-blue-100/60">Satisfacción</div>
              </div>
            </div>

            {/* CTAs PRINCIPALES - MUY IMPORTANTE */}
            <div className="flex flex-col sm:flex-row gap-4 pt-6">
              <a 
                href="mailto:kristianarchila65@gmail.com"
                className="btn-primary-cta"
              >
                Contratar ahora 💼
              </a>
              <Link 
                to="/portafolio"
                className="btn-secondary-cta"
              >
                Ver proyectos 🚀
              </Link>
            </div>

            {/* Stack tecnológico */}
            <div className="flex flex-wrap gap-3 pt-6 justify-center md:justify-start">
              <span className="px-3 py-1 bg-blue-500/20 rounded-full text-sm border border-blue-400/30">React</span>
              <span className="px-3 py-1 bg-green-500/20 rounded-full text-sm border border-green-400/30">Node.js</span>
              <span className="px-3 py-1 bg-blue-400/20 rounded-full text-sm border border-blue-300/30">Python</span>
              <span className="px-3 py-1 bg-emerald-500/20 rounded-full text-sm border border-emerald-400/30">MongoDB</span>
              <span className="px-3 py-1 bg-cyan-500/20 rounded-full text-sm border border-cyan-400/30">MySQL</span>
            </div>
          </div>

          {/* Imagen - MANTIENE TU DISEÑO */}
          <div className="relative flex justify-center items-center order-1 md:order-2">
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-cyan-500/20 via-blue-500/20 to-indigo-500/20 blur-2xl animate-pulse-slow" />
            <img
              src="/kris.png"
              alt="Kris - Desarrollador Full Stack"
              loading="lazy"
              className="relative w-64 sm:w-80 md:w-80 lg:w-96 rounded-full shadow-2xl shadow-blue-500/30 border-4 border-cyan-300/30 object-cover hover-scale"
            />
          </div>
        </div>
      </section>

      {/* ================================ */}
      {/* NUEVA SECCIÓN: QUÉ HAGO */}
      {/* ================================ */}
      <section className="relative px-6 md:px-24 py-20 bg-purple-900/30">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
              ¿Qué puedo hacer por ti?
            </h2>
            <p className="text-xl text-blue-100/70">
              Servicios especializados para llevar tu proyecto al siguiente nivel
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {servicios.map((servicio, index) => (
              <div
                key={index}
                onMouseEnter={() => setHoveredService(index)}
                onMouseLeave={() => setHoveredService(null)}
                className={`
                  relative p-8 rounded-2xl bg-purple-900/40 border-2 cursor-pointer
                  ${hoveredService === index ? 'border-cyan-400 scale-105' : 'border-blue-500/30'}
                  transition-all duration-300 hover:shadow-xl hover:shadow-cyan-500/20
                `}
              >
                <div className="text-5xl mb-4">{servicio.icon}</div>
                <h3 className="text-2xl font-bold mb-2 text-white">{servicio.titulo}</h3>
                <p className="text-blue-100/70 mb-4">{servicio.descripcion}</p>
                <div className="text-sm text-cyan-400 font-semibold">
                  {servicio.tecnologias}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================================ */}
      {/* POR QUÉ TRABAJAR CONMIGO */}
      {/* ================================ */}
      <section className="relative px-6 md:px-24 py-20">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-12 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
            ¿Por qué elegirme?
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-6 bg-purple-900/30 rounded-2xl border border-blue-500/20">
              <div className="text-4xl mb-3">⚡</div>
              <h3 className="text-xl font-bold mb-2">Entrega rápida</h3>
              <p className="text-blue-100/70">
                Código limpio y optimizado en tiempos acordados
              </p>
            </div>
            <div className="p-6 bg-purple-900/30 rounded-2xl border border-blue-500/20">
              <div className="text-4xl mb-3">💬</div>
              <h3 className="text-xl font-bold mb-2">Comunicación clara</h3>
              <p className="text-blue-100/70">
                Actualizaciones constantes durante el desarrollo
              </p>
            </div>
            <div className="p-6 bg-purple-900/30 rounded-2xl border border-blue-500/20">
              <div className="text-4xl mb-3">🎯</div>
              <h3 className="text-xl font-bold mb-2">Enfoque en resultados</h3>
              <p className="text-blue-100/70">
                Soluciones que realmente resuelven problemas
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ================================ */}
      {/* CTA FINAL - MUY IMPORTANTE */}
      {/* ================================ */}
      <section className="relative px-6 md:px-24 py-20">
        <div className="max-w-4xl mx-auto text-center bg-gradient-to-r from-purple-900/60 to-blue-900/60 backdrop-blur-sm rounded-3xl p-12 border border-cyan-400/30">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            ¿Tienes un proyecto en mente?
          </h2>
          <p className="text-xl text-blue-100/80 mb-8">
            Hablemos sobre cómo puedo ayudarte a hacerlo realidad
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="mailto:kristianarchila65@gmail.com"
              className="btn-cta-final-email"
            >
              Contactar ahora ✉️
            </a>
            <a 
              href="https://wa.me/56985622986"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-cta-final-whatsapp"
            >
              WhatsApp 📱
            </a>
          </div>
        </div>
      </section>

      {/* ============================================ */}
      {/* ESTILOS - MANTIENE TUS ANIMACIONES */}
      {/* ============================================ */}
      <style>{`
        /* Animaciones existentes */
        .animate-pulse-slow {
          animation: pulse-slow 4s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }

        @keyframes pulse-slow {
          0%, 100% { opacity: 0.2; }
          50% { opacity: 0.3; }
        }

        .hover-scale {
          transition: transform 0.5s ease;
          will-change: transform;
        }

        .hover-scale:hover {
          transform: scale(1.05);
        }

        /* NUEVOS ESTILOS PARA CTAs */
        .btn-primary-cta {
          display: inline-block;
          padding: 1rem 2.5rem;
          background: linear-gradient(to right, #06b6d4, #3b82f6, #6366f1);
          border-radius: 9999px;
          font-weight: 700;
          font-size: 1.125rem;
          color: white;
          box-shadow: 0 10px 15px -3px rgba(59, 130, 246, 0.4);
          transition: all 0.3s ease;
          text-align: center;
        }

        .btn-primary-cta:hover {
          transform: scale(1.05);
          box-shadow: 0 20px 25px -5px rgba(34, 211, 238, 0.5);
        }

        .btn-secondary-cta {
          display: inline-block;
          padding: 1rem 2.5rem;
          background: rgba(88, 28, 135, 0.5);
          border: 2px solid rgba(34, 211, 238, 0.5);
          border-radius: 9999px;
          font-weight: 700;
          font-size: 1.125rem;
          color: white;
          transition: all 0.3s ease;
          text-align: center;
        }

        .btn-secondary-cta:hover {
          transform: scale(1.05);
          border-color: rgb(34, 211, 238);
        }

        .btn-cta-final-email {
          display: inline-block;
          padding: 1rem 2.5rem;
          background: linear-gradient(to right, #06b6d4, #3b82f6);
          border-radius: 9999px;
          font-weight: 700;
          font-size: 1.125rem;
          color: white;
          box-shadow: 0 10px 15px -3px rgba(6, 182, 212, 0.4);
          transition: all 0.3s ease;
        }

        .btn-cta-final-email:hover {
          transform: scale(1.05);
          box-shadow: 0 20px 25px -5px rgba(6, 182, 212, 0.5);
        }

        .btn-cta-final-whatsapp {
          display: inline-block;
          padding: 1rem 2.5rem;
          background: #25D366;
          border-radius: 9999px;
          font-weight: 700;
          font-size: 1.125rem;
          color: white;
          box-shadow: 0 10px 15px -3px rgba(37, 211, 102, 0.4);
          transition: all 0.3s ease;
        }

        .btn-cta-final-whatsapp:hover {
          transform: scale(1.05);
          box-shadow: 0 20px 25px -5px rgba(37, 211, 102, 0.5);
        }

        /* Respetar preferencias de movimiento reducido */
        @media (prefers-reduced-motion: reduce) {
          .animate-pulse-slow,
          .hover-scale,
          .btn-primary-cta,
          .btn-secondary-cta,
          .btn-cta-final-email,
          .btn-cta-final-whatsapp {
            animation: none !important;
            transition: none !important;
          }
        }

        /* Mobile optimizations */
        @media (max-width: 768px) {
          .hover-scale:hover {
            transform: scale(1.02);
          }
        }
      `}</style>
    </div>
  );
}