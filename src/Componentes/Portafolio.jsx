import { motion } from 'framer-motion';
import { useState } from 'react';
import Particles from "./Backgrods";

// Datos mejorados de proyectos con IMPACTO
const proyectos = [
  {
    titulo: "Rick & Morty Auth System",
    subtitulo: "Sistema de autenticación completo con API REST",
    descripcion: "Aplicación full-stack con registro, login y consumo de API externa. Implementé validaciones del lado del cliente y servidor, manejo de estados con React hooks, y diseño responsive.",
    impacto: "Demuestra conocimiento de autenticación, consumo de APIs y manejo de estados complejos",
    link: "https://apimorthy.vercel.app",
    github: "https://github.com/Kristianarchila",
    imagen: "/apiRickMorty.png",
    tecnologias: ["React", "REST API", "Tailwind CSS", "JavaScript"],
    destacado: true
  },
  {
    titulo: "Weather Dashboard",
    subtitulo: "Consulta clima en tiempo real",
    descripcion: "App que consume OpenWeather API para mostrar clima actual y pronóstico. Incluye geolocalización, búsqueda por ciudad, y visualización intuitiva de datos meteorológicos.",
    impacto: "Integración con APIs externas y manejo de geolocalización",
    link: "https://clima-kappa-red.vercel.app/",
    github: "https://github.com/Kristianarchila",
    imagen: "/capture.png",
    tecnologias: ["React", "OpenWeather API", "Tailwind", "Geolocation"],
    destacado: false
  },
  {
    titulo: "To-Do List App",
    subtitulo: "Gestión de tareas con persistencia local",
    descripcion: "Aplicación CRUD completa para gestionar tareas. Implementé localStorage para persistencia de datos, filtros por estado, y diseño minimalista enfocado en UX.",
    impacto: "Demuestra dominio de CRUD operations y localStorage",
    link: "https://todo-list-tan-delta.vercel.app/",
    github: "https://github.com/Kristianarchila",
    imagen: "/todo-list.png",
    tecnologias: ["React", "LocalStorage", "Tailwind CSS", "Hooks"],
    destacado: true
  },
  {
    titulo: "Rock Paper Scissors Game",
    subtitulo: "Juego interactivo con lógica de IA",
    descripcion: "Implementación del clásico juego con diseño moderno, animaciones suaves y lógica de juego robusta. Incluye contador de puntuación y efectos visuales.",
    impacto: "Muestra habilidades en lógica de programación y animaciones CSS",
    link: "https://piedra-papel-tijera1.vercel.app/",
    github: "https://github.com/Kristianarchila",
    imagen: "/juego.png",
    tecnologias: ["HTML", "CSS", "JavaScript", "Animations"],
    destacado: false
  },
  {
    titulo: "Battle Royale Game",
    subtitulo: "Juego interactivo tipo Battle Royale",
    descripcion: "Juego con mecánicas de combate, sistema de puntuación y diseño responsive. Implementé lógica de juego compleja con múltiples estados y transiciones.",
    impacto: "Demuestra capacidad para manejar lógica de juego compleja",
    link: "https://battleroyal.vercel.app/",
    github: "https://github.com/Kristianarchila",
    imagen: "/Battle.png",
    tecnologias: ["JavaScript", "CSS", "Tailwind", "Game Logic"],
    destacado: false
  },
  {
    titulo: "Laravel CRUD System",
    subtitulo: "Sistema de gestión de base de datos",
    descripcion: "Proyecto backend con Laravel y MySQL. Implementé migraciones, modelos Eloquent, relaciones entre tablas y operaciones CRUD completas mediante phpMyAdmin.",
    impacto: "Experiencia en backend development y gestión de bases de datos",
    link: "#",
    github: "https://github.com/Kristianarchila",
    imagen: "/MySql.png",
    tecnologias: ["Laravel", "PHP", "MySQL", "Eloquent ORM"],
    destacado: true
  }
];

export default function Portafolio() {
  const [filter, setFilter] = useState('all');
  
  const filteredProjects = filter === 'all' 
    ? proyectos 
    : proyectos.filter(p => p.destacado);

  return (
    <section className="relative min-h-screen py-20 px-6 md:px-24 overflow-hidden">
      
      {/* Fondo de partículas */}
      <div className="absolute inset-0 -z-10 bg-purple-950">
        <Particles
          particleCount={60}
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

      <div className="max-w-7xl mx-auto">
        
        {/* Header mejorado */}
        <motion.div 
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-6xl md:text-8xl font-extrabold mb-6 bg-gradient-to-r from-cyan-400 via-blue-400 to-indigo-400 bg-clip-text text-transparent">
            Portafolio
          </h1>
          <p className="text-xl md:text-2xl text-blue-100/90 max-w-3xl mx-auto leading-relaxed">
            Proyectos reales que demuestran mis habilidades técnicas y capacidad para resolver problemas
          </p>
          
          {/* Filtros */}
          <div className="flex justify-center gap-4 mt-8">
            <button
              onClick={() => setFilter('all')}
              className={`filter-btn ${filter === 'all' ? 'filter-btn-active' : ''}`}
            >
              Todos los proyectos
            </button>
            <button
              onClick={() => setFilter('destacados')}
              className={`filter-btn ${filter === 'destacados' ? 'filter-btn-active' : ''}`}
            >
              ⭐ Destacados
            </button>
          </div>
        </motion.div>

        {/* Grid de proyectos mejorado */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {filteredProjects.map((proyecto, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative bg-purple-900/40 backdrop-blur-sm rounded-2xl overflow-hidden border border-blue-500/20 hover:border-cyan-400/60 transition-all duration-500 shadow-xl hover:shadow-cyan-400/30 project-card"
            >
              {/* Badge de destacado */}
              {proyecto.destacado && (
                <div className="absolute top-4 left-4 z-20 bg-gradient-to-r from-yellow-400 to-orange-500 px-3 py-1 rounded-full text-xs font-bold text-white shadow-lg">
                  ⭐ Destacado
                </div>
              )}

              {/* Imagen con overlay mejorado */}
              <div className="relative h-56 overflow-hidden bg-purple-950/50">
                <img 
                  src={proyecto.imagen} 
                  alt={proyecto.titulo}
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-purple-900 via-purple-900/40 to-transparent opacity-80 group-hover:opacity-60 transition-opacity duration-300" />
                
                {/* Botones de acción */}
                <div className="absolute bottom-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <a 
                    href={proyecto.link} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="action-btn"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </a>
                  <a 
                    href={proyecto.github} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="action-btn"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                    </svg>
                  </a>
                </div>
              </div>

              {/* Contenido mejorado */}
              <div className="p-6 space-y-4">
                <div>
                  <h2 className="text-2xl font-bold bg-gradient-to-r from-cyan-400 via-blue-400 to-indigo-400 bg-clip-text text-transparent mb-1">
                    {proyecto.titulo}
                  </h2>
                  <p className="text-cyan-300/80 text-sm font-medium">
                    {proyecto.subtitulo}
                  </p>
                </div>

                <p className="text-blue-100/80 leading-relaxed text-sm">
                  {proyecto.descripcion}
                </p>

                {/* Impacto - ESTO ES CLAVE */}
                <div className="bg-cyan-500/10 border border-cyan-500/20 rounded-lg p-3">
                  <p className="text-cyan-300 text-xs font-semibold mb-1">💡 Por qué importa:</p>
                  <p className="text-blue-100/70 text-xs">{proyecto.impacto}</p>
                </div>

                {/* Tecnologías */}
                <div className="flex flex-wrap gap-2 pt-2">
                  {proyecto.tecnologias.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="tech-badge"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Efecto de brillo */}
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/0 via-blue-500/10 to-indigo-500/0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
            </motion.div>
          ))}
        </div>

        {/* CTA final */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-20 text-center"
        >
          <div className="bg-gradient-to-r from-purple-900/60 via-blue-900/40 to-purple-900/60 backdrop-blur-sm rounded-3xl p-12 border border-cyan-400/30">
            <h2 className="text-4xl font-bold text-white mb-4">
              ¿Tienes un proyecto en mente?
            </h2>
            <p className="text-xl text-blue-100/80 mb-8 max-w-2xl mx-auto">
              Estoy disponible para trabajar en proyectos desafiantes donde pueda aplicar mis habilidades y seguir aprendiendo.
            </p>
            <a href="/contacto">
              <button className="cta-btn">
                Hablemos de tu proyecto 🚀
              </button>
            </a>
          </div>
        </motion.div>
      </div>

      <style>{`
        @keyframes pulse-slow {
          0%, 100% { opacity: 0.2; }
          50% { opacity: 0.4; }
        }

        .animate-pulse-slow {
          animation: pulse-slow 4s ease-in-out infinite;
        }

        .project-card {
          will-change: transform;
          transition: transform 0.5s ease, border-color 0.5s ease, box-shadow 0.5s ease;
        }

        .project-card:hover {
          transform: translateY(-8px);
        }

        .filter-btn {
          padding: 0.75rem 1.5rem;
          border-radius: 9999px;
          font-weight: 600;
          font-size: 0.875rem;
          transition: all 0.3s ease;
          background: rgba(88, 28, 135, 0.5);
          color: rgba(219, 234, 254, 0.7);
          border: 1px solid rgba(59, 130, 246, 0.2);
        }

        .filter-btn:hover {
          background: rgba(107, 33, 168, 0.6);
          color: white;
          border-color: rgba(34, 211, 238, 0.4);
        }

        .filter-btn-active {
          background: linear-gradient(to right, #06b6d4, #3b82f6, #6366f1);
          color: white;
          border-color: transparent;
          box-shadow: 0 10px 15px -3px rgba(59, 130, 246, 0.5);
        }

        .action-btn {
          width: 40px;
          height: 40px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: rgba(255, 255, 255, 0.9);
          backdrop-filter: blur(10px);
          border-radius: 50%;
          color: rgb(88, 28, 135);
          transition: all 0.3s ease;
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
        }

        .action-btn:hover {
          background: rgb(34, 211, 238);
          color: white;
          transform: scale(1.1);
          box-shadow: 0 8px 12px rgba(34, 211, 238, 0.4);
        }

        .tech-badge {
          padding: 0.375rem 0.75rem;
          background: rgba(59, 130, 246, 0.2);
          border: 1px solid rgba(34, 211, 238, 0.3);
          border-radius: 9999px;
          font-size: 0.75rem;
          color: rgb(147, 197, 253);
          font-weight: 500;
          transition: all 0.3s ease;
        }

        .tech-badge:hover {
          background: rgba(34, 211, 238, 0.3);
          border-color: rgb(34, 211, 238);
          color: white;
        }

        .cta-btn {
          background: linear-gradient(to right, #06b6d4, #3b82f6, #6366f1);
          color: white;
          padding: 1rem 2.5rem;
          border-radius: 9999px;
          font-weight: 700;
          font-size: 1.125rem;
          box-shadow: 0 10px 15px -3px rgba(59, 130, 246, 0.5);
          transition: all 0.3s ease;
        }

        .cta-btn:hover {
          transform: scale(1.05);
          box-shadow: 0 20px 25px -5px rgba(34, 211, 238, 0.5);
        }

        @media (prefers-reduced-motion: reduce) {
          * {
            animation: none !important;
            transition: none !important;
          }
        }
      `}</style>
    </section>
  );
}