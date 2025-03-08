import { useEffect, useState } from "react";
import { motion } from "framer-motion"; // Eliminamos AnimatePresence si no se usa
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { ArrowDown } from "lucide-react";
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import cr7Image from "../assets/cr7.webp"; // Asegúrate de que la ruta sea correcta

export default function App() {
  const [scrolled, setScrolled] = useState(false);
  const [, setCurrentSection] = useState(0); // Mantenemos si se usa

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const sections = [
    {
      title: "Aprendizaje Interactivo",
      description:
        "Transformamos la lectura en una experiencia dinámica y atractiva para los niños.",
        image: cr7Image, // Usa la variable importada
      },
    {
      title: "Personalización del Contenido",
      description:
        "Adaptamos las actividades a los estilos de aprendizaje de cada niño.",
        image: cr7Image, // Usa la variable importada
      },
    {
      title: "Seguimiento del Progreso",
      description:
        "Medimos el avance de los estudiantes con herramientas innovadoras.",
        image: cr7Image, // Usa la variable importada
      },
  ];

  return (
    <div className="min-h-screen bg-white text-black">
      {/* Navbar */}
      <Navbar scrolled={scrolled} />

      {/* Hero Section */}
      <section className="h-screen flex items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-yellow-100 to-orange-100"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.5 }}
          />
          <motion.div
            className="absolute -bottom-16 -right-16 w-64 h-64 rounded-full bg-orange-200"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
          />
          <motion.div
            className="absolute top-32 -left-16 w-32 h-32 rounded-full bg-yellow-200"
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
            LIRA: Aprendizaje de Lectura
          </motion.h1>
          <motion.p
            className="text-xl md:text-2xl text-center max-w-2xl mx-auto mb-12 text-orange-800"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Una plataforma digital que transforma la lectura en una experiencia interactiva y personalizada para niños.
          </motion.p>
          <motion.div
            className="flex justify-center"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <button className="rounded-full px-8 py-6 bg-orange-500 text-white hover:bg-orange-600 transition">
              Explorar
            </button>
          </motion.div>
        </div>

        <motion.div
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.8,
            delay: 1,
            repeat: Number.POSITIVE_INFINITY,
            repeatType: "reverse",
            repeatDelay: 0.5,
          }}
        >
          <ArrowDown className="animate-bounce text-orange-500" />
        </motion.div>
      </section>

      {/* Featured Sections */}
      <section className="py-20 bg-orange-50">
        <div className="container mx-auto px-4">
          <motion.h2
            className="text-3xl md:text-4xl font-bold mb-16 text-center text-orange-600"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Características Principales
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {[
              { icon: "📚", title: "Interactividad", desc: "Actividades dinámicas que captan la atención de los niños." },
              { icon: "🎮", title: "Gamificación", desc: "Juegos educativos que refuerzan el aprendizaje." },
              { icon: "📊", title: "Análisis de Datos", desc: "Seguimiento personalizado del progreso de cada niño." },
              { icon: "🧒", title: "Personalización", desc: "Contenidos adaptados a los estilos de aprendizaje." },
              { icon: "🔄", title: "Retroalimentación", desc: "Mecanismos efectivos para reforzar el conocimiento." },
              { icon: "🚀", title: "Innovación", desc: "Tecnología avanzada para una enseñanza eficiente." },
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

      {/* Showcase Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.h2
            className="text-3xl md:text-4xl font-bold mb-16 text-center text-orange-600"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Nuestro Enfoque
          </motion.h2>

          <div className="relative">
            <Slider
              dots={true}
              infinite={true}
              speed={500}
              slidesToShow={1}
              slidesToScroll={1}
              beforeChange={(_current: number, next: number) => setCurrentSection(next)}
            >
              {sections.map((section, index) => (
                <div key={index} className="px-4">
                  <div className="flex flex-col md:flex-row items-center">
                    <div className="w-full md:w-1/2 p-8">
                      <h3 className="text-2xl md:text-3xl font-bold mb-4 text-orange-600">{section.title}</h3>
                      <p className="text-lg text-orange-800 mb-6">{section.description}</p>
                      <button className="rounded-full px-6 py-3 border border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white transition">
                        Ver más
                      </button>
                    </div>
                    <div className="w-full md:w-1/2">
                      <img
                        src={section.image}
                        alt={section.title}
                        className="rounded-lg shadow-lg"
                      />
                    </div>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-orange-600 text-white">
        <div className="container mx-auto px-4">
          <motion.div
            className="max-w-2xl mx-auto text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">¿Listo para Transformar la Educación?</h2>
            <p className="text-lg mb-8 text-orange-100">
              Contáctanos hoy para llevar el aprendizaje de la lectura al siguiente nivel.
            </p>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <button className="rounded-full px-8 py-6 bg-white text-orange-600 hover:bg-orange-100 transition">
                Contactar Ahora
              </button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}