import { Link } from 'react-router-dom';
import RotatingText from "./AnimatedText";
import Particles from "./Backgrods";

export default function Home() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center px-6 sm:px-8 md:px-12 lg:px-24 pt-24 md:pt-0 overflow-hidden text-white">

      {/* 🌌 Fondo de partículas - OPTIMIZADO */}
      <div className="absolute inset-0 -z-10 bg-purple-950">
        <Particles
          particleCount={80} // ⚡ Reducido de 300 a 80 (75% menos carga)
          particleSpread={12} // Aumentado para mejor cobertura con menos partículas
          speed={0.2} // ⚡ Reducido de 0.3 a 0.2 (menos cálculos)
          particleColors={["#150e18ff", "#114888ff", "#041e68ff"]}
          moveParticlesOnHover={false} // ⚡ DESACTIVADO (ahorra mucho procesamiento)
          particleHoverFactor={0} // No necesario si hover está desactivado
          alphaParticles={false} // ⚡ DESACTIVADO (ahorra procesamiento de transparencias)
          particleBaseSize={180} // Ligeramente reducido
          sizeRandomness={1.8} // Reducido
          cameraDistance={25}
        />
      </div>

      {/* Partículas decorativas - OPTIMIZADO */}
      <div className="absolute inset-0 -z-10 opacity-20"> {/* Reducida opacidad */}
        {/* ⚡ Reducido blur de 3xl a 2xl (mejor rendimiento) */}
        {/* ⚡ Eliminado animate-pulse en uno para reducir cálculos */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-cyan-500/20 rounded-full blur-2xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-500/20 rounded-full blur-2xl animate-pulse-slow" />
      </div>

      {/* Contenedor principal */}
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

          {/* Texto con gradiente animado - OPTIMIZADO */}
          <div className="relative pt-2">
            <p 
              className="text-sm sm:text-base md:text-base lg:text-lg xl:text-xl max-w-lg mx-auto md:mx-0 leading-relaxed px-2 md:px-0 gradient-text"
            >
              Creo experiencias web modernas y escalables que transforman ideas en soluciones digitales impactantes.
            </p>
          </div>

          {/* Botones de acción - OPTIMIZADO */}
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center md:justify-start pt-4">
            <Link to="/sobre-mi">
              <button className="btn-primary w-full sm:w-auto">
                Conoce más sobre mí 👤
              </button>
            </Link>
            
            <Link to="/portafolio">
              <button className="btn-secondary w-full sm:w-auto">
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
                5+
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

        {/* Imagen - OPTIMIZADO */}
        <div className="relative flex justify-center items-center order-1 md:order-2 flex-shrink-0">
          {/* ⚡ Reducido blur de 3xl a 2xl */}
          <div className="absolute inset-0 rounded-full bg-gradient-to-r from-cyan-500/20 via-blue-500/20 to-indigo-500/20 blur-2xl animate-pulse-slow"></div>
          <img
            src="/kris.png"
            alt="Kris"
            loading="lazy" // ⚡ IMPORTANTE: Lazy loading
            className="relative w-56 sm:w-64 md:w-64 lg:w-72 xl:w-80 rounded-full shadow-2xl shadow-blue-500/30 border-4 border-cyan-300/30 object-cover hover-scale"
          />
        </div>
      </div>

      {/* Stats rápidos móvil */}
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

      {/* ⚡ ESTILOS OPTIMIZADOS - CSS con will-change para mejor rendimiento */}
      <style>{`
        /* Animación de gradiente optimizada */
        .gradient-text {
          background-image: linear-gradient(to right, #40ffaa, #4079ff, #40ffaa, #4079ff, #40ffaa);
          background-size: 300% 100%;
          background-clip: text;
          -webkit-background-clip: text;
          color: transparent;
          animation: gradientSlide 3s linear infinite;
          font-weight: 700;
          will-change: background-position; /* ⚡ Mejor rendimiento */
        }

        @keyframes gradientSlide {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }

        /* Pulse más lento y eficiente */
        .animate-pulse-slow {
          animation: pulse-slow 4s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }

        @keyframes pulse-slow {
          0%, 100% { opacity: 0.2; }
          50% { opacity: 0.3; }
        }

        /* Hover optimizado con transform (más rápido que otras propiedades) */
        .hover-scale {
          transition: transform 0.3s ease;
          will-change: transform; /* ⚡ Mejor rendimiento */
        }

        .hover-scale:hover {
          transform: scale(1.05);
        }

        /* Botones optimizados */
        .btn-primary {
          background: linear-gradient(to right, #06b6d4, #3b82f6, #6366f1);
          color: white;
          padding: 0.625rem 2rem;
          border-radius: 9999px;
          font-weight: 600;
          font-size: 0.875rem;
          box-shadow: 0 10px 15px -3px rgba(59, 130, 246, 0.3);
          transition: all 0.3s ease;
          will-change: transform, box-shadow;
        }

        .btn-primary:hover {
          transform: scale(1.05);
          box-shadow: 0 20px 25px -5px rgba(34, 211, 238, 0.4);
        }

        .btn-secondary {
          background: rgba(88, 28, 135, 0.5);
          border: 2px solid rgba(34, 211, 238, 0.5);
          color: white;
          padding: 0.625rem 2rem;
          border-radius: 9999px;
          font-weight: 600;
          font-size: 0.875rem;
          transition: all 0.3s ease;
          will-change: transform, border-color;
        }

        .btn-secondary:hover {
          transform: scale(1.05);
          border-color: rgb(34, 211, 238);
        }

        /* Media query para reducir animaciones en dispositivos móviles */
        @media (max-width: 768px) {
          .gradient-text {
            animation: none; /* Sin animación en móvil */
            background: linear-gradient(to right, #40ffaa, #4079ff);
            background-clip: text;
            -webkit-background-clip: text;
          }
        }

        /* Respetar preferencias de movimiento reducido */
        @media (prefers-reduced-motion: reduce) {
          .gradient-text,
          .animate-pulse-slow,
          .hover-scale,
          .btn-primary,
          .btn-secondary {
            animation: none !important;
            transition: none !important;
          }
        }
      `}</style>
    </section>
  );
}