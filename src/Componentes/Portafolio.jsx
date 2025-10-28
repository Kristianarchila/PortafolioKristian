import { motion } from 'framer-motion';

// Datos de proyectos
const proyectos = [
  {
    titulo: "Mi Página Web",
    descripcion: "Página personal construida con React y Tailwind CSS.",
    link: "https://tusitio.com",
    imagen: "/proyecto1.jpg",
    tecnologias: ["React", "Tailwind CSS", "JavaScript"]
  },
  {
    titulo: "App de Clima",
    descripcion: "Aplicación para consultar el clima usando API OpenWeather.",
    link: "https://clima-kappa-red.vercel.app/",
    imagen: "/capture.png",
    tecnologias: ["React", "API", "CSS"]
  },
  {
    titulo: "Portafolio Fotográfico",
    descripcion: "Galería de fotos con diseño moderno y responsive.",
    link: "#",
    imagen: "/proyecto3.jpg",
    tecnologias: ["HTML", "CSS", "JavaScript"]
  }
];

export default function Portafolio() {
  return (
    <section className="relative min-h-screen py-20 px-6 md:px-24 overflow-hidden">
      
      {/* Fondo matching */}
      <div className="absolute inset-0 bg-gradient-to-b from-purple-900 via-purple-800 to-purple-900 -z-10" />
      
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