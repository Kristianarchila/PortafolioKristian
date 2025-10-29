import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import Particles from "./Backgrods";

export default function Tecnologias() {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const technologies = [
    // Frontend
    { name: 'React', icon: '⚛️', category: 'frontend', color: 'from-cyan-400 to-blue-500' },
    { name: 'JavaScript', icon: '🟨', category: 'frontend', color: 'from-yellow-400 to-orange-500' },
    { name: 'CSS', icon: '🎨', category: 'frontend', color: 'from-blue-400 to-indigo-500' },
    { name: 'Tailwind CSS', icon: '💨', category: 'frontend', color: 'from-cyan-300 to-blue-400' },
    
    // Backend
    { name: 'Node.js', icon: '🟢', category: 'backend', color: 'from-green-400 to-emerald-600' },
    { name: 'Express', icon: '🚂', category: 'backend', color: 'from-gray-400 to-gray-600' },
    { name: 'Python', icon: '🐍', category: 'backend', color: 'from-blue-400 to-yellow-500' },
    { name: 'PHP', icon: '🐘', category: 'backend', color: 'from-indigo-400 to-purple-600' },
    
    // Database
    { name: 'MongoDB', icon: '🍃', category: 'database', color: 'from-green-500 to-emerald-700' },
    { name: 'MySQL', icon: '🐬', category: 'database', color: 'from-blue-500 to-cyan-700' },
    { name: 'NoSQL', icon: '📊', category: 'database', color: 'from-orange-400 to-red-500' },
    
    // CMS & Tools
    { name: 'WordPress', icon: '📝', category: 'cms', color: 'from-blue-600 to-cyan-600' },
    
    // APIs
    { name: 'REST APIs', icon: '🔌', category: 'apis', color: 'from-purple-400 to-pink-500' },
    { name: 'API Integration', icon: '🔗', category: 'apis', color: 'from-pink-400 to-rose-500' },
  ];

  const categories = [
    { id: 'all', name: 'Todas', icon: '🚀' },
    { id: 'frontend', name: 'Frontend', icon: '🎨' },
    { id: 'backend', name: 'Backend', icon: '⚙️' },
    { id: 'database', name: 'Base de Datos', icon: '💾' },
    { id: 'cms', name: 'CMS', icon: '📝' },
    { id: 'apis', name: 'APIs', icon: '🔌' },
  ];

  const filteredTechs = selectedCategory === 'all' 
    ? technologies 
    : technologies.filter(tech => tech.category === selectedCategory);

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
        {/* ⚡ Solo uno animado, blur reducido */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-cyan-500/20 rounded-full blur-2xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-500/20 rounded-full blur-2xl animate-pulse-slow" />
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
            Stack Tecnológico
          </h1>
          <p className="text-xl md:text-2xl text-blue-100/80 max-w-3xl mx-auto">
            Herramientas y tecnologías que domino para crear soluciones completas
          </p>
        </motion.div>

        {/* Filtros por categoría - OPTIMIZADO */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`category-btn ${
                selectedCategory === category.id ? 'category-btn-active' : ''
              }`}
            >
              <span className="mr-2">{category.icon}</span>
              {category.name}
            </button>
          ))}
        </motion.div>

        {/* Grid de Tecnologías - OPTIMIZADO con AnimatePresence */}
        <AnimatePresence mode="wait">
          <motion.div 
            key={selectedCategory} // ⚡ Key para re-renderizar suavemente
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }} // ⚡ Transición más rápida
            className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-6"
          >
            {filteredTechs.map((tech, index) => (
              <motion.div
                key={tech.name}
                initial={{ opacity: 0, scale: 0.9 }} // ⚡ Scale reducido de 0.8 a 0.9
                animate={{ opacity: 1, scale: 1 }}
                transition={{ 
                  duration: 0.3, // ⚡ Reducido de 0.4 a 0.3
                  delay: index * 0.03 // ⚡ Reducido de 0.05 a 0.03
                }}
                whileHover={{ scale: 1.08, y: -6 }} // ⚡ Reducido scale y y
                className="tech-card"
              >
                {/* Icono */}
                <div className="tech-icon">
                  {tech.icon}
                </div>

                {/* Nombre */}
                <h3 className={`text-lg md:text-xl font-bold bg-gradient-to-r ${tech.color} bg-clip-text text-transparent`}>
                  {tech.name}
                </h3>

                {/* Efecto de brillo en hover */}
                <div className="tech-card-glow" />
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Sección de habilidades adicionales - OPTIMIZADO */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }} // ⚡ Reducido de 0.4 a 0.3
          className="mt-20 text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-white">
            Otras Habilidades
          </h2>
          <div className="flex flex-wrap justify-center gap-4">
            {[
              'Responsive Design',
              'Git & GitHub',
              'REST API Development',
              'Database Design',
              'UI/UX Principles',
              'Agile/Scrum',
              'Problem Solving',
              'Team Collaboration'
            ].map((skill, index) => (
              <motion.span
                key={skill}
                initial={{ opacity: 0, scale: 0.9 }} // ⚡ Reducido de 0.8 a 0.9
                animate={{ opacity: 1, scale: 1 }}
                transition={{ 
                  delay: 0.4 + index * 0.03, // ⚡ Reducido de 0.5 y 0.05 a 0.4 y 0.03
                  duration: 0.3 // ⚡ Duración más corta
                }}
                className="skill-badge"
              >
                {skill}
              </motion.span>
            ))}
          </div>
        </motion.div>

        {/* Call to Action - OPTIMIZADO */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }} // ⚡ Reducido de 0.6 a 0.5
          className="mt-20 text-center"
        >
          <p className="text-xl text-blue-100/80 mb-6">
            ¿Tienes un proyecto en mente?
          </p>
          <Link to="/contacto">
            <button className="cta-btn">
              ¡Trabajemos juntos! 🚀
            </button>
          </Link>
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

        /* Botones de categoría optimizados */
        .category-btn {
          padding: 0.75rem 1.5rem;
          border-radius: 9999px;
          font-weight: 600;
          transition: all 0.3s ease;
          background: rgba(88, 28, 135, 0.5);
          color: rgba(219, 234, 254, 0.7);
          will-change: transform, background-color;
        }

        .category-btn:hover {
          background: rgba(107, 33, 168, 0.5);
          color: white;
        }

        .category-btn-active {
          background: linear-gradient(to right, #06b6d4, #3b82f6, #6366f1);
          color: white;
          box-shadow: 0 10px 15px -3px rgba(59, 130, 246, 0.5);
          transform: scale(1.05);
        }

        /* Tarjetas de tecnología optimizadas */
        .tech-card {
          position: relative;
          background: rgba(88, 28, 135, 0.4);
          backdrop-filter: blur(8px);
          border-radius: 1rem;
          padding: 1.5rem;
          border: 1px solid rgba(59, 130, 246, 0.2);
          transition: all 0.3s ease;
          box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          text-align: center;
          will-change: transform, border-color, box-shadow;
        }

        .tech-card:hover {
          border-color: rgba(34, 211, 238, 0.5);
          box-shadow: 0 20px 25px -5px rgba(34, 211, 238, 0.3);
        }

        /* Icono de tecnología */
        .tech-icon {
          font-size: 3rem;
          margin-bottom: 1rem;
          transition: transform 0.3s ease;
          will-change: transform;
        }

        .tech-card:hover .tech-icon {
          transform: scale(1.15); /* ⚡ Reducido de 1.25 a 1.15 */
        }

        /* Efecto de brillo */
        .tech-card-glow {
          position: absolute;
          inset: 0;
          background: linear-gradient(to right, transparent, rgba(59, 130, 246, 0.1), transparent);
          border-radius: 1rem;
          opacity: 0;
          transition: opacity 0.3s ease;
          pointer-events: none;
        }

        .tech-card:hover .tech-card-glow {
          opacity: 1;
        }

        /* Badges de habilidades */
        .skill-badge {
          padding: 0.75rem 1.5rem;
          background: linear-gradient(to right, rgba(88, 28, 135, 0.5), rgba(59, 7, 100, 0.5));
          backdrop-filter: blur(8px);
          border-radius: 9999px;
          color: rgb(219, 234, 254);
          font-weight: 500;
          border: 1px solid rgba(59, 130, 246, 0.2);
          transition: all 0.3s ease;
          display: inline-block;
          will-change: transform, border-color;
        }

        .skill-badge:hover {
          border-color: rgba(34, 211, 238, 0.5);
          transform: scale(1.05);
        }

        /* Botón CTA */
        .cta-btn {
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

        .cta-btn:hover {
          transform: scale(1.05);
          box-shadow: 0 20px 25px -5px rgba(34, 211, 238, 0.4);
        }

        /* Reducir animaciones en móvil */
        @media (max-width: 768px) {
          .tech-icon {
            font-size: 2.5rem;
          }

          .tech-card:hover .tech-icon {
            transform: scale(1.08);
          }
        }

        /* Respetar preferencias de movimiento reducido */
        @media (prefers-reduced-motion: reduce) {
          .animate-pulse-slow,
          .category-btn,
          .tech-card,
          .tech-icon,
          .tech-card-glow,
          .skill-badge,
          .cta-btn,
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