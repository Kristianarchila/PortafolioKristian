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
      
      {/* 🌌 Fondo de partículas - OPTIMIZADO */}
      <div className="absolute inset-0 -z-10 bg-purple-950">
        <Particles
          particleCount={60} // ⚡ Reducido de 300 a 60 (80% menos)
          particleSpread={12}
          speed={0.2} // ⚡ Reducido de 0.3 a 0.2
          particleColors={["#150e18ff", "#114888ff", "#041e68ff"]}
          moveParticlesOnHover={false} // ⚡ DESACTIVADO
          particleHoverFactor={0}
          alphaParticles={false} // ⚡ DESACTIVADO
          particleBaseSize={180}
          sizeRandomness={1.8}
          cameraDistance={25}
        />
      </div>

      {/* Partículas decorativas - OPTIMIZADO */}
      <div className="absolute inset-0 -z-10 opacity-20">
        {/* ⚡ Blur reducido y solo uno animado */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-cyan-500/20 rounded-full blur-2xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-500/20 rounded-full blur-2xl animate-pulse-slow" />
      </div>

      <div className="max-w-7xl mx-auto">
        {/* Header - OPTIMIZADO */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl md:text-7xl font-extrabold mb-4 bg-gradient-to-r from-cyan-400 via-blue-400 to-indigo-400 bg-clip-text text-transparent">
            Sobre Mí
          </h1>
          <p className="text-xl md:text-2xl text-blue-100/80 max-w-3xl mx-auto">
            Conoce mi historia, experiencia y lo que me apasiona
          </p>
        </motion.div>

        {/* Sección Foto + Historia - OPTIMIZADO */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid md:grid-cols-2 gap-12 items-center mb-20"
        >
          {/* Foto - OPTIMIZADO */}
          <div className="relative flex justify-center">
            {/* ⚡ Blur reducido */}
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-cyan-500/20 via-blue-500/20 to-indigo-500/20 blur-2xl animate-pulse-slow" />
            <img
              src="/kris.png"
              alt="Kris"
              loading="lazy" // ⚡ Lazy loading
              className="relative w-72 h-72 md:w-96 md:h-96 rounded-3xl shadow-2xl shadow-blue-500/30 border-4 border-cyan-300/30 object-cover profile-image"
            />
          </div>

          {/* Historia */}
          <div className="space-y-6 text-blue-100/90 text-lg leading-relaxed">
            <p>
              ¡Hola! Soy <span className="font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">Kris</span>, 
              un desarrollador Full Stack apasionado por crear soluciones web innovadoras que marquen la diferencia.
            </p>
            <p>
              Mi viaje en el desarrollo comenzó hace más de 2 años, cuando descubrí que podía 
              <span className="font-semibold text-cyan-400"> convertir ideas en realidad a través del código</span>. 
              Desde entonces, no he dejado de aprender y evolucionar.
            </p>
            <p>
              Me especializo en <span className="font-semibold text-blue-400">JavaScript/React</span>, 
              pero también domino <span className="font-semibold text-green-400">Node.js</span>, 
              <span className="font-semibold text-blue-300"> Python</span> y bases de datos como 
              <span className="font-semibold text-emerald-400"> MongoDB</span> y 
              <span className="font-semibold text-cyan-400"> MySQL</span>.
            </p>
            <p>
              Lo que más disfruto es <span className="font-semibold text-purple-400">resolver problemas complejos</span> y 
              crear experiencias de usuario intuitivas, rápidas y visualmente atractivas.
            </p>
          </div>
        </motion.div>

        {/* Estadísticas - OPTIMIZADO */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ 
                delay: 0.4 + index * 0.1,
                duration: 0.3 // ⚡ Reducido de default (0.5) a 0.3
              }}
              whileHover={{ scale: 1.05 }} // ⚡ Solo este hover, eliminamos otros
              className="stat-card"
            >
              <div className="text-4xl md:text-5xl mb-3 stat-icon">
                {stat.icon}
              </div>
              <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent mb-2">
                {stat.numero}
              </div>
              <div className="text-sm md:text-base text-blue-100/70">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Habilidades Blandas - OPTIMIZADO */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }} // ⚡ Reducido delay de 0.7 a 0.5
          className="mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-10 text-center">
            Habilidades Blandas
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            {habilidadesBlandas.map((habilidad, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ 
                  delay: 0.6 + index * 0.03, // ⚡ Reducido de 0.8 y 0.05 a 0.6 y 0.03
                  duration: 0.3 // ⚡ Duración más corta
                }}
                whileHover={{ scale: 1.05 }}
                className="skill-card"
              >
                <div className="text-4xl mb-3">{habilidad.icon}</div>
                <p className="text-blue-100/90 font-medium">{habilidad.nombre}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Filosofía - OPTIMIZADO */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }} // ⚡ Reducido de 0.9 a 0.7
          className="bg-gradient-to-r from-purple-900/60 via-blue-900/40 to-purple-900/60 backdrop-blur-sm rounded-3xl p-8 md:p-12 border border-cyan-400/30 mb-20"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-6 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
            Mi Filosofía
          </h2>
          <p className="text-blue-100/90 text-lg md:text-xl text-center leading-relaxed max-w-4xl mx-auto">
            Creo que el código limpio, la comunicación clara y el aprendizaje continuo son la base 
            de cualquier proyecto exitoso. Me enfoco en crear soluciones que no solo funcionen, 
            sino que sean <span className="font-bold text-cyan-400">escalables</span>, 
            <span className="font-bold text-blue-400"> mantenibles</span> y 
            <span className="font-bold text-indigo-400"> deleitantes</span> para el usuario final.
          </p>
        </motion.div>

        {/* CTA - OPTIMIZADO */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }} // ⚡ Reducido de 1 a 0.8
          className="text-center"
        >
          <p className="text-xl text-blue-100/80 mb-6">
            ¿Listo para ver mi trabajo?
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/portafolio">
              <button className="cta-btn-primary">
                Ver Proyectos 🚀
              </button>
            </Link>
            <Link to="/tecnologias">
              <button className="cta-btn-secondary">
                Ver Tecnologías 💻
              </button>
            </Link>
          </div>
        </motion.div>

      </div>

      {/* ⚡ ESTILOS OPTIMIZADOS */}
      <style>{`
        /* Pulse lento */
        .animate-pulse-slow {
          animation: pulse-slow 4s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }

        @keyframes pulse-slow {
          0%, 100% { opacity: 0.2; }
          50% { opacity: 0.3; }
        }

        /* Imagen de perfil optimizada */
        .profile-image {
          transition: transform 0.5s ease;
          will-change: transform;
        }

        .profile-image:hover {
          transform: scale(1.05);
        }

        /* Tarjetas de estadísticas optimizadas */
        .stat-card {
          background: rgba(88, 28, 135, 0.4);
          backdrop-filter: blur(8px);
          border-radius: 1rem;
          padding: 1.5rem;
          border: 1px solid rgba(59, 130, 246, 0.2);
          transition: all 0.3s ease;
          text-align: center;
          will-change: transform, border-color;
        }

        .stat-card:hover {
          border-color: rgba(34, 211, 238, 0.5);
        }

        .stat-icon {
          transition: transform 0.3s ease;
        }

        .stat-card:hover .stat-icon {
          transform: scale(1.1);
        }

        /* Tarjetas de habilidades optimizadas */
        .skill-card {
          background: rgba(88, 28, 135, 0.4);
          backdrop-filter: blur(8px);
          border-radius: 1rem;
          padding: 1.5rem;
          border: 1px solid rgba(59, 130, 246, 0.2);
          transition: all 0.3s ease;
          text-align: center;
          will-change: transform, border-color;
        }

        .skill-card:hover {
          border-color: rgba(34, 211, 238, 0.5);
        }

        /* Botones CTA optimizados */
        .cta-btn-primary {
          background: linear-gradient(to right, #06b6d4, #3b82f6, #6366f1);
          color: white;
          padding: 1rem 2rem;
          border-radius: 9999px;
          font-weight: 600;
          font-size: 1.125rem;
          box-shadow: 0 10px 15px -3px rgba(59, 130, 246, 0.3);
          transition: all 0.3s ease;
          will-change: transform, box-shadow;
        }

        .cta-btn-primary:hover {
          transform: scale(1.05);
          box-shadow: 0 20px 25px -5px rgba(34, 211, 238, 0.4);
        }

        .cta-btn-secondary {
          background: rgba(88, 28, 135, 0.5);
          border: 2px solid rgba(34, 211, 238, 0.5);
          color: white;
          padding: 1rem 2rem;
          border-radius: 9999px;
          font-weight: 600;
          font-size: 1.125rem;
          transition: all 0.3s ease;
          will-change: transform, border-color;
        }

        .cta-btn-secondary:hover {
          transform: scale(1.05);
          border-color: rgb(34, 211, 238);
        }

        /* Reducir animaciones en móvil */
        @media (max-width: 768px) {
          .profile-image:hover {
            transform: scale(1.02); /* Menos zoom en móvil */
          }

          .stat-card:hover .stat-icon {
            transform: scale(1.05);
          }
        }

        /* Respetar preferencias de movimiento reducido */
        @media (prefers-reduced-motion: reduce) {
          .animate-pulse-slow,
          .profile-image,
          .stat-card,
          .stat-icon,
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
            background-color: rgba(88, 28, 135, 0.7);
          }
        }
      `}</style>
    </section>
  );
}