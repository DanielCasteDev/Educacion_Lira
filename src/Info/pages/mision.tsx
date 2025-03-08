import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Navbar from "../components/navbar";
import Footer from "../components/footer";

export default function MisionVision() {
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
            ¿Qué es LIRA?
          </motion.h1>
          <motion.p
            className="text-xl md:text-2xl text-center max-w-2xl mx-auto mb-12 text-orange-800"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Lira es una aplicación educativa diseñada para enseñar a los niños a leer mediante juegos interactivos y actividades divertidas, como completar palabras, decir sílabas y reconocer nombres de animales, ofreciendo una experiencia de aprendizaje personalizada y accesible para todas las familias.
          </motion.p>
        </div>
      </section>

      {/* Combined Mission and Vision Section */}
      <section className="py-20 bg-orange-50">
        <div className="container mx-auto px-4">
          <motion.h2
            className="text-3xl md:text-4xl font-bold mb-16 text-center text-orange-600"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Nuestra Misión y Visión
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Misión */}
            <motion.div
              className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
            >
              <h3 className="text-2xl font-bold mb-4 text-orange-600">Misión</h3>
              <p className="text-gray-600">
                En Lira, nos dedicamos a transformar la educación de la lectura en una experiencia interactiva, divertida y accesible para todos los niños. Utilizamos tecnología innovadora para crear herramientas educativas que se adapten a las necesidades individuales de cada niño.
              </p>
            </motion.div>

            {/* Visión */}
            <motion.div
              className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
            >
              <h3 className="text-2xl font-bold mb-4 text-orange-600">Visión</h3>
              <p className="text-gray-600">
                Queremos ser reconocidos como la plataforma líder en educación infantil, inspirando a las nuevas generaciones a amar la lectura y el aprendizaje. Buscamos reducir la brecha educativa y promover la igualdad de oportunidades para todos los niños.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.h2
            className="text-3xl md:text-4xl font-bold mb-16 text-center text-orange-600"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            ¿Cómo lo hacemos?
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: "🎮",
                title: "Juegos Interactivos",
                desc: "Actividades divertidas que enseñan a los niños a leer mientras juegan.",
              },
              {
                icon: "📊",
                title: "Seguimiento Personalizado",
                desc: "Adaptamos el contenido al ritmo de aprendizaje de cada niño.",
              },
              {
                icon: "🌍",
                title: "Acceso Global",
                desc: "Llegamos a familias de todo el mundo, sin importar su ubicación.",
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
              >
                <div className="text-4xl mb-4 text-orange-500">{item.icon}</div>
                <h3 className="text-xl font-semibold mb-2 text-orange-600">{item.title}</h3>
                <p className="text-gray-600">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}