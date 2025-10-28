import { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

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
      
      {/* Fondo con gradiente */}
      <div className="absolute inset-0 bg-gradient-to-b from-purple-900 via-purple-800 to-purple-900 -z-10" />
      
      {/* Partículas decorativas */}
      <div className="absolute inset-0 -z-10 opacity-30">
        <div className="absolute top-20 left-10 w-72 h-72 bg-cyan-500/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-pulse delay-700" />
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

        {/* Filtros por categoría */}
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
              className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                selectedCategory === category.id
                  ? 'bg-gradient-to-r from-cyan-500 via-blue-500 to-indigo-600 text-white shadow-lg shadow-blue-500/50 scale-105'
                  : 'bg-purple-800/50 text-blue-100/70 hover:bg-purple-700/50 hover:text-white'
              }`}
            >
              <span className="mr-2">{category.icon}</span>
              {category.name}
            </button>
          ))}
        </motion.div>

        {/* Grid de Tecnologías */}
        <motion.div 
          layout
          className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-6"
        >
          {filteredTechs.map((tech, index) => (
            <motion.div
              key={tech.name}
              layout
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              whileHover={{ scale: 1.1, y: -8 }}
              className="group relative bg-purple-900/40 backdrop-blur-sm rounded-2xl p-6 border border-blue-500/20 hover:border-cyan-400/50 transition-all duration-300 shadow-lg hover:shadow-cyan-400/30 flex flex-col items-center justify-center text-center"
            >
              {/* Icono */}
              <div className="text-5xl md:text-6xl mb-4 group-hover:scale-125 transition-transform duration-300">
                {tech.icon}
              </div>

              {/* Nombre */}
              <h3 className={`text-lg md:text-xl font-bold bg-gradient-to-r ${tech.color} bg-clip-text text-transparent`}>
                {tech.name}
              </h3>

              {/* Efecto de brillo en hover */}
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/0 via-blue-500/10 to-indigo-500/0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </motion.div>
          ))}
        </motion.div>

        {/* Sección de habilidades adicionales */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
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
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.5 + index * 0.05 }}
                className="px-6 py-3 bg-gradient-to-r from-purple-800/50 to-purple-900/50 backdrop-blur-sm rounded-full text-blue-100 font-medium border border-blue-500/20 hover:border-cyan-400/50 hover:scale-105 transition-all duration-300"
              >
                {skill}
              </motion.span>
            ))}
          </div>
        </motion.div>

        {/* Call to Action */}
          <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.6 }}
        className="mt-20 text-center"
      >
        <p className="text-xl text-blue-100/80 mb-6">
          ¿Tienes un proyecto en mente?
        </p>
        <Link to="/contacto">
          <button className="bg-gradient-to-r from-cyan-500 via-blue-500 to-indigo-600 hover:from-cyan-400 hover:via-blue-400 hover:to-indigo-500 transition-all duration-300 text-white px-8 py-4 rounded-full font-semibold text-lg shadow-lg shadow-blue-500/30 hover:shadow-cyan-400/40 hover:scale-105">
            ¡Trabajemos juntos! 🚀
          </button>
        </Link>
      </motion.div>

      </div>
    </section>
  );
}