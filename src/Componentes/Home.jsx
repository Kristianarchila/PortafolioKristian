import { Link } from 'react-router-dom';
import RotatingText from "./AnimatedText";
import Particles from "./Backgrods";


export default function Home() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center px-6 sm:px-8 md:px-12 lg:px-24 pt-24 md:pt-0 overflow-hidden text-white">

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

      {/* Contenedor principal que cambia de vertical a horizontal */}
      <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-0 lg:gap-12 z-10 w-full max-w-5xl">
        
        {/* Contenido de texto */}
        <div className="flex flex-col justify-center text-center md:text-left space-y-3 sm:space-y-4 w-full md:w-auto md:flex-1 order-2 md:order-1">
          
          {/* Saludo Principal */}
          <h1 className="text-4xl sm:text-5xl md:text-5xl lg:text-6xl xl:text-7xl font-extrabold leading-tight">
            Hola, soy <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-indigo-400 bg-clip-text text-transparent">Kris</span> 👋
          </h1>

          {/* Texto Rotativo */}
          <div className="min-h-12 sm:min-h-16 flex items-center justify-center md:justify-start">
            <RotatingText
              texts={[
                "Desarrollador Full-Stack 💻",
                "Diseñador Web 🎨",
                "Apasionado por la Tecnología ⚡",
              ]}
              mainClassName="text-xl sm:text-2xl md:text-2xl lg:text-3xl xl:text-4xl font-semibold"
              splitLevelClassName=""
              elementLevelClassName="inline-block"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              staggerFrom="first"
              staggerDuration={0.05}
              rotationInterval={5000}
            />
          </div>

          {/* Texto con gradiente animado */}
          <div className="relative pt-2">
            <p 
              className="text-sm sm:text-base md:text-base lg:text-lg xl:text-xl max-w-lg mx-auto md:mx-0 leading-relaxed px-2 md:px-0"
              style={{
                backgroundImage: 'linear-gradient(to right, #40ffaa, #4079ff, #40ffaa, #4079ff, #40ffaa)',
                backgroundSize: '300% 100%',
                backgroundClip: 'text',
                WebkitBackgroundClip: 'text',
                color: 'transparent',
                animation: 'gradientSlide 3s linear infinite',
                fontWeight: '700'
              }}
            >
              Creo experiencias web modernas y escalables que transforman ideas en soluciones digitales impactantes.
            </p>
            
            <style>{`
              @keyframes gradientSlide {
                0% { background-position: 0% 50%; }
                50% { background-position: 100% 50%; }
                100% { background-position: 0% 50%; }
              }
            `}</style>
          </div>

          {/* Botones de acción */}
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center md:justify-start pt-4">
            <Link to="/sobre-mi">
              <button className="bg-gradient-to-r from-cyan-500 via-blue-500 to-indigo-600 hover:from-cyan-400 hover:via-blue-400 hover:to-indigo-500 transition-all duration-300 text-white px-6 sm:px-8 py-2.5 sm:py-3 rounded-full font-semibold text-sm sm:text-base shadow-lg shadow-blue-500/30 hover:shadow-cyan-400/40 hover:scale-105 w-full sm:w-auto">
                Conoce más sobre mí 👤
              </button>
            </Link>
            
            <Link to="/portafolio">
              <button className="bg-purple-800/50 hover:bg-purple-700/50 border-2 border-cyan-400/50 hover:border-cyan-400 transition-all duration-300 text-white px-6 sm:px-8 py-2.5 sm:py-3 rounded-full font-semibold text-sm sm:text-base hover:scale-105 w-full sm:w-auto">
                Ver mis proyectos 🚀
              </button>
            </Link>
          </div>

          {/* Stats rápidos - Solo visible en escritorio */}
          <div className="hidden md:grid grid-cols-3 gap-4 pt-6 max-w-md">
            <div className="text-center md:text-left">
              <div className="text-2xl lg:text-3xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                2+
              </div>
              <div className="text-xs lg:text-sm text-blue-100/60">Años</div>
            </div>
            <div className="text-center md:text-left">
              <div className="text-2xl lg:text-3xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                8+
              </div>
              <div className="text-xs lg:text-sm text-blue-100/60">Proyectos</div>
            </div>
            <div className="text-center md:text-left">
              <div className="text-2xl lg:text-3xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                10+
              </div>
              <div className="text-xs lg:text-sm text-blue-100/60">Tecnologías</div>
            </div>
          </div>
        </div>

        {/* Imagen - Aparece arriba en móvil, a la derecha en escritorio */}
        <div className="relative flex justify-center items-center order-1 md:order-2 flex-shrink-0">
          <div className="absolute inset-0 rounded-full bg-gradient-to-r from-cyan-500/20 via-blue-500/20 to-indigo-500/20 blur-3xl animate-pulse"></div>
          <img
            src="/kris.png"
            alt="Kris"
            className="relative w-56 sm:w-64 md:w-64 lg:w-72 xl:w-80 rounded-full shadow-2xl shadow-blue-500/30 border-4 border-cyan-300/30 object-cover transition-transform duration-500 hover:scale-105 hover:border-cyan-300/50"
          />
        </div>
      </div>

      {/* Stats rápidos móvil - Solo visible en móvil */}
      <div className="grid grid-cols-3 gap-6 pt-10 pb-8 max-w-sm md:hidden z-10">
        <div className="text-center">
          <div className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
            2+
          </div>
          <div className="text-xs text-blue-100/60">Años</div>
        </div>
        <div className="text-center">
          <div className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
            5+
          </div>
          <div className="text-xs text-blue-100/60">Proyectos</div>
        </div>
        <div className="text-center">
          <div className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
            10+
          </div>
          <div className="text-xs text-blue-100/60">Tecnologías</div>
        </div>
      </div>
    </section>
  );
}