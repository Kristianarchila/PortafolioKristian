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
          alert("¡Mensaje enviado con éxito! 🚀");
          form.current.reset();
          setIsSubmitting(false);
        },
        (error) => {
          alert("Error al enviar el mensaje. Por favor, intenta de nuevo.");
          console.log(error.text);
          setIsSubmitting(false);
        }
      );
  };

  return (
    <section className="relative min-h-screen py-20 px-6 md:px-24 overflow-hidden flex items-center justify-center">
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

      {/* Partículas */}
      <div className="absolute inset-0 -z-10 opacity-30">
        <div className="absolute top-20 left-10 w-72 h-72 bg-cyan-500/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-pulse" />
      </div>

      <div className="w-full max-w-4xl">
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h1 className="text-5xl md:text-7xl font-extrabold mb-4 bg-gradient-to-r from-cyan-400 via-blue-400 to-indigo-400 bg-clip-text text-transparent">
            Hablemos
          </h1>
          <p className="text-xl md:text-2xl text-blue-100/80 max-w-2xl mx-auto">
            ¿Tienes un proyecto en mente? Envíame un mensaje y trabajemos juntos
          </p>
        </motion.div>

        {/* Formulario */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-purple-900/40 backdrop-blur-sm rounded-3xl p-8 md:p-12 border border-blue-500/20 shadow-2xl shadow-blue-500/10"
        >
          <form ref={form} onSubmit={sendEmail} className="space-y-6">
            {/* Nombre */}
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-blue-100/80 mb-2">
                Nombre
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                placeholder="Tu nombre completo"
                className="w-full px-4 py-3 rounded-xl bg-purple-950/50 border border-blue-500/20 text-white placeholder-blue-100/40 focus:outline-none focus:border-cyan-400/50 focus:ring-2 focus:ring-cyan-400/20 transition-all"
              />
            </div>

            {/* Email */}
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-blue-100/80 mb-2">
                Email
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

            {/* Asunto */}
            <div>
              <label htmlFor="title" className="block text-sm font-medium text-blue-100/80 mb-2">
                Asunto
              </label>
              <input
                type="text"
                id="title"
                name="title"
                required
                placeholder="¿Sobre qué quieres hablar?"
                className="w-full px-4 py-3 rounded-xl bg-purple-950/50 border border-blue-500/20 text-white placeholder-blue-100/40 focus:outline-none focus:border-cyan-400/50 focus:ring-2 focus:ring-cyan-400/20 transition-all"
              />
            </div>

            {/* Mensaje */}
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-blue-100/80 mb-2">
                Mensaje
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows="6"
                placeholder="Cuéntame sobre tu proyecto..."
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

        {/* Información de contacto adicional */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-12 text-center"
        >
          <p className="text-blue-100/60 mb-4">O encuéntrame en:</p>
          <div className="flex justify-center gap-6">
            <a
              href="https://github.com/tu-usuario"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 bg-purple-900/40 backdrop-blur-sm rounded-full flex items-center justify-center border border-blue-500/20 hover:border-cyan-400/50 hover:scale-110 transition-all duration-300"
            >
              <span className="text-2xl">💻</span>
            </a>
            <a
              href="https://linkedin.com/in/tu-perfil"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 bg-purple-900/40 backdrop-blur-sm rounded-full flex items-center justify-center border border-blue-500/20 hover:border-cyan-400/50 hover:scale-110 transition-all duration-300"
            >
              <span className="text-2xl">💼</span>
            </a>
            <a
              href="mailto:tu@email.com"
              className="w-12 h-12 bg-purple-900/40 backdrop-blur-sm rounded-full flex items-center justify-center border border-blue-500/20 hover:border-cyan-400/50 hover:scale-110 transition-all duration-300"
            >
              <span className="text-2xl">📧</span>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
