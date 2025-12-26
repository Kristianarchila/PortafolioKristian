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
      tecnologias: 'Node.js, Express, REST APIs'
    },
    {
      icon: '🏢',
      titulo: 'SaaS Multi-tenant',
      descripcion: 'Arquitectura de roles y tenant isolation',
      tecnologias: 'MERN Stack, MongoDB'
    },
    {
      icon: '📱',
      titulo: 'Aplicaciones Full-Stack',
      descripcion: 'Soluciones completas de principio a fin',
      tecnologias: 'MERN, MySQL, PostgreSQL'
    }
  ];

  return (
    <div className="relative bg-gradient-to-br from-black via-gray-900 to-blue-950 text-white overflow-hidden">
      
      {/* 🌌 Fondo de partículas */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-black via-gray-900 to-blue-950">
        <Particles
          particleCount={80}
          particleSpread={12}
          speed={0.2}
          particleColors={["#1a1a1aff", "#0a4a6aff", "#0c2d48ff"]}
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
        <div className="absolute top-20 left-10 w-72 h-72 bg-cyan-500/20 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-pulse-slow" />
        <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-gray-500/10 rounded-full blur-3xl" />
      </div>

      {/* ============================================ */}
      {/* HERO SECTION - TECH STYLE */}
      {/* ============================================ */}
      <section className="relative min-h-screen flex items-center justify-center px-6 md:px-24 py-20">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          
          {/* Contenido principal */}
          <div className="space-y-6 text-center md:text-left order-2 md:order-1">
            
            {/* Badge de disponibilidad - Tech style */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-black/40 border border-cyan-400/50 text-cyan-400 text-sm font-mono mb-4">
              <span className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse" />
              <span>&lt;available_for_hire /&gt;</span>
            </div>
            
            {/* Título principal - TECH AESTHETIC */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight font-mono">
              <span className="text-cyan-400">const</span>{' '}
              <span className="text-white">developer</span>{' '}
              <span className="text-purple-400">=</span>{' '}
              <span className="text-blue-300">{'{'}</span>
              <br />
              <span className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl ml-4 md:ml-8">
                <span className="text-yellow-300">stack</span>
                <span className="text-purple-400">:</span>{' '}
                <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-indigo-400 bg-clip-text text-transparent">
                  'MERN + SaaS'
                </span>
              </span>
              <br />
              <span className="text-blue-300">{'}'}</span>
            </h1>
            
            {/* Subtítulo tech */}
            <p className="text-lg md:text-xl text-cyan-300/80 leading-relaxed max-w-xl font-mono">
              <span className="text-gray-400">//</span> Full-Stack Developer | SaaS Multi-tenant Specialist
              <br />
              <span className="text-gray-400">//</span> MERN Stack • REST APIs • MongoDB
            </p>

            {/* Estadísticas tech style */}
            <div className="flex flex-wrap gap-6 justify-center md:justify-start py-4 font-mono">
              <div className="bg-black/40 px-4 py-3 border border-cyan-400/30">
                <div className="text-sm text-gray-400">experience:</div>
                <div className="text-2xl font-bold text-cyan-400">2+ years</div>
              </div>
              <div className="bg-black/40 px-4 py-3 border border-blue-400/30">
                <div className="text-sm text-gray-400">projects:</div>
                <div className="text-2xl font-bold text-blue-400">5+ complete</div>
              </div>
              <div className="bg-black/40 px-4 py-3 border border-green-400/30">
                <div className="text-sm text-gray-400">specialty:</div>
                <div className="text-xl font-bold text-green-400">SaaS</div>
              </div>
            </div>

            {/* CTAs tech style */}
            <div className="flex flex-col sm:flex-row gap-4 pt-6 font-mono">
              <a 
                href="mailto:kristianarchila65@gmail.com"
                className="group relative px-8 py-3 bg-cyan-500 text-black font-bold text-lg overflow-hidden transition-all hover:bg-cyan-400"
              >
                <span className="relative z-10">hire_developer()</span>
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-300 to-blue-400 translate-x-full group-hover:translate-x-0 transition-transform duration-300" />
              </a>
              <Link 
                to="/portafolio"
                className="px-8 py-3 bg-transparent border-2 border-cyan-400 text-cyan-400 font-bold text-lg hover:bg-cyan-400/10 transition-all"
              >
                view_projects()
              </Link>
            </div>

            {/* Stack tecnológico - Terminal style */}
            <div className="pt-6 font-mono text-sm">
              <div className="text-gray-400 mb-2">$ tech-stack --list</div>
              <div className="flex flex-wrap gap-2 justify-center md:justify-start">
                <span className="px-3 py-1 bg-black/40 border border-blue-400/50 text-blue-400">React.js</span>
                <span className="px-3 py-1 bg-black/40 border border-green-400/50 text-green-400">Node.js</span>
                <span className="px-3 py-1 bg-black/40 border border-emerald-400/50 text-emerald-400">MongoDB</span>
                <span className="px-3 py-1 bg-black/40 border border-yellow-400/50 text-yellow-400">Express</span>
                <span className="px-3 py-1 bg-black/40 border border-cyan-400/50 text-cyan-400">REST APIs</span>
              </div>
            </div>
          </div>

          {/* Imagen */}
          <div className="relative flex justify-center items-center order-1 md:order-2">
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-cyan-500/20 via-blue-500/20 to-indigo-500/20 blur-2xl animate-pulse-slow" />
            <img
              src="/kris.png"
              alt="Kristian Archila - Full-Stack Developer"
              loading="lazy"
              className="relative w-64 sm:w-80 md:w-80 lg:w-96 rounded-full shadow-2xl shadow-blue-500/30 border-4 border-cyan-300/30 object-cover hover-scale"
            />
          </div>
        </div>
      </section>

      {/* ================================ */}
      {/* SECCIÓN: SERVICIOS - TECH STYLE */}
      {/* ================================ */}
      <section className="relative px-6 md:px-24 py-20 bg-black/20">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 font-mono">
            <div className="text-cyan-400 text-sm mb-2">{'<services>'}</div>
            <h2 className="text-4xl md:text-6xl font-bold mb-4 text-white">
              services<span className="text-cyan-400">.map()</span>
            </h2>
            <p className="text-xl text-gray-400">
              <span className="text-purple-400">return</span> scalable_solutions
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            {servicios.map((servicio, index) => (
              <div
                key={index}
                onMouseEnter={() => setHoveredService(index)}
                onMouseLeave={() => setHoveredService(null)}
                className={`
                  relative p-6 bg-black/40 border-2 cursor-pointer font-mono
                  ${hoveredService === index ? 'border-cyan-400 bg-cyan-400/5' : 'border-gray-700'}
                  transition-all duration-300
                `}
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="text-4xl">{servicio.icon}</div>
                  <div className={`text-xs px-2 py-1 border ${hoveredService === index ? 'border-cyan-400 text-cyan-400' : 'border-gray-600 text-gray-500'}`}>
                    #{index + 1}
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-2 text-white">{servicio.titulo}</h3>
                <p className="text-gray-400 mb-4 text-sm">{servicio.descripcion}</p>
                <div className="text-xs text-cyan-400 border-l-2 border-cyan-400 pl-3">
                  <span className="text-gray-500">tech:</span> {servicio.tecnologias}
                </div>
              </div>
            ))}
          </div>
          <div className="text-cyan-400 text-sm text-center mt-8 font-mono">{'</services>'}</div>
        </div>
      </section>

      {/* ================================ */}
      {/* POR QUÉ TRABAJAR CONMIGO - TECH */}
      {/* ================================ */}
      <section className="relative px-6 md:px-24 py-20">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12 font-mono">
            <div className="text-cyan-400 text-sm mb-2">{'<advantages>'}</div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">
              why<span className="text-cyan-400">.</span>hire<span className="text-purple-400">(</span>me<span className="text-purple-400">)</span>
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-4 font-mono">
            <div className="bg-black/40 p-6 border-2 border-cyan-400/30 hover:border-cyan-400 transition-colors">
              <div className="text-3xl mb-3 text-cyan-400">⚡</div>
              <h3 className="text-lg font-bold mb-2 text-cyan-400">fast_delivery</h3>
              <p className="text-gray-400 text-sm">
                Clean code in agreed timeframes
              </p>
            </div>
            <div className="bg-black/40 p-6 border-2 border-blue-400/30 hover:border-blue-400 transition-colors">
              <div className="text-3xl mb-3 text-blue-400">💬</div>
              <h3 className="text-lg font-bold mb-2 text-blue-400">clear_communication</h3>
              <p className="text-gray-400 text-sm">
                Constant updates throughout development
              </p>
            </div>
            <div className="bg-black/40 p-6 border-2 border-purple-400/30 hover:border-purple-400 transition-colors">
              <div className="text-3xl mb-3 text-purple-400">🎯</div>
              <h3 className="text-lg font-bold mb-2 text-purple-400">saas_specialist</h3>
              <p className="text-gray-400 text-sm">
                Multi-tenant architecture expert
              </p>
            </div>
          </div>
          <div className="text-cyan-400 text-sm text-center mt-8 font-mono">{'</advantages>'}</div>
        </div>
      </section>

      {/* ================================ */}
      {/* CTA FINAL - TECH STYLE */}
      {/* ================================ */}
      <section className="relative px-6 md:px-24 py-20">
        <div className="max-w-4xl mx-auto text-center bg-black/60 border-2 border-cyan-400/30 p-12 font-mono">
          <p className="text-xl text-gray-400 mb-2">
            <span className="text-purple-400">if</span> (project<span className="text-purple-400">.</span>status <span className="text-purple-400">===</span> <span className="text-yellow-400">'pending'</span>) <span className="text-cyan-400">{'{'}</span>
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 ml-4">
            let's<span className="text-cyan-400">.</span>collaborate<span className="text-yellow-400">()</span>
          </h2>
          <p className="text-lg text-gray-400 mb-8 ml-4">
            <span className="text-gray-500">//</span> Available for MERN & SaaS projects
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="mailto:kristianarchila65@gmail.com"
              className="px-8 py-3 bg-cyan-500 hover:bg-cyan-400 text-black font-bold text-lg transition-all"
            >
              send_email()
            </a>
            <a 
              href="https://wa.me/56985622986"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3 bg-green-600 hover:bg-green-500 text-white font-bold text-lg transition-all"
            >
              whatsapp_chat()
            </a>
          </div>
          <p className="text-xl text-cyan-400 mt-6">
            <span className="text-cyan-400">{'}'}</span>
          </p>
        </div>
      </section>

      {/* ============================================ */}
      {/* ESTILOS */}
      {/* ============================================ */}
      <style>{`
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

        @media (prefers-reduced-motion: reduce) {
          .animate-pulse-slow,
          .hover-scale {
            animation: none !important;
            transition: none !important;
          }
        }

        @media (max-width: 768px) {
          .hover-scale:hover {
            transform: scale(1.02);
          }
        }
      `}</style>
    </div>
  );
}