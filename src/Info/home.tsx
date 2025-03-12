import { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { ArrowDown } from "lucide-react";
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import cr7Image from "../assets/cr7.webp";
import Sphere from "./components/sphere";
import {
  BookOpenIcon,
  DevicePhoneMobileIcon,
  ChartBarIcon,
  UserIcon,
  ArrowPathIcon,
  RocketLaunchIcon,
  ArrowRightIcon,
} from "@heroicons/react/24/solid";

export default function App() {
  const [scrolled, setScrolled] = useState(false);
  const [, setCurrentSection] = useState(0);

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
      image: cr7Image,
    },
    {
      title: "Personalización del Contenido",
      description:
        "Adaptamos las actividades a los estilos de aprendizaje de cada niño.",
      image: cr7Image,
    },
    {
      title: "Seguimiento del Progreso",
      description:
        "Medimos el avance de los estudiantes con herramientas innovadoras.",
      image: cr7Image,
    },
  ];

  return (
    <div className="min-h-screen bg-white text-black">
      {/* Fondo degradado */}
      <div
        className="absolute inset-0 z-0"
        style={{
          background: "linear-gradient(to right, #FEF3C7, #FFEDD5)",
        }}
      ></div>

      {/* Esferas rebotando */}
      <div className="absolute inset-0 z-10">
        <Sphere size={50} color="rgba(255, 165, 0, 0.6)" />
        <Sphere size={70} color="rgba(255, 140, 0, 0.6)" />
        <Sphere size={40} color="rgba(255, 99, 71, 0.6)" />
        <Sphere size={60} color="rgba(255, 215, 0, 0.6)" />
        <Sphere size={80} color="rgba(255, 165, 0, 0.6)" />
        <Sphere size={90} color="rgba(255, 140, 0, 0.6)" />
        <Sphere size={30} color="rgba(255, 99, 71, 0.6)" />
        <Sphere size={100} color="rgba(255, 215, 0, 0.6)" />
        <Sphere size={55} color="rgba(255, 165, 0, 0.6)" />
        <Sphere size={65} color="rgba(255, 140, 0, 0.6)" />
      </div>

      {/* Navbar */}
      <Navbar scrolled={scrolled} />

      {/* Hero Section */}
      <section className="h-screen flex items-center justify-center relative">
        <div className="container mx-auto px-4 z-20">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-center text-orange-600">
            LIRA: Aprendizaje de Lectura
          </h1>
          <p className="text-xl md:text-2xl text-center max-w-2xl mx-auto mb-12 text-orange-800">
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
          <h2 className="text-3xl md:text-4xl font-bold mb-16 text-center text-orange-600">
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
                <h3 className="text-xl font-semibold mb-2 text-orange-600">{item.title}</h3>
                <p className="text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Showcase Section */}
      <section className="py-20 relative z-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-16 text-center text-orange-600">
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
      <section className="py-20 bg-gradient-to-r from-orange-500 to-orange-600 text-white relative z-20">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              ¿Listo para Transformar la Educación?
            </h2>
            <p className="text-lg mb-8 text-orange-100">
              Contáctanos hoy para llevar el aprendizaje de la lectura al siguiente nivel.
            </p>
            <a
              href="/contacto"
              className="inline-flex items-center justify-center rounded-full px-8 py-6 bg-white text-orange-600 hover:bg-orange-50 hover:text-orange-700 transition-all duration-300"
            >
              <span>Contactar Ahora</span>
              <ArrowRightIcon className="h-5 w-5 ml-2" />
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <div className="relative z-30"> {/* Asegura que el Footer esté por encima de otros elementos */}
        <Footer />
      </div>
    </div>
  );
}