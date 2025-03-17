import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { ArrowDown, X } from "lucide-react";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import cr7Image from "../../assets/cr7.webp";
import lira1 from "../../assets/iphone.png";
import Sphere from "../components/sphere";
import {
  BookOpenIcon,
  DevicePhoneMobileIcon,
  ChartBarIcon,
  UserIcon,
  ArrowPathIcon,
  RocketLaunchIcon,
  ArrowRightIcon,
  LightBulbIcon,
  CogIcon,
  ChartBarIcon as TrendingUpIcon,
} from "@heroicons/react/24/solid";
import { FaGooglePlay, FaAppStoreIos } from "react-icons/fa";

// Definir el tipo para cada sección
interface ShowcaseSection {
  title: string;
  description: string;
  icon: React.ReactNode;
  image: string;
  details: string;
}

export default function App() {
  const [scrolled, setScrolled] = useState(false);
  const [, setCurrentSection] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedSection, setSelectedSection] = useState<ShowcaseSection | null>(null);

  // Tipar el parámetro de la función
  const openModal = (section: ShowcaseSection) => {
    setSelectedSection(section);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedSection(null);
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Datos de las secciones con el tipo definido
  const showcaseData: ShowcaseSection[] = [
    {
      title: "Aprendizaje Interactivo",
      description:
        "Transformamos la lectura en una experiencia dinámica y atractiva para los niños.",
      icon: <LightBulbIcon className="h-16 w-16 text-orange-400" />,
      image: cr7Image,
      details:
        "Nuestra plataforma utiliza juegos interactivos, animaciones y actividades prácticas para que los niños aprendan mientras se divierten. Cada lección está diseñada para mantener su atención y fomentar el amor por la lectura.",
    },
    {
      title: "Personalización del Contenido",
      description:
        "Adaptamos las actividades a los estilos de aprendizaje de cada niño.",
      icon: <CogIcon className="h-16 w-16 text-orange-400" />,
      image: cr7Image,
      details:
        "Utilizamos algoritmos avanzados para analizar el progreso de cada niño y ajustar el contenido según sus necesidades. Esto garantiza que cada estudiante reciba una experiencia de aprendizaje personalizada.",
    },
    {
      title: "Seguimiento del Progreso",
      description:
        "Medimos el avance de los estudiantes con herramientas innovadoras.",
      icon: <TrendingUpIcon className="h-16 w-16 text-orange-400" />,
      image: cr7Image,
      details:
        "Los padres y educadores pueden acceder a informes detallados sobre el progreso de los niños. Nuestras herramientas de análisis permiten identificar áreas de mejora y celebrar los logros.",
    },
  ];

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
      <section className="h-screen flex items-center justify-center relative">
        <div className="container mx-auto px-4 z-20">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-center text-orange-500">
            LIRA: Aprendizaje de Lectura
          </h1>
          <p className="text-xl md:text-2xl text-center max-w-2xl mx-auto mb-12 text-orange-700">
            Una plataforma digital que transforma la lectura en una experiencia interactiva y personalizada para niños.
          </p>
          <div className="flex justify-center">
            <button className="rounded-full px-8 py-6 bg-orange-500 text-white hover:bg-orange-600 transition">
              Explorar
            </button>
          </div>
        </div>

        {/* Flecha animada */}
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-20">
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

      

      {/* Showcase Section Mejorada */}
      <section className="py-20 bg-white relative z-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-16 text-center text-orange-500">
            Nuestro Enfoque
          </h2>

          <div className="relative">
            <Slider
              dots={true}
              infinite={true}
              speed={500}
              slidesToShow={1}
              slidesToScroll={1}
              beforeChange={(_current: number, next: number) => setCurrentSection(next)}
              arrows={true}
              autoplay={true}
              autoplaySpeed={3000}
              customPaging={() => (
                <div className="w-3 h-3 bg-orange-300 rounded-full mt-8"></div>
              )}
              dotsClass="slick-dots !bottom-0"
            >
              {showcaseData.map((section, index) => (
                <div key={index} className="px-4">
                  <div className="flex flex-col md:flex-row items-center gap-8">
                    <div className="w-full md:w-1/2 p-8">
                      <div className="flex justify-center mb-6">{section.icon}</div>
                      <h3 className="text-2xl md:text-3xl font-bold mb-4 text-orange-500 text-center">
                        {section.title}
                      </h3>
                      <p className="text-lg text-orange-700 mb-6 text-center">
                        {section.description}
                      </p>
                      <div className="flex justify-center">
                        <button
                          onClick={() => openModal(section)}
                          className="rounded-full px-6 py-3 border border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white transition-all duration-300"
                        >
                          Ver más
                        </button>
                      </div>
                    </div>
                    <div className="w-full md:w-1/2">
                      <img
                        src={section.image}
                        alt={section.title}
                        className="rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
                      />
                    </div>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </section>
      {/* Sección de Descarga de la App para LIRA */}
      <section className="py-20 bg-gradient-to-r from-orange-400 to-orange-500 text-white relative z-20">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            {/* Texto y botones */}
            <div className="w-full md:w-1/2 text-center md:text-left">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                LIRA: Aprendizaje de Lectura
              </h2>
              <p className="text-lg mb-8 text-orange-100">
                Descarga la app y transforma la lectura en una experiencia interactiva y personalizada para los niños. Monitorea su progreso y disfruta de herramientas innovadoras.
              </p>
              <div className="flex flex-col md:flex-row gap-4 justify-center md:justify-start">
                <a
                  href="#"
                  className="inline-flex items-center justify-center rounded-lg px-6 py-3 bg-black text-white hover:bg-gray-900 transition-all duration-300"
                >
                  <FaGooglePlay className="h-6 w-6 mr-2" />
                  <span>Google Play</span>
                </a>
                <a
                  href="#"
                  className="inline-flex items-center justify-center rounded-lg px-6 py-3 bg-black text-white hover:bg-gray-900 transition-all duration-300"
                >
                  <FaAppStoreIos className="h-6 w-6 mr-2" />
                  <span>App Store</span>
                </a>
              </div>
            </div>

            {/* Imagen del teléfono */}
            <div className="w-full md:w-1/2 flex justify-center">
              <img
                src={lira1}
                alt="LIRA en el teléfono"
                className="w-80"
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

      {/* Modal Mejorado */}
      {isModalOpen && selectedSection && (
        <div className="fixed inset-0 z-50 flex items-center justify-center backdrop-blur-sm">
          <div className="bg-white rounded-lg shadow-2xl max-w-2xl w-full mx-4 overflow-hidden transform transition-all duration-300 ease-in-out">
            {/* Encabezado del modal */}
            <div className="bg-orange-500 p-6 flex justify-between items-center">
              <h3 className="text-2xl font-bold text-white">{selectedSection.title}</h3>
              <button
                onClick={closeModal}
                className="text-white hover:text-orange-200 transition-colors"
              >
                <X className="h-6 w-6" />
              </button>
            </div>

            {/* Cuerpo del modal */}
            <div className="p-8">
              <div className="flex flex-col items-center">
                <div className="mb-6 text-orange-500">{selectedSection.icon}</div>
                <p className="text-lg text-orange-700 mb-6 text-center">
                  {selectedSection.description}
                </p>
                <p className="text-gray-600 mb-6">{selectedSection.details}</p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Footer */}
      <div className="relative z-30">
        <Footer />
      </div>
    </div>
  );
}