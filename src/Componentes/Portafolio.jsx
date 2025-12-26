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
      
      {/* Fondo de partículas - TECH STYLE */}
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
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16 font-mono"
        >
          <div className="text-cyan-400 text-sm mb-2">{'<portfolio>'}</div>
          <h1 className="text-6xl md:text-8xl font-bold mb-6 text-white">
            const projects<span className="text-purple-400"> = </span>
            <span className="text-cyan-400">[</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            <span className="text-purple-400">//</span> Real projects that demonstrate technical skills
          </p>
          
          {/* Filtros - TECH STYLE */}
          <div className="flex justify-center gap-3 mt-8 font-mono">
            <button
              onClick={() => setFilter('all')}
              className={`filter-btn ${filter === 'all' ? 'filter-btn-active' : ''}`}
            >
              <span className="text-gray-500">$</span> show_all
            </button>
            <button
              onClick={() => setFilter('destacados')}
              className={`filter-btn ${filter === 'destacados' ? 'filter-btn-active' : ''}`}
            >
              <span className="text-gray-500">$</span> featured_only
            </button>
          </div>
        </motion.div>

        {/* Grid de proyectos - TECH STYLE */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {filteredProjects.map((proyecto, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative bg-black/60 backdrop-blur-sm overflow-hidden border-2 border-gray-700 hover:border-cyan-400 transition-all duration-500 project-card"
            >
              {/* Badge de destacado - TECH STYLE */}
              {proyecto.destacado && (
                <div className="absolute top-3 left-3 z-20 bg-cyan-500 px-3 py-1 text-xs font-bold text-black font-mono">
                  [FEATURED]
                </div>
              )}

              {/* Número de proyecto */}
              <div className="absolute top-3 right-3 z-20 text-gray-600 font-mono text-xs">
                #{String(index + 1).padStart(2, '0')}
              </div>

              {/* Imagen con overlay - TECH STYLE */}
              <div className="relative h-56 overflow-hidden bg-black">
                <img 
                  src={proyecto.imagen} 
                  alt={proyecto.titulo}
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 opacity-80"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
                
                {/* Botones de acción - TECH STYLE */}
                <div className="absolute bottom-3 right-3 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <a 
                    href={proyecto.link} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="action-btn"
                    title="View Live"
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </a>
                  <a 
                    href={proyecto.github} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="action-btn"
                    title="View Code"
                  >
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                    </svg>
                  </a>
                </div>
              </div>

              {/* Contenido - TECH STYLE */}
              <div className="p-5 space-y-3 font-mono">
                <div>
                  <h2 className="text-xl font-bold text-white mb-1">
                    {proyecto.titulo}
                  </h2>
                  <p className="text-cyan-400 text-xs">
                    <span className="text-gray-500">//</span> {proyecto.subtitulo}
                  </p>
                </div>

                <p className="text-gray-300 leading-relaxed text-sm">
                  {proyecto.descripcion}
                </p>

                {/* Impacto - TECH STYLE */}
                <div className="bg-cyan-500/10 border-l-2 border-cyan-400 p-3">
                  <p className="text-cyan-400 text-xs font-bold mb-1">
                    {'>'} Impact:
                  </p>
                  <p className="text-gray-400 text-xs">{proyecto.impacto}</p>
                </div>

                {/* Tecnologías - TECH STYLE */}
                <div className="pt-2">
                  <div className="text-xs text-gray-500 mb-2">tech_stack:</div>
                  <div className="flex flex-wrap gap-2">
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
              </div>

              {/* Línea decorativa bottom */}
              <div className="h-1 bg-gradient-to-r from-transparent via-cyan-400 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </motion.div>
          ))}
        </div>

        {/* Cerrar array */}
        <div className="text-center mt-12 font-mono">
          <h1 className="text-6xl md:text-8xl font-bold text-cyan-400">]</h1>
          <div className="text-cyan-400 text-sm mt-2">{'</portfolio>'}</div>
        </div>

        {/* CTA final - TECH STYLE */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-20 text-center font-mono"
        >
          <div className="bg-black/60 border-2 border-cyan-400/30 p-12 max-w-3xl mx-auto">
            <p className="text-xl text-gray-400 mb-2">
              <span className="text-purple-400">if</span> (you<span className="text-purple-400">.</span>hasProject) <span className="text-cyan-400">{'{'}</span>
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 ml-4">
              let's<span className="text-cyan-400">.</span>collaborate<span className="text-yellow-400">()</span>
            </h2>
            <p className="text-lg text-gray-400 mb-8 ml-4">
              <span className="text-gray-500">//</span> Available for challenging projects
            </p>
            <a href="/contacto">
              <button className="cta-btn">
                start_conversation()
              </button>
            </a>
            <p className="text-xl text-cyan-400 mt-6">
              <span className="text-cyan-400">{'}'}</span>
            </p>
          </div>
        </motion.div>
      </div>

      <style>{`
        @keyframes pulse-slow {
          0%, 100% { opacity: 0.2; }
          50% { opacity: 0.3; }
        }

        .animate-pulse-slow {
          animation: pulse-slow 4s ease-in-out infinite;
        }

        .project-card {
          will-change: transform;
          transition: transform 0.5s ease, border-color 0.5s ease;
        }

        .project-card:hover {
          transform: translateY(-4px);
        }

        .filter-btn {
          padding: 0.625rem 1.25rem;
          font-weight: 600;
          font-size: 0.875rem;
          transition: all 0.3s ease;
          background: rgba(0, 0, 0, 0.6);
          color: rgba(156, 163, 175, 0.9);
          border: 2px solid rgba(107, 114, 128, 0.3);
        }

        .filter-btn:hover {
          background: rgba(0, 0, 0, 0.8);
          color: #22d3ee;
          border-color: rgba(34, 211, 238, 0.5);
        }

        .filter-btn-active {
          background: rgba(6, 182, 212, 0.2);
          color: #22d3ee;
          border-color: #22d3ee;
        }

        .action-btn {
          width: 32px;
          height: 32px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: rgba(6, 182, 212, 0.9);
          border: 1px solid #22d3ee;
          color: black;
          transition: all 0.3s ease;
        }

        .action-btn:hover {
          background: #22d3ee;
          transform: scale(1.1);
        }

        .tech-badge {
          padding: 0.25rem 0.625rem;
          background: rgba(0, 0, 0, 0.6);
          border: 1px solid rgba(107, 114, 128, 0.4);
          font-size: 0.75rem;
          color: rgb(156, 163, 175);
          font-weight: 500;
          transition: all 0.3s ease;
        }

        .tech-badge:hover {
          background: rgba(34, 211, 238, 0.1);
          border-color: rgba(34, 211, 238, 0.5);
          color: #22d3ee;
        }

        .cta-btn {
          background: #06b6d4;
          color: black;
          padding: 0.875rem 2rem;
          font-weight: 700;
          font-size: 1.125rem;
          transition: all 0.3s ease;
        }

        .cta-btn:hover {
          transform: scale(1.05);
          background: #22d3ee;
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