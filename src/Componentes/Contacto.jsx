import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";
import Particles from "./Backgrods";

export default function Contacto() {
  const form = useRef();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    emailjs
      .sendForm(
        "service_4riiu1n",
        "template_yaxclmd",
        form.current,
        "Y1A1kU_Rw2biLgWkB"
      )
      .then(
        (result) => {
          alert("¡Mensaje enviado con éxito! 🚀 Te responderé en menos de 24 horas.");
          form.current.reset();
          setIsSubmitting(false);
        },
        (error) => {
          alert("Error al enviar el mensaje. Por favor, intenta de nuevo o escríbeme por WhatsApp.");
          console.log(error.text);
          setIsSubmitting(false);
        }
      );
  };

  return (
    <section className="relative min-h-screen py-20 px-6 md:px-24 overflow-hidden flex items-center justify-center">
       {/* 🌌 Fondo de partículas - Optimizado */}
      <div className="absolute inset-0 -z-10 bg-purple-950">
        <Particles
          particleCount={30}
          particleSpread={10}
          speed={0.3}
          particleColors={["#150e18ff", "#114888ff", "#041e68ff"]}
          moveParticlesOnHover={false}
          particleHoverFactor={0}
          alphaParticles={false}
          particleBaseSize={200}
          sizeRandomness={2}
          cameraDistance={25}
        />
      </div>

      {/* Partículas decorativas */}
      <div className="absolute inset-0 -z-10 opacity-30">
        <div className="absolute top-20 left-10 w-72 h-72 bg-cyan-500/20 rounded-full blur-3xl animate-pulse-slow" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-pulse-slow" />
      </div>

      <div className="w-full max-w-5xl">
        {/* Header MEJORADO */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h1 className="text-5xl md:text-7xl font-extrabold mb-4 bg-gradient-to-r from-cyan-400 via-blue-400 to-indigo-400 bg-clip-text text-transparent">
            ¿Listo para trabajar juntos?
          </h1>
          <p className="text-xl md:text-2xl text-blue-100/80 max-w-2xl mx-auto mb-6">
            Cuéntame sobre tu proyecto y te responderé en menos de 24 horas
          </p>
          
          {/* Badge de disponibilidad */}
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-500/10 border border-green-400/30 rounded-full text-green-400 text-sm font-semibold">
            <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
            Disponible para nuevos proyectos
          </div>
        </motion.div>

        {/* Grid: Formulario + Contacto Directo */}
        <div className="grid md:grid-cols-3 gap-8">
          
          {/* FORMULARIO - 2 columnas */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="md:col-span-2 bg-purple-900/40 backdrop-blur-sm rounded-3xl p-8 md:p-10 border border-blue-500/20 shadow-2xl shadow-blue-500/10"
          >
            <h2 className="text-2xl font-bold mb-6 text-white">Envíame un mensaje</h2>
            <form ref={form} onSubmit={sendEmail} className="space-y-5">
              
              {/* Grid: Nombre + Email */}
              <div className="grid md:grid-cols-2 gap-5">
                {/* Nombre */}
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-blue-100/80 mb-2">
                    Nombre *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    placeholder="Tu nombre"
                    className="w-full px-4 py-3 rounded-xl bg-purple-950/50 border border-blue-500/20 text-white placeholder-blue-100/40 focus:outline-none focus:border-cyan-400/50 focus:ring-2 focus:ring-cyan-400/20 transition-all"
                  />
                </div>

                {/* Email */}
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-blue-100/80 mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    placeholder="tu@email.com"
                    className="w-full px-4 py-3 rounded-xl bg-purple-950/50 border border-blue-500/20 text-white placeholder-blue-100/40 focus:outline-none focus:border-cyan-400/50 focus:ring-2 focus:ring-cyan-400/20 transition-all"
                  />
                </div>
              </div>

              {/* Tipo de proyecto (Select) - NUEVO */}
              <div>
                <label htmlFor="project_type" className="block text-sm font-medium text-blue-100/80 mb-2">
                  Tipo de proyecto *
                </label>
                <select
                  id="project_type"
                  name="project_type"
                  required
                  className="w-full px-4 py-3 rounded-xl bg-purple-950/50 border border-blue-500/20 text-white focus:outline-none focus:border-cyan-400/50 focus:ring-2 focus:ring-cyan-400/20 transition-all"
                >
                  <option value="">Selecciona una opción</option>
                  <option value="web">Sitio web / Landing page</option>
                  <option value="app">Aplicación web completa</option>
                  <option value="backend">Backend / API</option>
                  <option value="full">Proyecto Full-Stack</option>
                  <option value="other">Otro</option>
                </select>
              </div>

              {/* Mensaje - Más compacto */}
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-blue-100/80 mb-2">
                  Cuéntame sobre tu proyecto *
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows="5"
                  placeholder="Describe brevemente qué necesitas, plazos, presupuesto aproximado..."
                  className="w-full px-4 py-3 rounded-xl bg-purple-950/50 border border-blue-500/20 text-white placeholder-blue-100/40 focus:outline-none focus:border-cyan-400/50 focus:ring-2 focus:ring-cyan-400/20 transition-all resize-none"
                />
              </div>

              {/* Botón */}
              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full bg-gradient-to-r from-cyan-500 via-blue-500 to-indigo-600 hover:from-cyan-400 hover:via-blue-400 hover:to-indigo-500 text-white px-8 py-4 rounded-xl font-semibold text-lg shadow-lg shadow-blue-500/30 hover:shadow-cyan-400/40 transition-all duration-300 ${
                  isSubmitting ? 'opacity-50 cursor-not-allowed' : 'hover:scale-[1.02]'
                }`}
              >
                {isSubmitting ? 'Enviando... ⏳' : 'Enviar Mensaje 🚀'}
              </button>
            </form>
          </motion.div>

          {/* CONTACTO DIRECTO - 1 columna - NUEVO */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="space-y-6"
          >
            {/* WhatsApp - PRIORIDAD */}
            <div className="bg-gradient-to-br from-green-900/40 to-green-800/20 backdrop-blur-sm rounded-2xl p-6 border border-green-500/30 hover:border-green-400/50 transition-all hover:scale-105 cursor-pointer">
              <div className="flex items-start gap-4">
                <div className="text-4xl">📱</div>
                <div className="flex-1">
                  <h3 className="font-bold text-lg text-white mb-1">WhatsApp</h3>
                  <p className="text-sm text-green-100/70 mb-3">Respuesta inmediata</p>
                  <a 
                    href="https://wa.me/56985622986"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block bg-green-600 hover:bg-green-500 text-white px-4 py-2 rounded-lg text-sm font-semibold transition-all"
                  >
                    Chatear ahora
                  </a>
                </div>
              </div>
            </div>

            {/* Email */}
            <div className="bg-purple-900/40 backdrop-blur-sm rounded-2xl p-6 border border-blue-500/20 hover:border-cyan-400/50 transition-all">
              <div className="flex items-start gap-4">
                <div className="text-4xl">✉️</div>
                <div className="flex-1">
                  <h3 className="font-bold text-lg text-white mb-1">Email</h3>
                  <p className="text-sm text-blue-100/70 mb-2">Para propuestas formales</p>
                  <a 
                    href="kristianarchila65@gmail.com"
                    className="text-cyan-400 hover:text-cyan-300 text-sm break-all"
                  >
                    kristianarchila65@gmail.com
                  </a>
                </div>
              </div>
            </div>

            {/* LinkedIn */}
            <div className="bg-purple-900/40 backdrop-blur-sm rounded-2xl p-6 border border-blue-500/20 hover:border-cyan-400/50 transition-all">
              <div className="flex items-start gap-4">
                <div className="text-4xl">💼</div>
                <div className="flex-1">
                  <h3 className="font-bold text-lg text-white mb-1">LinkedIn</h3>
                  <p className="text-sm text-blue-100/70 mb-3">Conectemos profesionalmente</p>
                  <a 
                    href="https://www.linkedin.com/in/kristian-archila-34409718a/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-cyan-400 hover:text-cyan-300 text-sm font-semibold"
                  >
                    Ver perfil →
                  </a>
                </div>
              </div>
            </div>

            {/* GitHub */}
            <div className="bg-purple-900/40 backdrop-blur-sm rounded-2xl p-6 border border-blue-500/20 hover:border-cyan-400/50 transition-all">
              <div className="flex items-start gap-4">
                <div className="text-4xl">💻</div>
                <div className="flex-1">
                  <h3 className="font-bold text-lg text-white mb-1">GitHub</h3>
                  <p className="text-sm text-blue-100/70 mb-3">Revisa mi código</p>
                  <a 
                    href="https://github.com/Kristianarchila"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-cyan-400 hover:text-cyan-300 text-sm font-semibold"
                  >
                    Ver repositorios →
                  </a>
                </div>
              </div>
            </div>

            {/* Tiempo de respuesta */}
            <div className="bg-cyan-900/20 backdrop-blur-sm rounded-2xl p-4 border border-cyan-500/30 text-center">
              <p className="text-sm text-cyan-100/80">
                ⏱️ <strong>Tiempo de respuesta:</strong> Menos de 24 horas
              </p>
            </div>
          </motion.div>
        </div>
      </div>

        

      {/* Estilos */}
      <style>{`
        .animate-pulse-slow {
          animation: pulse-slow 4s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }

        @keyframes pulse-slow {
          0%, 100% { opacity: 0.2; }
          50% { opacity: 0.3; }
        }

        /* Respetar preferencias de movimiento reducido */
        @media (prefers-reduced-motion: reduce) {
          .animate-pulse-slow,
          .animate-pulse {
            animation: none !important;
          }
        }
      `}</style>
    </section>
  );
}