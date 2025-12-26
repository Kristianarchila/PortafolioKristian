import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Particles from "./Backgrods";

export default function SobreMi() {

  const stats = [
    { numero: '2', label: 'Años de Experiencia', icon: '📅' },
    { numero: '5+', label: 'Proyectos Completados', icon: '🚀' },
    { numero: '10+', label: 'Tecnologías Dominadas', icon: '💻' },
    { numero: '100%', label: 'Satisfacción del Cliente', icon: '⭐' },
  ];

  const habilidadesBlandas = [
    { nombre: 'Resolución de Problemas', icon: '🧩' },
    { nombre: 'Trabajo en Equipo', icon: '🤝' },
    { nombre: 'Comunicación Efectiva', icon: '💬' },
    { nombre: 'Aprendizaje Continuo', icon: '📚' },
    { nombre: 'Gestión del Tiempo', icon: '⏰' },
    { nombre: 'Pensamiento Crítico', icon: '🎯' },
  ];

  return (
    <section className="relative min-h-screen py-20 px-6 md:px-24 overflow-hidden">
      
      {/* 🌌 Fondo de partículas - TECH STYLE */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-black via-gray-900 to-blue-950">
        <Particles
          particleCount={60}
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

      <div className="max-w-7xl mx-auto">
        {/* Header - TECH STYLE */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 font-mono"
        >
          <div className="text-cyan-400 text-sm mb-2">{'<about>'}</div>
          <h1 className="text-5xl md:text-7xl font-bold mb-4 text-white">
            about<span className="text-cyan-400">.</span>me<span className="text-purple-400">()</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-400">
            <span className="text-purple-400">//</span> Developer story & skills
          </p>
        </motion.div>

        {/* Sección Foto + Historia - TECH STYLE */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid md:grid-cols-2 gap-12 items-center mb-20"
        >
          {/* Foto - TECH STYLE */}
          <div className="relative flex justify-center">
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 via-blue-500/20 to-indigo-500/20 blur-3xl animate-pulse-slow" />
            <div className="relative">
              <img
                src="/kris.png"
                alt="Kris"
                loading="lazy"
                className="relative w-72 h-72 md:w-96 md:h-96 shadow-2xl shadow-blue-500/30 border-4 border-cyan-400/30 object-cover profile-image"
              />
              {/* Terminal frame decorativo */}
              <div className="absolute -top-2 -left-2 w-full h-full border-2 border-cyan-400/20 pointer-events-none" />
            </div>
          </div>

          {/* Historia - TECH STYLE */}
          <div className="space-y-6 text-gray-300 text-lg leading-relaxed font-mono">
            <div className="bg-black/40 border border-cyan-400/30 p-6">
              <div className="text-cyan-400 text-sm mb-2">{'{ name: "Kris" }'}</div>
              <p>
                Full Stack developer apasionado por crear soluciones web innovadoras que marquen la diferencia.
              </p>
            </div>

            <div className="bg-black/40 border border-blue-400/30 p-6">
              <div className="text-blue-400 text-sm mb-2">{'{ experience: "2+ years" }'}</div>
              <p>
                Mi viaje comenzó cuando descubrí que podía{' '}
                <span className="text-cyan-400">convertir ideas en realidad</span> a través del código.
              </p>
            </div>

            <div className="bg-black/40 border border-purple-400/30 p-6">
              <div className="text-purple-400 text-sm mb-2">{'{ stack: [...] }'}</div>
              <p>
                Especializado en <span className="text-blue-400">React</span>,{' '}
                <span className="text-green-400">Node.js</span>,{' '}
                <span className="text-yellow-400">Python</span>,{' '}
                <span className="text-emerald-400">MongoDB</span> &{' '}
                <span className="text-cyan-400">MySQL</span>.
              </p>
            </div>

            <div className="bg-black/40 border border-yellow-400/30 p-6">
              <div className="text-yellow-400 text-sm mb-2">{'{ passion: true }'}</div>
              <p>
                Resolver <span className="text-purple-400">problemas complejos</span> y crear experiencias intuitivas y rápidas.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Estadísticas - TECH STYLE */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mb-20"
        >
          <div className="text-center mb-10 font-mono">
            <div className="text-cyan-400 text-sm mb-2">{'<stats>'}</div>
            <h2 className="text-3xl md:text-4xl font-bold text-white">
              const stats<span className="text-purple-400"> = </span>
              <span className="text-cyan-400">[</span>
            </h2>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 font-mono">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ 
                  delay: 0.4 + index * 0.1,
                  duration: 0.3
                }}
                whileHover={{ scale: 1.05 }}
                className="stat-card"
              >
                <div className="text-xs text-gray-500 mb-2">{'// ' + stat.label}</div>
                <div className="text-4xl mb-2">{stat.icon}</div>
                <div className="text-3xl md:text-4xl font-bold text-cyan-400">
                  {stat.numero}
                </div>
              </motion.div>
            ))}
          </div>
          
          <div className="text-center mt-10 font-mono">
            <h2 className="text-3xl md:text-4xl font-bold text-white">
              <span className="text-cyan-400">]</span>
            </h2>
            <div className="text-cyan-400 text-sm mt-2">{'</stats>'}</div>
          </div>
        </motion.div>

        {/* Habilidades Blandas - TECH STYLE */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mb-20"
        >
          <div className="text-center mb-10 font-mono">
            <div className="text-cyan-400 text-sm mb-2">{'<soft_skills>'}</div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-2">
              skills<span className="text-cyan-400">.soft</span>
            </h2>
            <p className="text-gray-400">
              <span className="text-purple-400">return</span> personal_abilities
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 font-mono">
            {habilidadesBlandas.map((habilidad, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ 
                  delay: 0.6 + index * 0.03,
                  duration: 0.3
                }}
                whileHover={{ scale: 1.05 }}
                className="skill-card"
              >
                <div className="text-xs text-gray-500 mb-2">#{index + 1}</div>
                <div className="text-3xl mb-2">{habilidad.icon}</div>
                <p className="text-gray-300 text-sm">{habilidad.nombre}</p>
              </motion.div>
            ))}
          </div>
          
          <div className="text-cyan-400 text-sm text-center mt-8 font-mono">{'</soft_skills>'}</div>
        </motion.div>

        {/* Filosofía - TECH STYLE */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="bg-black/40 border-2 border-cyan-400/30 p-8 md:p-12 mb-20 font-mono"
        >
          <div className="text-cyan-400 text-sm mb-4 text-center">{'<philosophy>'}</div>
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-6 text-white">
            my<span className="text-cyan-400">.</span>philosophy<span className="text-purple-400">()</span>
          </h2>
          <div className="bg-black/60 border-l-4 border-cyan-400 p-6">
            <p className="text-gray-300 text-lg md:text-xl leading-relaxed">
              <span className="text-gray-500">{'// '}</span>
              Código <span className="text-cyan-400">limpio</span>, comunicación{' '}
              <span className="text-blue-400">clara</span> y aprendizaje{' '}
              <span className="text-purple-400">continuo</span> son la base de cualquier proyecto exitoso.
              <br /><br />
              <span className="text-gray-500">{'// '}</span>
              Creo soluciones que son <span className="text-cyan-400">escalables</span>,{' '}
              <span className="text-blue-400">mantenibles</span> y{' '}
              <span className="text-purple-400">deleitantes</span> para el usuario final.
            </p>
          </div>
          <div className="text-cyan-400 text-sm mt-4 text-center">{'</philosophy>'}</div>
        </motion.div>

        {/* CTA - TECH STYLE */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center font-mono"
        >
          <p className="text-xl text-gray-400 mb-6">
            <span className="text-purple-400">if</span> (interested) <span className="text-cyan-400">{'{'}</span>
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/portafolio">
              <button className="cta-btn-primary">
                view_projects()
              </button>
            </Link>
            <Link to="/tecnologias">
              <button className="cta-btn-secondary">
                view_tech_stack()
              </button>
            </Link>
          </div>
          <p className="text-xl text-cyan-400 mt-6">
            <span className="text-cyan-400">{'}'}</span>
          </p>
        </motion.div>

      </div>

      {/* ESTILOS TECH */}
      <style>{`
        /* Pulse lento */
        .animate-pulse-slow {
          animation: pulse-slow 4s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }

        @keyframes pulse-slow {
          0%, 100% { opacity: 0.2; }
          50% { opacity: 0.3; }
        }

        /* Imagen de perfil tech */
        .profile-image {
          transition: transform 0.5s ease;
          will-change: transform;
          clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%);
        }

        .profile-image:hover {
          transform: scale(1.05);
        }

        /* Tarjetas de estadísticas tech */
        .stat-card {
          background: rgba(0, 0, 0, 0.6);
          backdrop-filter: blur(8px);
          padding: 1.5rem;
          border: 2px solid rgba(59, 130, 246, 0.3);
          transition: all 0.3s ease;
          text-align: center;
          will-change: transform, border-color;
        }

        .stat-card:hover {
          border-color: rgba(34, 211, 238, 0.7);
          background: rgba(34, 211, 238, 0.05);
        }

        /* Tarjetas de habilidades tech */
        .skill-card {
          background: rgba(0, 0, 0, 0.6);
          backdrop-filter: blur(8px);
          padding: 1.5rem;
          border: 2px solid rgba(107, 114, 128, 0.3);
          transition: all 0.3s ease;
          text-align: center;
          will-change: transform, border-color;
        }

        .skill-card:hover {
          border-color: rgba(34, 211, 238, 0.7);
          background: rgba(34, 211, 238, 0.05);
        }

        /* Botones CTA tech */
        .cta-btn-primary {
          background: #06b6d4;
          color: black;
          padding: 1rem 2rem;
          font-weight: 700;
          font-size: 1.125rem;
          transition: all 0.3s ease;
          will-change: transform;
        }

        .cta-btn-primary:hover {
          transform: scale(1.05);
          background: #22d3ee;
        }

        .cta-btn-secondary {
          background: transparent;
          border: 2px solid #06b6d4;
          color: #06b6d4;
          padding: 1rem 2rem;
          font-weight: 700;
          font-size: 1.125rem;
          transition: all 0.3s ease;
          will-change: transform, background;
        }

        .cta-btn-secondary:hover {
          transform: scale(1.05);
          background: rgba(6, 182, 212, 0.1);
        }

        /* Mobile optimizations */
        @media (max-width: 768px) {
          .profile-image:hover {
            transform: scale(1.02);
          }
        }

        /* Respetar preferencias de movimiento reducido */
        @media (prefers-reduced-motion: reduce) {
          .animate-pulse-slow,
          .profile-image,
          .stat-card,
          .skill-card,
          .cta-btn-primary,
          .cta-btn-secondary,
          * {
            animation: none !important;
            transition: none !important;
          }
        }

        /* Optimización de backdrop-blur */
        @supports (backdrop-filter: blur(10px)) {
          .backdrop-blur-sm {
            backdrop-filter: blur(8px);
          }
        }

        @supports not (backdrop-filter: blur(10px)) {
          .backdrop-blur-sm {
            background-color: rgba(0, 0, 0, 0.8);
          }
        }
      `}</style>
    </section>
  );
}