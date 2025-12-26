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
          alert("✓ Message sent successfully! I'll respond within 24 hours.");
          form.current.reset();
          setIsSubmitting(false);
        },
        (error) => {
          alert("✗ Error sending message. Please try WhatsApp instead.");
          console.log(error.text);
          setIsSubmitting(false);
        }
      );
  };

  return (
    <section className="relative min-h-screen py-20 px-6 md:px-24 overflow-hidden flex items-center justify-center">
       {/* 🌌 Fondo de partículas - TECH STYLE */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-black via-gray-900 to-blue-950">
        <Particles
          particleCount={30}
          particleSpread={10}
          speed={0.3}
          particleColors={["#1a1a1aff", "#0a4a6aff", "#0c2d48ff"]}
          moveParticlesOnHover={false}
          particleHoverFactor={0}
          alphaParticles={false}
          particleBaseSize={200}
          sizeRandomness={2}
          cameraDistance={25}
        />
      </div>

      {/* Partículas decorativas */}
      <div className="absolute inset-0 -z-10 opacity-20">
        <div className="absolute top-20 left-10 w-72 h-72 bg-cyan-500/20 rounded-full blur-3xl animate-pulse-slow" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-pulse-slow" />
        <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-gray-500/10 rounded-full blur-3xl" />
      </div>

      <div className="w-full max-w-5xl">
        {/* Header - TECH STYLE */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 font-mono"
        >
          <div className="text-cyan-400 text-sm mb-2">{'<contact>'}</div>
          <h1 className="text-5xl md:text-7xl font-bold mb-4 text-white">
            contact<span className="text-cyan-400">.</span>me<span className="text-purple-400">()</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-400 max-w-2xl mx-auto mb-6">
            <span className="text-purple-400">//</span> Let's build something amazing together
          </p>
          
          {/* Badge de disponibilidad - TECH STYLE */}
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-black/40 border border-green-400/50 text-green-400 text-sm font-mono">
            <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
            <span>status: <span className="text-white">available</span></span>
          </div>
        </motion.div>

        {/* Grid: Formulario + Contacto Directo */}
        <div className="grid md:grid-cols-3 gap-6">
          
          {/* FORMULARIO - TECH STYLE */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="md:col-span-2 bg-black/60 backdrop-blur-sm p-8 md:p-10 border-2 border-gray-700 shadow-2xl font-mono"
          >
            <div className="flex items-center gap-2 mb-6">
              <div className="flex gap-1.5">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
              </div>
              <span className="text-gray-400 text-sm ml-2">$ send_message.sh</span>
            </div>

            <form ref={form} onSubmit={sendEmail} className="space-y-5">
              
              {/* Grid: Nombre + Email */}
              <div className="grid md:grid-cols-2 gap-5">
                {/* Nombre */}
                <div>
                  <label htmlFor="name" className="block text-sm text-gray-400 mb-2">
                    <span className="text-cyan-400">{'>'}</span> name:
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    placeholder="your_name"
                    className="w-full px-4 py-3 bg-black/60 border border-gray-600 text-white placeholder-gray-500 focus:outline-none focus:border-cyan-400 transition-all"
                  />
                </div>

                {/* Email */}
                <div>
                  <label htmlFor="email" className="block text-sm text-gray-400 mb-2">
                    <span className="text-cyan-400">{'>'}</span> email:
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    placeholder="you@email.com"
                    className="w-full px-4 py-3 bg-black/60 border border-gray-600 text-white placeholder-gray-500 focus:outline-none focus:border-cyan-400 transition-all"
                  />
                </div>
              </div>

              {/* Tipo de proyecto */}
              <div>
                <label htmlFor="project_type" className="block text-sm text-gray-400 mb-2">
                  <span className="text-cyan-400">{'>'}</span> project_type:
                </label>
                <select
                  id="project_type"
                  name="project_type"
                  required
                  className="w-full px-4 py-3 bg-black/60 border border-gray-600 text-white focus:outline-none focus:border-cyan-400 transition-all"
                >
                  <option value="">--select option</option>
                  <option value="web">website / landing_page</option>
                  <option value="app">web_application</option>
                  <option value="backend">backend / api</option>
                  <option value="full">full_stack_project</option>
                  <option value="other">other</option>
                </select>
              </div>

              {/* Mensaje */}
              <div>
                <label htmlFor="message" className="block text-sm text-gray-400 mb-2">
                  <span className="text-cyan-400">{'>'}</span> message:
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows="5"
                  placeholder="// Describe your project, timeline, budget..."
                  className="w-full px-4 py-3 bg-black/60 border border-gray-600 text-white placeholder-gray-500 focus:outline-none focus:border-cyan-400 transition-all resize-none"
                />
              </div>

              {/* Botón - TECH STYLE */}
              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full bg-cyan-500 hover:bg-cyan-400 text-black px-8 py-4 font-bold text-lg transition-all duration-300 ${
                  isSubmitting ? 'opacity-50 cursor-not-allowed' : 'hover:scale-[1.02]'
                }`}
              >
                {isSubmitting ? '$ sending...' : '$ submit_form()'}
              </button>
            </form>
          </motion.div>

          {/* CONTACTO DIRECTO - TECH STYLE */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="space-y-4 font-mono"
          >
            {/* WhatsApp */}
            <a 
              href="https://wa.me/56985622986"
              target="_blank"
              rel="noopener noreferrer"
              className="block bg-black/60 border-2 border-green-500/50 hover:border-green-400 p-5 transition-all hover:scale-105"
            >
              <div className="flex items-start gap-3">
                <div className="text-3xl">📱</div>
                <div className="flex-1">
                  <h3 className="font-bold text-white mb-1 text-sm">whatsapp</h3>
                  <p className="text-xs text-gray-400 mb-2">instant_response</p>
                  <div className="text-green-400 text-xs font-bold">
                    {'>'} chat_now()
                  </div>
                </div>
              </div>
            </a>

            {/* Email */}
            <div className="bg-black/60 border-2 border-gray-700 p-5">
              <div className="flex items-start gap-3">
                <div className="text-3xl">✉️</div>
                <div className="flex-1">
                  <h3 className="font-bold text-white mb-1 text-sm">email</h3>
                  <p className="text-xs text-gray-400 mb-2">formal_proposals</p>
                  <a 
                    href="mailto:kristianarchila65@gmail.com"
                    className="text-cyan-400 hover:text-cyan-300 text-xs break-all"
                  >
                    kristianarchila65@
                    <br />gmail.com
                  </a>
                </div>
              </div>
            </div>

            {/* LinkedIn */}
            <a 
              href="https://www.linkedin.com/in/kristian-archila-34409718a/"
              target="_blank"
              rel="noopener noreferrer"
              className="block bg-black/60 border-2 border-gray-700 hover:border-blue-400 p-5 transition-all"
            >
              <div className="flex items-start gap-3">
                <div className="text-3xl">💼</div>
                <div className="flex-1">
                  <h3 className="font-bold text-white mb-1 text-sm">linkedin</h3>
                  <p className="text-xs text-gray-400 mb-2">professional_network</p>
                  <div className="text-cyan-400 text-xs">
                    {'>'} view_profile()
                  </div>
                </div>
              </div>
            </a>

            {/* GitHub */}
            <a 
              href="https://github.com/Kristianarchila"
              target="_blank"
              rel="noopener noreferrer"
              className="block bg-black/60 border-2 border-gray-700 hover:border-purple-400 p-5 transition-all"
            >
              <div className="flex items-start gap-3">
                <div className="text-3xl">💻</div>
                <div className="flex-1">
                  <h3 className="font-bold text-white mb-1 text-sm">github</h3>
                  <p className="text-xs text-gray-400 mb-2">view_source_code</p>
                  <div className="text-cyan-400 text-xs">
                    {'>'} explore_repos()
                  </div>
                </div>
              </div>
            </a>

            {/* Tiempo de respuesta */}
            <div className="bg-cyan-500/10 border-2 border-cyan-400/30 p-4 text-center">
              <p className="text-xs text-cyan-300">
                <span className="text-gray-400">response_time:</span> {'<'} 24h
              </p>
            </div>
          </motion.div>
        </div>

        {/* Cerrar tag */}
        <div className="text-cyan-400 text-sm text-center mt-8 font-mono">{'</contact>'}</div>
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