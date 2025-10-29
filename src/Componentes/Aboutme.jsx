import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Particles from "./Backgrods";

export default function SobreMi() {

  const stats = [
    { numero: '2', label: 'Años de Experiencia', icon: '📅' },
    { numero: '5', label: 'Proyectos Completados', icon: '🚀' },
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
      
      {/* 🌌 Fondo de partículas */}
      <div className="absolute inset-0 -z-10 bg-purple-950">
        <Particles
          particleCount={300}
          particleSpread={10}
          speed={0.3}
          particleColors={["#150e18ff", "#114888ff", "#041e68ff"]}
          moveParticlesOnHover={true}
          particleHoverFactor={2.5}
          alphaParticles={true}
          particleBaseSize={200}
          sizeRandomness={2}
          cameraDistance={25}
        />
      </div>

      {/* Partículas decorativas */}
      <div className="absolute inset-0 -z-10 opacity-30">
        <div className="absolute top-20 left-10 w-72 h-72 bg-cyan-500/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-pulse" />
      </div>

      <div className="max-w-7xl mx-auto">

        {/* Header */}
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

        {/* Sección Foto + Historia */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid md:grid-cols-2 gap-12 items-center mb-20"
        >
          {/* Foto */}
          <div className="relative flex justify-center">
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-cyan-500/20 via-blue-500/20 to-indigo-500/20 blur-3xl animate-pulse" />
            <img
              src="/kris.png"
              alt="Kris"
              className="relative w-72 h-72 md:w-96 md:h-96 rounded-3xl shadow-2xl shadow-blue-500/30 border-4 border-cyan-300/30 object-cover hover:scale-105 transition-transform duration-500"
            />
          </div>

          {/* Historia */}
          <div className="space-y-6 text-blue-100/90 text-lg leading-relaxed">
            <p>
              ¡Hola! Soy <span className="font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">Kris</span>, 
              un desarrollador Full Stack apasionado por crear soluciones web innovadoras que marquen la diferencia.
            </p>
            <p>
              Mi viaje en el desarrollo comenzó hace más de 3 años, cuando descubrí que podía 
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

        {/* Estadísticas */}
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
              transition={{ delay: 0.4 + index * 0.1 }}
              className="bg-purple-900/40 backdrop-blur-sm rounded-2xl p-6 border border-blue-500/20 hover:border-cyan-400/50 transition-all duration-300 text-center group hover:scale-105"
            >
              <div className="text-4xl md:text-5xl mb-3 group-hover:scale-110 transition-transform">
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

        

        {/* Habilidades Blandas */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
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
                transition={{ delay: 0.8 + index * 0.05 }}
                whileHover={{ scale: 1.05 }}
                className="bg-purple-900/40 backdrop-blur-sm rounded-2xl p-6 border border-blue-500/20 hover:border-cyan-400/50 transition-all duration-300 text-center"
              >
                <div className="text-4xl mb-3">{habilidad.icon}</div>
                <p className="text-blue-100/90 font-medium">{habilidad.nombre}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Filosofía */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.9 }}
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

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1 }}
          className="text-center"
        >
          <p className="text-xl text-blue-100/80 mb-6">
            ¿Listo para ver mi trabajo?
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/portafolio">
              <button className="bg-gradient-to-r from-cyan-500 via-blue-500 to-indigo-600 hover:from-cyan-400 hover:via-blue-400 hover:to-indigo-500 transition-all duration-300 text-white px-8 py-4 rounded-full font-semibold text-lg shadow-lg shadow-blue-500/30 hover:shadow-cyan-400/40 hover:scale-105">
                Ver Proyectos 🚀
              </button>
            </Link>
            <Link to="/tecnologias">
              <button className="bg-purple-800/50 hover:bg-purple-700/50 border-2 border-cyan-400/50 hover:border-cyan-400 transition-all duration-300 text-white px-8 py-4 rounded-full font-semibold text-lg hover:scale-105">
                Ver Tecnologías 💻
              </button>
            </Link>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
