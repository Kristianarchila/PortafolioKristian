import { motion } from 'framer-motion';
import Particles from "./Backgrods";

// Datos de proyectos
const proyectos = [
  {
    titulo: "Login y Registro con API REST de Rick and Morty",
    descripcion: "Aplicación web interactiva desarrollada con React y Tailwind CSS que permite a los usuarios registrarse e iniciar sesión utilizando una API REST inspirada en Rick and Morty.",
    link: "https://apimorthy.vercel.app",
    imagen: "/apiRickMorty.png",
    tecnologias: ["React", "Tailwind CSS", "JavaScript"]
  },
  {
    titulo: "App de Clima",
    descripcion: "Aplicación para consultar el clima usando API OpenWeather.",
    link: "https://clima-kappa-red.vercel.app/",
    imagen: "/capture.png",
    tecnologias: ["React", "API", "Talwind"]
  },
  {
   titulo: "Juego Piedra, Papel o Tijera",
  descripcion: "Juego interactivo de Piedra, Papel o Tijera desarrollado con HTML, CSS y JavaScript, con un diseño moderno, responsive y agradable para el usuario.",
  link: "https://piedra-papel-tijera1.vercel.app/",
  imagen: "/juego.png",
  tecnologias: ["HTML", "CSS", "JavaScript", "Tailwind CSS"]
  },
  {
    titulo: "To-Do List",
    descripcion: "Aplicación de lista de tareas (To-Do List) desarrollada con React y Tailwind CSS, que permite a los usuarios agregar, marcar como completadas y eliminar tareas de manera intuitiva y visualmente atractiva.",
    link: "https://todo-list-tan-delta.vercel.app/",
    imagen: "/todo-list.png",
    tecnologias: ["React", "Tailwind CSS", "JavaScript"]
  },
  {
    titulo: "Battle Royal Game",
  descripcion: "Juego interactivo tipo Battle Royale desarrollado con HTML, CSS, Tailwind CSS y JavaScript, con diseño responsive y experiencia de usuario envolvente.",
  link: "https://battleroyal.vercel.app/",
  imagen: "/Battle.png",
  tecnologias: ["HTML", "CSS", "Tailwind CSS", "JavaScript"]
  },
  {
    titulo: "Netflix Clone Landing Page",
    descripcion: "Clon de la página de inicio de Netflix practica de css posicionamiento.",
    link: "netflix-h8gu.vercel.app",
    imagen: "/Netflix.png",
    tecnologias: ["JavaScript", "CSS", "HTML", "Sass"]
  },
  {titulo: "Gestión de Base de Datos con Laravel",
  descripcion: "Proyecto CRUD desarrollado con Laravel y MySQL, utilizando migraciones para la creación automática de tablas y administración mediante phpMyAdmin.",
  link: "/MySql.png", 
  imagen: "/MySql.png", 
  tecnologias: ["Laravel", "PHP", "MySQL", "phpMyAdmin"]} 
];

export default function Portafolio() {
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
            Mis Proyectos
          </h1>
          <p className="text-xl md:text-2xl text-blue-100/80 max-w-3xl mx-auto">
            Una muestra de los proyectos en los que he trabajado
          </p>
        </motion.div>

        {/* Grid de Proyectos */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {proyectos.map((proyecto, index) => (
            <motion.a
              key={index}
              href={proyecto.link}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -8 }}
              className="group relative bg-purple-900/40 backdrop-blur-sm rounded-2xl overflow-hidden border border-blue-500/20 hover:border-cyan-400/50 transition-all duration-300 shadow-lg hover:shadow-cyan-400/30"
            >
              {/* Imagen del proyecto */}
              <div className="relative h-48 md:h-56 overflow-hidden bg-purple-950/50">
                <img 
                  src={proyecto.imagen} 
                  alt={proyecto.titulo} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                {/* Overlay con gradiente */}
                <div className="absolute inset-0 bg-gradient-to-t from-purple-900/90 via-purple-900/20 to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-300" />
                
                {/* Badge de "Ver Proyecto" */}
                <div className="absolute top-4 right-4 bg-cyan-500/90 backdrop-blur-sm text-white px-3 py-1 rounded-full text-sm font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  Ver Proyecto →
                </div>
              </div>

              {/* Contenido */}
              <div className="p-6 space-y-4">
                {/* Título */}
                <h2 className="text-2xl font-bold bg-gradient-to-r from-cyan-400 via-blue-400 to-indigo-400 bg-clip-text text-transparent">
                  {proyecto.titulo}
                </h2>

                {/* Descripción */}
                <p className="text-blue-100/80 leading-relaxed">
                  {proyecto.descripcion}
                </p>

                {/* Tecnologías */}
                <div className="flex flex-wrap gap-2 pt-2">
                  {proyecto.tecnologias.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 bg-purple-800/50 border border-blue-500/20 rounded-full text-xs text-blue-100/90 font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Efecto de brillo en hover */}
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/0 via-blue-500/5 to-indigo-500/0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
            </motion.a>
          ))}
        </div>
      </div>
    </section>

    
  );
}