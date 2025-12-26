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
    { id: 'all', name: 'all', icon: '🚀' },
    { id: 'frontend', name: 'frontend', icon: '🎨' },
    { id: 'backend', name: 'backend', icon: '⚙️' },
    { id: 'database', name: 'database', icon: '💾' },
    { id: 'cms', name: 'cms', icon: '📝' },
    { id: 'apis', name: 'apis', icon: '🔌' },
  ];

  const filteredTechs = selectedCategory === 'all' 
    ? technologies 
    : technologies.filter(tech => tech.category === selectedCategory);

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
          <div className="text-cyan-400 text-sm mb-2">{'<tech_stack>'}</div>
          <h1 className="text-5xl md:text-7xl font-bold mb-4 text-white">
            const stack<span className="text-purple-400"> = </span>
            <span className="text-cyan-400">[</span>
            <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-indigo-400 bg-clip-text text-transparent">...</span>
            <span className="text-cyan-400">]</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-400">
            <span className="text-purple-400">//</span> Tools & technologies I master
          </p>
        </motion.div>

        {/* Filtros por categoría - TECH STYLE */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-3 mb-12 font-mono"
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

        {/* Grid de Tecnologías - TECH STYLE */}
        <AnimatePresence mode="wait">
          <motion.div 
            key={selectedCategory}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4"
          >
            {filteredTechs.map((tech, index) => (
              <motion.div
                key={tech.name}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ 
                  duration: 0.3,
                  delay: index * 0.03
                }}
                whileHover={{ scale: 1.05, y: -4 }}
                className="tech-card"
              >
                {/* Número de índice */}
                <div className="absolute top-2 right-2 text-xs text-gray-600">
                  #{index + 1}
                </div>

                {/* Icono */}
                <div className="tech-icon">
                  {tech.icon}
                </div>

                {/* Nombre */}
                <h3 className={`text-base md:text-lg font-bold bg-gradient-to-r ${tech.color} bg-clip-text text-transparent`}>
                  {tech.name}
                </h3>

                {/* Línea decorativa */}
                <div className="tech-line" />
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Sección de habilidades adicionales - TECH STYLE */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-20"
        >
          <div className="text-center mb-10 font-mono">
            <div className="text-cyan-400 text-sm mb-2">{'<additional_skills>'}</div>
            <h2 className="text-3xl md:text-4xl font-bold text-white">
              skills<span className="text-cyan-400">.</span>additional<span className="text-purple-400">()</span>
            </h2>
          </div>
          
          <div className="flex flex-wrap justify-center gap-3 font-mono">
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
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ 
                  delay: 0.4 + index * 0.03,
                  duration: 0.3
                }}
                className="skill-badge"
              >
                <span className="text-gray-500 text-xs mr-1">$</span>
                {skill}
              </motion.span>
            ))}
          </div>
          
          <div className="text-cyan-400 text-sm text-center mt-8 font-mono">{'</additional_skills>'}</div>
        </motion.div>

        {/* Call to Action - TECH STYLE */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-20 text-center font-mono"
        >
          <div className="bg-black/40 border-2 border-cyan-400/30 p-8 max-w-2xl mx-auto">
            <p className="text-xl text-gray-400 mb-2">
              <span className="text-purple-400">if</span> (project<span className="text-purple-400">.</span>status <span className="text-purple-400">===</span> <span className="text-yellow-400">'pending'</span>) <span className="text-cyan-400">{'{'}</span>
            </p>
            <p className="text-lg text-cyan-400 mb-6 ml-4">
              contact<span className="text-purple-400">.</span>me<span className="text-yellow-400">()</span>;
            </p>
            <Link to="/contacto">
              <button className="cta-btn">
                start_project()
              </button>
            </Link>
            <p className="text-xl text-cyan-400 mt-6">
              <span className="text-cyan-400">{'}'}</span>
            </p>
          </div>
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

        /* Botones de categoría tech */
        .category-btn {
          padding: 0.5rem 1.25rem;
          font-weight: 600;
          transition: all 0.3s ease;
          background: rgba(0, 0, 0, 0.6);
          color: rgba(156, 163, 175, 0.9);
          border: 2px solid rgba(107, 114, 128, 0.3);
          will-change: transform, background-color, border-color;
        }

        .category-btn:hover {
          background: rgba(0, 0, 0, 0.8);
          color: #22d3ee;
          border-color: rgba(34, 211, 238, 0.5);
        }

        .category-btn-active {
          background: rgba(6, 182, 212, 0.2);
          color: #22d3ee;
          border-color: #22d3ee;
          transform: scale(1.05);
        }

        /* Tarjetas de tecnología tech */
        .tech-card {
          position: relative;
          background: rgba(0, 0, 0, 0.6);
          backdrop-filter: blur(8px);
          padding: 1.5rem 1rem;
          border: 2px solid rgba(59, 130, 246, 0.3);
          transition: all 0.3s ease;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          text-align: center;
          will-change: transform, border-color;
        }

        .tech-card:hover {
          border-color: rgba(34, 211, 238, 0.7);
          background: rgba(34, 211, 238, 0.05);
        }

        /* Icono de tecnología */
        .tech-icon {
          font-size: 2.5rem;
          margin-bottom: 0.75rem;
          transition: transform 0.3s ease;
          will-change: transform;
        }

        .tech-card:hover .tech-icon {
          transform: scale(1.15);
        }

        /* Línea decorativa tech */
        .tech-line {
          width: 100%;
          height: 2px;
          background: linear-gradient(to right, transparent, rgba(34, 211, 238, 0.5), transparent);
          margin-top: 0.75rem;
          opacity: 0;
          transition: opacity 0.3s ease;
        }

        .tech-card:hover .tech-line {
          opacity: 1;
        }

        /* Badges de habilidades tech */
        .skill-badge {
          padding: 0.5rem 1rem;
          background: rgba(0, 0, 0, 0.6);
          backdrop-filter: blur(8px);
          color: rgb(209, 213, 219);
          font-weight: 500;
          font-size: 0.875rem;
          border: 1px solid rgba(107, 114, 128, 0.3);
          transition: all 0.3s ease;
          display: inline-block;
          will-change: transform, border-color;
        }

        .skill-badge:hover {
          border-color: rgba(34, 211, 238, 0.7);
          transform: scale(1.05);
          color: #22d3ee;
        }

        /* Botón CTA tech */
        .cta-btn {
          background: #06b6d4;
          color: black;
          padding: 0.875rem 2rem;
          font-weight: 700;
          font-size: 1.125rem;
          transition: all 0.3s ease;
          will-change: transform;
        }

        .cta-btn:hover {
          transform: scale(1.05);
          background: #22d3ee;
        }

        /* Reducir animaciones en móvil */
        @media (max-width: 768px) {
          .tech-icon {
            font-size: 2rem;
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
          .tech-line,
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
            background-color: rgba(0, 0, 0, 0.8);
          }
        }
      `}</style>
    </section>
  );
}