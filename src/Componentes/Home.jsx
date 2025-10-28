import { Link } from 'react-router-dom';
import RotatingText from "./AnimatedText";
import Particles from "./Backgrods";

export default function Home() {
  return (
    <section className="relative min-h-screen flex flex-col md:flex-row items-center justify-center px-6 sm:px-8 md:px-24 pt-24 md:pt-0 overflow-hidden text-white">

      {/* 🌌 Fondo de partículas */}
      <div className="absolute inset-0 -z-10 bg-purple-800">
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

      {/* Contenido principal */}
      <div className="flex flex-col justify-center text-center md:text-left space-y-4 sm:space-y-6 z-10 w-full md:w-auto">
        
        {/* Saludo Principal */}
        <h1 className="text-4xl sm:text-5xl md:text-7xl font-extrabold leading-tight">
          Hola, soy <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-indigo-400 bg-clip-text text-transparent">Kris</span> 👋
        </h1>

        {/* Texto Rotativo */}
        <div className="min-h-16 sm:min-h-20 flex items-center justify-center md:justify-start">
          <RotatingText
            texts={[
              "Desarrollador Full-Stack 💻",
              "Diseñador Web 🎨",
              "Apasionado por la Tecnología ⚡",
            ]}
            mainClassName="text-2xl sm:text-3xl md:text-4xl font-semibold"
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

        {/* Descripción corta */}
        <p className="text-base sm:text-lg md:text-xl text-blue-100/80 max-w-lg mx-auto md:mx-0 leading-relaxed px-4 md:px-0">
          Creo experiencias web modernas y escalables que transforman ideas en soluciones digitales impactantes.
        </p>

        {/* Botones de acción */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start pt-2">
          <Link to="/sobre-mi">
            <button className="bg-gradient-to-r from-cyan-500 via-blue-500 to-indigo-600 hover:from-cyan-400 hover:via-blue-400 hover:to-indigo-500 transition-all duration-300 text-white px-8 py-3 rounded-full font-semibold text-sm sm:text-base shadow-lg shadow-blue-500/30 hover:shadow-cyan-400/40 hover:scale-105 w-full sm:w-auto">
              Conoce más sobre mí 👤
            </button>
          </Link>
          
          <Link to="/portafolio">
            <button className="bg-purple-800/50 hover:bg-purple-700/50 border-2 border-cyan-400/50 hover:border-cyan-400 transition-all duration-300 text-white px-8 py-3 rounded-full font-semibold text-sm sm:text-base hover:scale-105 w-full sm:w-auto">
              Ver mis proyectos 🚀
            </button>
          </Link>
        </div>

        {/* Stats rápidos (opcional pero impactante) */}
        <div className="grid grid-cols-3 gap-4 pt-8 max-w-md mx-auto md:mx-0">
          <div className="text-center md:text-left">
            <div className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
              3+
            </div>
            <div className="text-xs md:text-sm text-blue-100/60">Años</div>
          </div>
          <div className="text-center md:text-left">
            <div className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
              20+
            </div>
            <div className="text-xs md:text-sm text-blue-100/60">Proyectos</div>
          </div>
          <div className="text-center md:text-left">
            <div className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
              10+
            </div>
            <div className="text-xs md:text-sm text-blue-100/60">Tecnologías</div>
          </div>
        </div>
      </div>

      {/* Imagen */}
      <div className="mt-8 sm:mt-10 md:mt-0 md:ml-16 relative flex justify-center items-center z-10">
        <div className="absolute inset-0 rounded-full bg-gradient-to-r from-cyan-500/20 via-blue-500/20 to-indigo-500/20 blur-3xl animate-pulse"></div>
        <img
          src="/kris.png"
          alt="Kris"
          className="relative w-48 sm:w-64 md:w-80 rounded-full shadow-2xl shadow-blue-500/30 border-4 border-cyan-300/30 object-cover transition-transform duration-500 hover:scale-105 hover:border-cyan-300/50"
        />
      </div>
    </section>
  );
}