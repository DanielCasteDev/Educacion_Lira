import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { EnvelopeIcon, PhoneIcon, GlobeAltIcon } from "@heroicons/react/24/solid";
import Navbar from "../components/navbar";
import Footer from "../components/footer";

export default function ContactPage() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-white text-black">
      {/* Navbar */}
      <Navbar scrolled={scrolled} />

      {/* Hero Section */}
      <section className="h-screen flex items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-orange-50 to-yellow-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.5 }}
          />
          <motion.div
            className="absolute -bottom-16 -right-16 w-64 h-64 rounded-full bg-yellow-100"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
          />
          <motion.div
            className="absolute top-32 -left-16 w-32 h-32 rounded-full bg-orange-100"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 1, delay: 0.7 }}
          />
        </div>

        <div className="container mx-auto px-4 z-10">
          <motion.h1
            className="text-5xl md:text-7xl font-bold mb-6 text-center text-orange-600"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Contáctanos
          </motion.h1>
          <motion.p
            className="text-xl md:text-2xl text-center max-w-2xl mx-auto mb-12 text-orange-800"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Estamos aquí para ayudarte. ¡Escríbenos y te responderemos lo antes posible!
          </motion.p>
        </div>
      </section>

      {/* Contact Information Section */}
      <section className="py-20 bg-orange-50">
        <div className="container mx-auto px-4">
          <motion.h2
            className="text-3xl md:text-4xl font-bold mb-16 text-center text-orange-600"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Información de Contacto
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Email */}
            <motion.div
              className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
            >
              <div className="flex justify-center mb-4">
                <EnvelopeIcon className="h-12 w-12 text-orange-500" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-center text-orange-600">Correo Electrónico</h3>
              <p className="text-gray-600 text-center">info@liraeducacion.com</p>
            </motion.div>

            {/* Teléfono */}
            <motion.div
              className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
            >
              <div className="flex justify-center mb-4">
                <PhoneIcon className="h-12 w-12 text-orange-500" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-center text-orange-600">Teléfono</h3>
              <p className="text-gray-600 text-center">+52 33 1234 5678</p>
            </motion.div>

            {/* Redes Sociales */}
            <motion.div
              className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
            >
              <div className="flex justify-center mb-4">
                <GlobeAltIcon className="h-12 w-12 text-orange-500" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-center text-orange-600">Redes Sociales</h3>
              <div className="flex justify-center space-x-4">
                <a href="#" className="text-orange-500 hover:text-orange-600">
                  Facebook
                </a>
                <a href="#" className="text-orange-500 hover:text-orange-600">
                  Twitter
                </a>
                <a href="#" className="text-orange-500 hover:text-orange-600">
                  Instagram
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.h2
            className="text-3xl md:text-4xl font-bold mb-16 text-center text-orange-600"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            ¿Dónde Estamos?
          </motion.h2>

          <div className="rounded-lg overflow-hidden shadow-lg">
  <iframe
    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3737.563919393111!2d-103.53575682475815!3d20.483096581033163!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x842f55f2173b24d1%3A0xb3fc2b0647d8a722!2sUniversidad%20Tecnol%C3%B3gica%20de%20la%20Zona%20Metropolitana%20de%20Guadalajara!5e0!3m2!1ses-419!2smx!4v1741799978369!5m2!1ses-419!2smx"
    width="100%"
    height="450"
    style={{ border: 0 }}
    allowFullScreen
    loading="lazy"
    referrerPolicy="no-referrer-when-downgrade"
  ></iframe>
</div>

        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-20 bg-orange-50">
        <div className="container mx-auto px-4">
          <motion.h2
            className="text-3xl md:text-4xl font-bold mb-16 text-center text-orange-600"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Escríbenos
          </motion.h2>

          <form className="max-w-2xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <label htmlFor="name" className="block text-gray-600 mb-2">
                  Nombre
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-2 rounded-lg border border-orange-300 focus:outline-none focus:ring-2 focus:ring-orange-500"
                  placeholder="Tu nombre"
                />
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
              >
                <label htmlFor="email" className="block text-gray-600 mb-2">
                  Correo Electrónico
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-2 rounded-lg border border-orange-300 focus:outline-none focus:ring-2 focus:ring-orange-500"
                  placeholder="Tu correo electrónico"
                />
              </motion.div>
            </div>
            <motion.div
              className="mt-6"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              viewport={{ once: true }}
            >
              <label htmlFor="message" className="block text-gray-600 mb-2">
                Mensaje
              </label>
              <textarea
                id="message"
                className="w-full px-4 py-2 rounded-lg border border-orange-300 focus:outline-none focus:ring-2 focus:ring-orange-500"
                rows={5}
                placeholder="Tu mensaje"
              ></textarea>
            </motion.div>
            <motion.div
              className="mt-6"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              viewport={{ once: true }}
            >
              <button
                type="submit"
                className="w-full px-6 py-3 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition"
              >
                Enviar Mensaje
              </button>
            </motion.div>
          </form>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}