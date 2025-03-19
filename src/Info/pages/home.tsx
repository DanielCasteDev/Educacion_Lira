import { useEffect, useState } from "react";
import { ArrowDown } from "lucide-react";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import lira1 from "../../assets/iphone.png";
import lira2 from "../../assets/lira_web1.png";
import Sphere from "../components/sphere";
import {
  BookOpenIcon,
  DevicePhoneMobileIcon,
  ChartBarIcon,
  UserIcon,
  ArrowPathIcon,
  RocketLaunchIcon,
  ArrowRightIcon,
} from "@heroicons/react/24/solid";
import { FaGooglePlay, FaAppStoreIos } from "react-icons/fa";
import { motion } from "framer-motion";

export default function App() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-white text-gray-800">
      {/* Fondo degradado */}
      <div
        className="absolute inset-0 z-0"
        style={{
          background: "linear-gradient(to right, #FFF7ED, #FFEDD5)",
        }}
      ></div>

      {/* Esferas rebotando */}
      <div className="absolute inset-0 z-10">
        {[50, 70, 40, 60, 80, 90, 30, 100, 55, 65].map((size, index) => (
          <Sphere
            key={index}
            size={size}
            color={`rgba(255, 165, 0, ${0.4 + index * 0.05})`}
          />
        ))}
      </div>

      {/* Navbar */}
      <Navbar scrolled={scrolled} />

  {/* Hero Section */}
<section className="h-screen flex items-center justify-center relative pt-20 md:pt-0"> {/* Añadido pt-60 para móviles */}
  <div className="container mx-auto px-4 z-20 flex flex-col md:flex-row items-center justify-between gap-8">
    {/* Texto */}
    <div className="text-center md:text-left md:w-1/2">
      <h1 className="text-5xl md:text-7xl font-bold mb-6 text-orange-500">
        LIRA: Aprendizaje de Lectura
      </h1>
      <p className="text-xl md:text-2xl max-w-2xl mx-auto mb-12 text-orange-700">
        Una plataforma digital que transforma la lectura en una experiencia interactiva y personalizada para niños.
      </p>
      {/* Botón "Explorar" oculto en móviles */}
      <div className="hidden md:flex justify-center md:justify-start">
        <button className="rounded-full px-8 py-6 bg-orange-500 text-white hover:bg-orange-600 transition">
          Explorar
        </button>
      </div>
    </div>

    {/* Imagen del teléfono con animación */}
    <motion.div
      className="md:w-1/2 flex justify-center -mt-18 md:mt-0" 
      initial={{ y: 0 }}
      animate={{ y: [0, -10, 0] }}
      transition={{
        duration: 2,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    >
      <img
        src={lira2}
        alt="LIRA en el teléfono"
        className="w-96 md:w-128"
      />
    </motion.div>
  </div>

  {/* Flecha animada */}
  <div className="absolute bottom-5 left-1/2 transform -translate-x-1/2 z-20">
    <ArrowDown className="animate-bounce text-orange-500" />
  </div>
</section>

      {/* Featured Sections */}
      <section className="py-20 bg-orange-50 relative z-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-16 text-center text-orange-500">
            Características Principales
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {[
              { icon: <BookOpenIcon className="h-12 w-12 text-orange-500" />, title: "Interactividad", desc: "Actividades dinámicas que captan la atención de los niños." },
              { icon: <DevicePhoneMobileIcon className="h-12 w-12 text-orange-500" />, title: "Gamificación", desc: "Juegos educativos que refuerzan el aprendizaje." },
              { icon: <ChartBarIcon className="h-12 w-12 text-orange-500" />, title: "Análisis de Datos", desc: "Seguimiento personalizado del progreso de cada niño." },
              { icon: <UserIcon className="h-12 w-12 text-orange-500" />, title: "Personalización", desc: "Contenidos adaptados a los estilos de aprendizaje." },
              { icon: <ArrowPathIcon className="h-12 w-12 text-orange-500" />, title: "Retroalimentación", desc: "Mecanismos efectivos para reforzar el conocimiento." },
              { icon: <RocketLaunchIcon className="h-12 w-12 text-orange-500" />, title: "Innovación", desc: "Tecnología avanzada para una enseñanza eficiente." },
            ].map((item, i) => (
              <div
                key={i}
                className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="flex justify-center mb-4">{item.icon}</div>
                <h3 className="text-xl font-semibold mb-2 text-orange-500">{item.title}</h3>
                <p className="text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

{/* Sección de Descarga de la App para LIRA */}
<section className="py-8 md:py-12 bg-gradient-to-r from-orange-400 to-orange-500 text-white relative z-20">
  <div className="container mx-auto px-4">
    <div className="flex flex-col md:flex-row items-center justify-between gap-6 md:gap-8">
      {/* Texto y botones */}
      <div className="w-full md:w-1/2 text-center md:text-left">
        <h2 className="text-2xl md:text-4xl font-bold mb-4 md:mb-6">
          LIRA: Aprendizaje de Lectura
        </h2>
        <p className="text-sm md:text-lg mb-6 md:mb-8 text-orange-100">
          Descarga la app y transforma la lectura en una experiencia interactiva y personalizada para los niños. Monitorea su progreso y disfruta de herramientas innovadoras.
        </p>
        <div className="flex flex-col md:flex-row gap-3 md:gap-4 justify-center md:justify-start">
          <a
            href="#"
            className="inline-flex items-center justify-center rounded-lg px-4 py-2 md:px-6 md:py-3 bg-black text-white hover:bg-gray-900 transition-all duration-300"
          >
            <FaGooglePlay className="h-5 w-5 md:h-6 md:w-6 mr-2" />
            <span className="text-sm md:text-base">Google Play</span>
          </a>
          <a
            href="#"
            className="inline-flex items-center justify-center rounded-lg px-4 py-2 md:px-6 md:py-3 bg-black text-white hover:bg-gray-900 transition-all duration-300"
          >
            <FaAppStoreIos className="h-5 w-5 md:h-6 md:w-6 mr-2" />
            <span className="text-sm md:text-base">App Store</span>
          </a>
        </div>
      </div>

      {/* Imagen del teléfono (oculta en móviles, visible en escritorio) */}
      <div className="hidden md:block w-full md:w-1/2 justify-center">
        <img
          src={lira1}
          alt="LIRA en el teléfono"
          className="w-48 md:w-64"
        />
      </div>
    </div>
  </div>
</section>

      {/* FAQ Section */}
      <section className="py-20 bg-white relative z-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-16 text-center text-orange-500">
            Preguntas Frecuentes
          </h2>

          <div className="max-w-3xl mx-auto">
            {[
              {
                question: "¿Qué es LIRA?",
                answer: "LIRA es una plataforma digital diseñada para transformar la lectura en una experiencia interactiva y personalizada para niños, utilizando juegos, animaciones y actividades prácticas."
              },
              {
                question: "¿Cómo se personaliza el contenido?",
                answer: "Utilizamos algoritmos avanzados para analizar el progreso de cada niño y ajustar el contenido según sus necesidades, garantizando una experiencia de aprendizaje personalizada."
              },
              {
                question: "¿Puedo seguir el progreso de mi hijo?",
                answer: "Sí, los padres y educadores pueden acceder a informes detallados sobre el progreso de los niños, identificando áreas de mejora y celebrando logros."
              },
              {
                question: "¿Es seguro para los niños?",
                answer: "Absolutamente. LIRA está diseñada con estándares de seguridad y privacidad para garantizar un entorno seguro para los niños."
              },
              {
                question: "¿Cómo puedo empezar?",
                answer: "Puedes comenzar registrándote en nuestra plataforma y explorando las diferentes actividades y lecciones disponibles."
              }
            ].map((faq, index) => (
              <div key={index} className="mb-6">
                <div className="flex items-center justify-between bg-orange-50 p-4 rounded-lg cursor-pointer" onClick={() => {
                  const answer = document.getElementById(`answer-${index}`);
                  if (answer) {
                    answer.classList.toggle('hidden');
                  }
                }}>
                  <h3 className="text-lg font-semibold text-orange-500">{faq.question}</h3>
                  <ArrowDown className="h-5 w-5 text-orange-400 transform transition-transform duration-300" />
                </div>
                <div id={`answer-${index}`} className="hidden p-4 text-gray-600">
                  <p>{faq.answer}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section*/}
      <section className="py-20 bg-white relative z-20">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-orange-500">
              ¿Listo para Transformar la Educación?
            </h2>
            <p className="text-lg mb-8 text-gray-600">
              Contáctanos hoy para llevar el aprendizaje de la lectura al siguiente nivel.
            </p>
            <a
              href="/contacto"
              className="inline-flex items-center justify-center rounded-full px-8 py-6 bg-orange-500 text-white hover:bg-orange-600 transition-all duration-300"
            >
              <span>Contactar Ahora</span>
              <ArrowRightIcon className="h-5 w-5 ml-2" />
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <div className="relative z-30">
        <Footer />
      </div>
    </div>
  );
}