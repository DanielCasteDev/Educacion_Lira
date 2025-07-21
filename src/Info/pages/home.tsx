// home.tsx
import { useEffect, useState, useRef } from "react";
import { ArrowDown, Heart, BookOpen, Users, Award } from "lucide-react";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import liraApp from "../../assets/iphone.png";
import liraWeb from "../../assets/lira_web1.png";
import Sphere from "../components/sphere";
import {
  ChartBarIcon,
  RocketLaunchIcon,
  ArrowRightIcon,
  CursorArrowRaysIcon,
  BoltIcon,
  SparklesIcon,
} from "@heroicons/react/24/solid";
import { FaGooglePlay, FaAppStoreIos, FaBrain, FaChartLine, FaLaptopCode } from "react-icons/fa";
import { motion, useAnimation, useInView } from "framer-motion";

// Props

type FadeInSectionProps = {
  children: React.ReactNode;
  delay?: number;
};

const FadeInSection: React.FC<FadeInSectionProps> = ({ children, delay = 0 }) => {
  const controls = useAnimation();
  const ref = useRef<HTMLDivElement | null>(null);
  const inView = useInView(ref, { once: true });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={{
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6, delay } }
      }}
    >
      {children}
    </motion.div>
  );
};

const FloatingBubbles = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {Array.from({ length: 15 }).map((_, index) => {
        const size = Math.random() * 80 + 30;
        const left = Math.random() * 100;
        const animationDuration = Math.random() * 15 + 10;
        const delay = Math.random() * 5;
        const initialY = Math.random() * 100;

        return (
          <div
            key={index}
            className="absolute rounded-full bg-gradient-to-br from-orange-200 to-orange-300 opacity-20"
            style={{
              width: size,
              height: size,
              left: `${left}%`,
              top: `${initialY}%`,
              animation: `float ${animationDuration}s infinite ease-in-out ${delay}s`
            }}
          />
        );
      })}
    </div>
  );
};

type FeatureCardProps = {
  icon: React.ReactNode;
  title: string;
  description: string;
  delay: number;
};

const FeatureCard: React.FC<FeatureCardProps> = ({ icon, title, description, delay }) => (
  <FadeInSection delay={delay}>
    <div className="bg-white p-8 rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 border border-orange-100 group">
      <div className="flex justify-center mb-4 transform group-hover:scale-110 transition-transform duration-300">
        {icon}
      </div>
      <h3 className="text-xl font-bold mb-3 text-orange-500 text-center">{title}</h3>
      <p className="text-gray-600 text-center">{description}</p>
      <div className="w-16 h-1 bg-orange-400 mx-auto mt-4 group-hover:w-full transition-all duration-300"></div>
    </div>
  </FadeInSection>
);

interface StatsCounterProps {
  value: string;
  label: string;
  icon: React.ReactNode;
  className?: string;
  valueClassName?: string;
  labelClassName?: string;
  iconClassName?: string;
}

const StatsCounter: React.FC<StatsCounterProps> = ({ value, label, icon }) => {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement | null>(null);
  const inView = useInView(ref, { once: true });

  useEffect(() => {
    if (inView) {
      let start = 0;
      const end = parseInt(value);
      const duration = 2000;
      const increment = end / (duration / 16);

      const timer = setInterval(() => {
        start += increment;
        if (start > end) {
          setCount(end);
          clearInterval(timer);
        } else {
          setCount(Math.floor(start));
        }
      }, 16);

      return () => clearInterval(timer);
    }
  }, [inView, value]);

  return (
    <div ref={ref} className="flex flex-col items-center p-6">
      <div className="text-orange-500 mb-3">{icon}</div>
      <h3 className="text-4xl font-bold text-orange-600 mb-2">{count.toLocaleString()}+</h3>
      <p className="text-sm text-orange-800 uppercase tracking-wider">{label}</p>
    </div>
  );
};

export default function App() {
  const [scrolled, setScrolled] = useState(false);
  const testimonialsRef = useRef<HTMLDivElement | null>(null);
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const testimonials = [
    {
      name: "María González",
      role: "Madre de familia",
      text: "LIRA ha transformado la forma en que mi hijo aprende a leer. Ahora es él quien me pide tiempo para practicar la lectura.",
      avatar: "https://randomuser.me/api/portraits/women/65.jpg"
    },
    {
      name: "Carlos Rodríguez",
      role: "Profesor de primaria",
      text: "Como educador, valoro enormemente las herramientas analíticas que LIRA ofrece. Me permite identificar exactamente dónde necesitan apoyo mis estudiantes.",
      avatar: "https://randomuser.me/api/portraits/men/32.jpg"
    },
    {
      name: "Ana López",
      role: "Psicopedagoga",
      text: "La adaptabilidad de LIRA a diferentes estilos de aprendizaje la convierte en una herramienta esencial para cualquier entorno educativo moderno.",
      avatar: "https://randomuser.me/api/portraits/women/43.jpg"
    }
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial(prev => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [testimonials.length]);

  useEffect(() => {
    const style = document.createElement('style');
    style.textContent = `
      @keyframes float {
        0%, 100% {
          transform: translateY(0) rotate(0deg);
        }
        50% {
          transform: translateY(-100px) rotate(10deg);
        }
      }

      @keyframes pulse {
        0%, 100% {
          opacity: 0.6;
          transform: scale(1);
        }
        50% {
          opacity: 0.8;
          transform: scale(1.05);
        }
      }
    `;
    document.head.appendChild(style);
    return () => {
      document.head.removeChild(style);
    };
  }, []);

  const scrollToTestimonials = () => {
    testimonialsRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-white text-gray-800 overflow-x-hidden">
      <div className="fixed inset-0 z-0" style={{ background: "linear-gradient(135deg, #FFF7ED 0%, #FFEDD5 50%, #FFF7ED 100%)" }}></div>
      <FloatingBubbles />
      <div className="absolute inset-0 z-10 opacity-70">
        {[50, 70, 40, 60, 80, 90, 30, 100, 55, 65].map((size, index) => (
          <Sphere key={index} size={size} color={`rgba(249, 115, 22, ${0.2 + index * 0.03})`} />
        ))}
      </div>
      <Navbar scrolled={scrolled} />
      
      {/* Burbujas flotantes animadas */}
      <FloatingBubbles />
      
      {/* Esferas rebotando */}
      <div className="absolute inset-0 z-10 opacity-70">
        {[50, 70, 40, 60, 80, 90, 30, 100, 55, 65].map((size, index) => (
          <Sphere
            key={index}
            size={size}
            color={`rgba(249, 115, 22, ${0.2 + index * 0.03})`}
          />
        ))}
      </div>

      {/* Navbar mejorado */}
      <Navbar scrolled={scrolled} />

      {/* Hero Section Mejorada */}
      <section className="min-h-screen flex items-center justify-center relative pt-20 md:pt-0">
        <div className="container mx-auto px-4 z-20 flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Texto animado */}
          <motion.div 
            className="text-center md:text-left md:w-1/2"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-block px-4 py-1 rounded-full bg-orange-100 text-orange-600 font-medium mb-4">
              Reimaginando el aprendizaje
            </div>
            <h1 className="text-5xl md:text-7xl font-extrabold mb-6 bg-gradient-to-r from-orange-500 to-orange-700 bg-clip-text text-transparent">
              LIRA: Revolución en Lectura Interactiva
            </h1>
            <p className="text-xl md:text-2xl max-w-2xl mb-8 text-orange-700 leading-relaxed">
              Una experiencia digital inmersiva que transforma el aprendizaje de lectura en un viaje personalizado para cada niño.
            </p>
            <div className="flex flex-col md:flex-row gap-4 justify-center md:justify-start">
              <button className="rounded-full px-8 py-4 bg-orange-500 text-white hover:bg-orange-600 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1">
                Comenzar ahora
              </button>
              <button className="rounded-full px-8 py-4 border-2 border-orange-500 text-orange-500 hover:bg-orange-50 transition-all duration-300" onClick={scrollToTestimonials}>
                Ver testimonios
              </button>
            </div>
          </motion.div>

          {/* Imagen del teléfono con animación avanzada */}
          <motion.div
            className="md:w-1/2 flex justify-center mt-12 md:mt-0"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <div className="relative">
              <motion.div
                className="absolute -inset-4 rounded-full bg-orange-300 opacity-20 blur-3xl"
                animate={{ 
                  scale: [1, 1.05, 1],
                  opacity: [0.2, 0.3, 0.2]
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
              <motion.img
                src={liraWeb}
                alt="LIRA App Interface"
                className="w-96 md:w-128 relative z-10"
                animate={{ 
                  y: [0, -15, 0] 
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
            </div>
          </motion.div>
        </div>

        {/* Flecha animada más atractiva */}
        <motion.div 
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-20"
          animate={{ 
            y: [0, 10, 0],
            opacity: [0.5, 1, 0.5]
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <ArrowDown className="h-10 w-10 text-orange-500" />
        </motion.div>
      </section>

{/* Sección de Estadísticas */}
<section className="py-16 bg-gradient-to-r from-orange-500 to-orange-600 relative z-20">
  <div className="container mx-auto px-4">
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {/* Item 1 */}
      <div className="text-center bg-white/5 rounded-lg p-6 backdrop-blur-sm border border-white/10">
        <Users className="h-12 w-12 text-orange-100 mx-auto mb-4" />
        <span className="text-white text-5xl font-bold block">50,000</span>
        <span className="text-orange-100 text-lg mt-2 block">Estudiantes Activos</span>
      </div>

      {/* Item 2 */}
      <div className="text-center bg-white/5 rounded-lg p-6 backdrop-blur-sm border border-white/10">
        <BookOpen className="h-12 w-12 text-orange-100 mx-auto mb-4" />
        <span className="text-white text-5xl font-bold block">120</span>
        <span className="text-orange-100 text-lg mt-2 block">Escuelas Asociadas</span>
      </div>

      {/* Item 3 */}
      <div className="text-center bg-white/5 rounded-lg p-6 backdrop-blur-sm border border-white/10">
        <Award className="h-12 w-12 text-orange-100 mx-auto mb-4" />
        <span className="text-white text-5xl font-bold block">85</span>
        <span className="text-orange-100 text-lg mt-2 block">Premios Educativos</span>
      </div>
    </div>
  </div>
</section>

      {/* Características Principales Mejoradas */}
      <section className="py-24 bg-white relative z-20">
        <div className="container mx-auto px-4">
          <FadeInSection>
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-center">
              <span className="bg-gradient-to-r from-orange-500 to-orange-700 bg-clip-text text-transparent">Características</span> Principales
            </h2>
            <p className="text-xl text-center text-gray-600 max-w-3xl mx-auto mb-16">
              Descubre cómo LIRA está transformando el proceso de aprendizaje de lectura con tecnología de vanguardia
            </p>
          </FadeInSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <FeatureCard 
              icon={<SparklesIcon className="h-12 w-12 text-orange-500" />}
              title="Interactividad Inmersiva" 
              description="Actividades dinámicas con tecnología de realidad aumentada que captan la atención y estimulan los sentidos de los niños."
              delay={0.1}
            />
            <FeatureCard 
              icon={<BoltIcon className="h-12 w-12 text-orange-500" />}
              title="Gamificación Avanzada" 
              description="Sistema de recompensas y desafíos adaptativo que mantiene la motivación y el compromiso constante del estudiante."
              delay={0.2}
            />
            <FeatureCard 
              icon={<ChartBarIcon className="h-12 w-12 text-orange-500" />}
              title="Análisis en Tiempo Real" 
              description="Métricas detalladas y visualización de datos que permiten un seguimiento preciso del progreso individual."
              delay={0.3}
            />
            <FeatureCard 
              icon={<FaBrain className="h-12 w-12 text-orange-500" />}
              title="IA Personalizada" 
              description="Algoritmos inteligentes que analizan patrones de aprendizaje y adaptan el contenido a las necesidades específicas del niño."
              delay={0.4}
            />
            <FeatureCard 
              icon={<CursorArrowRaysIcon className="h-12 w-12 text-orange-500" />}
              title="Experiencia Multisensorial" 
              description="Actividades que combinan estímulos visuales, auditivos y táctiles para un aprendizaje holístico y efectivo."
              delay={0.5}
            />
            <FeatureCard 
              icon={<FaLaptopCode className="h-12 w-12 text-orange-500" />}
              title="Tecnología Adaptativa" 
              description="Plataforma responsive que funciona perfectamente en cualquier dispositivo, permitiendo aprender en cualquier momento y lugar."
              delay={0.6}
            />
          </div>
        </div>
      </section>

      {/* Sección de Cómo Funciona */}
      <section className="py-24 bg-orange-50 relative z-20">
        <div className="container mx-auto px-4">
          <FadeInSection>
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-center">
              <span className="bg-gradient-to-r from-orange-500 to-orange-700 bg-clip-text text-transparent">Cómo</span> Funciona
            </h2>
            <p className="text-xl text-center text-gray-600 max-w-3xl mx-auto mb-16">
              Un proceso simple para una experiencia de aprendizaje extraordinaria
            </p>
          </FadeInSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <FadeInSection delay={0.1}>
              <div className="bg-white p-8 rounded-xl shadow-lg relative">
                <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 bg-orange-500 text-white w-12 h-12 rounded-full flex items-center justify-center text-2xl font-bold">1</div>
                <h3 className="text-xl font-bold mb-4 text-orange-500 text-center mt-4">Evaluación Inicial</h3>
                <p className="text-gray-600 text-center">Identificamos el nivel y estilo de aprendizaje único de cada niño a través de ejercicios interactivos.</p>
              </div>
            </FadeInSection>

            <FadeInSection delay={0.2}>
              <div className="bg-white p-8 rounded-xl shadow-lg relative">
                <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 bg-orange-500 text-white w-12 h-12 rounded-full flex items-center justify-center text-2xl font-bold">2</div>
                <h3 className="text-xl font-bold mb-4 text-orange-500 text-center mt-4">Programa Personalizado</h3>
                <p className="text-gray-600 text-center">Nuestra IA crea un itinerario de aprendizaje adaptado específicamente a las necesidades del estudiante.</p>
              </div>
            </FadeInSection>

            <FadeInSection delay={0.3}>
              <div className="bg-white p-8 rounded-xl shadow-lg relative">
                <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 bg-orange-500 text-white w-12 h-12 rounded-full flex items-center justify-center text-2xl font-bold">3</div>
                <h3 className="text-xl font-bold mb-4 text-orange-500 text-center mt-4">Progreso Continuo</h3>
                <p className="text-gray-600 text-center">Monitoreo constante del avance con ajustes en tiempo real para optimizar los resultados del aprendizaje.</p>
              </div>
            </FadeInSection>
          </div>
        </div>
      </section>

      {/* Nueva sección de Testimonios */}
      <section ref={testimonialsRef} className="py-24 bg-white relative z-20">
        <div className="container mx-auto px-4">
          <FadeInSection>
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-center">
              <span className="bg-gradient-to-r from-orange-500 to-orange-700 bg-clip-text text-transparent">Testimonios</span> de Usuarios
            </h2>
            <p className="text-xl text-center text-gray-600 max-w-3xl mx-auto mb-16">
              Lo que dicen las familias y educadores que ya están usando LIRA
            </p>
          </FadeInSection>

          <div className="max-w-4xl mx-auto relative">
            <motion.div 
              key={currentTestimonial}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.5 }}
              className="bg-orange-50 p-8 rounded-2xl shadow-lg"
            >
              <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
                <img 
                  src={testimonials[currentTestimonial].avatar} 
                  alt={testimonials[currentTestimonial].name}
                  className="w-24 h-24 rounded-full object-cover border-4 border-orange-300"
                />
                <div>
                  <div className="flex mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Heart key={i} className="w-5 h-5 fill-orange-500 text-orange-500" />
                    ))}
                  </div>
                  <p className="text-lg italic mb-6 text-gray-700">"{testimonials[currentTestimonial].text}"</p>
                  <div>
                    <h4 className="text-xl font-bold text-orange-600">{testimonials[currentTestimonial].name}</h4>
                    <p className="text-gray-600">{testimonials[currentTestimonial].role}</p>
                  </div>
                </div>
              </div>
            </motion.div>

            <div className="flex justify-center mt-8 gap-2">
              {testimonials.map((_, index) => (
                <button 
                  key={index} 
                  className={`w-3 h-3 rounded-full ${index === currentTestimonial ? 'bg-orange-500' : 'bg-orange-200'}`}
                  onClick={() => setCurrentTestimonial(index)}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Sección de Descarga de la App Mejorada */}
      <section className="py-20 bg-gradient-to-br from-orange-500 to-orange-600 text-white relative z-20 overflow-hidden">
        {/* Elementos decorativos */}
        <div className="absolute top-0 left-0 right-0 h-8 bg-white" style={{ clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 0)" }}></div>
        
        <div className="container mx-auto px-4 relative">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            {/* Texto y botones */}
            <motion.div 
              className="w-full md:w-1/2 text-center md:text-left"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-5xl font-extrabold mb-6">
                Lleva LIRA Contigo
              </h2>
              <p className="text-lg mb-8 text-orange-100 max-w-xl">
                Descarga nuestra aplicación y convierte cualquier momento en una oportunidad de aprendizaje. Accede a todas las herramientas y recursos, incluso sin conexión.
              </p>
              <div className="flex flex-col md:flex-row gap-4 justify-center md:justify-start">
                <a
                  href="#"
                  className="inline-flex items-center justify-center rounded-xl px-6 py-4 bg-black text-white hover:bg-gray-900 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg"
                >
                  <FaGooglePlay className="h-7 w-7 mr-3" />
                  <div className="text-left">
                    <div className="text-xs">DISPONIBLE EN</div>
                    <div className="text-lg font-bold">Google Play</div>
                  </div>
                </a>
                <a
                  href="#"
                  className="inline-flex items-center justify-center rounded-xl px-6 py-4 bg-black text-white hover:bg-gray-900 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg"
                >
                  <FaAppStoreIos className="h-7 w-7 mr-3" />
                  <div className="text-left">
                    <div className="text-xs">DESCARGA EN</div>
                    <div className="text-lg font-bold">App Store</div>
                  </div>
                </a>
              </div>
              <div className="mt-8 flex items-center justify-center md:justify-start text-orange-100">
                <span className="mr-2">Valorada con 4.9/5</span>
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Heart key={i} className="w-4 h-4 fill-white text-white" />
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Imagen del teléfono con animación */}
            <motion.div 
              className="w-full md:w-1/2 flex justify-center"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="relative">
                <motion.div
                  className="absolute inset-0 bg-white opacity-10 rounded-full blur-3xl"
                  animate={{ 
                    scale: [1, 1.2, 1],
                    opacity: [0.1, 0.2, 0.1]
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />
                <motion.img
                  src={liraApp}
                  alt="LIRA App en dispositivo móvil"
                  className="w-64 md:w-80 relative z-10 drop-shadow-2xl"
                  animate={{ rotate: [0, 3, 0, -3, 0] }}
                  transition={{
                    duration: 6,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />
              </div>
            </motion.div>
          </div>
        </div>
        
        {/* Elementos decorativos inferiores */}
        <div className="absolute bottom-0 left-0 right-0 h-8 bg-white" style={{ clipPath: "polygon(0 100%, 100% 100%, 100% 0, 0 100%)" }}></div>
      </section>

      {/* FAQ Section Mejorada */}
      <section className="py-24 bg-white relative z-20">
        <div className="container mx-auto px-4">
          <FadeInSection>
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-center">
              <span className="bg-gradient-to-r from-orange-500 to-orange-700 bg-clip-text text-transparent">Preguntas</span> Frecuentes
            </h2>
            <p className="text-xl text-center text-gray-600 max-w-3xl mx-auto mb-16">
              Todo lo que necesitas saber sobre LIRA y cómo puede ayudar en el proceso de aprendizaje
            </p>
          </FadeInSection>

          <div className="max-w-3xl mx-auto">
            {[
              {
                question: "¿Qué es LIRA exactamente?",
                answer: "LIRA es una plataforma educativa digital que utiliza inteligencia artificial, gamificación y análisis de datos para transformar la lectura en una experiencia interactiva y personalizada para niños. Combina técnicas pedagógicas avanzadas con tecnología de punta para adaptarse al ritmo y estilo de aprendizaje de cada estudiante."
              },
              {
                question: "¿Cómo personaliza LIRA el contenido para cada niño?",
                answer: "Utilizamos algoritmos de inteligencia artificial que analizan el comportamiento, las respuestas y el progreso de cada niño para crear un perfil de aprendizaje único. Este perfil permite a LIRA ajustar automáticamente la dificultad, el tipo de actividades y el ritmo de presentación del contenido para optimizar la experiencia de aprendizaje."
              },
              {
                question: "¿Qué tipo de reportes reciben los padres y educadores?",
                answer: "Los padres y educadores tienen acceso a un panel de control intuitivo que muestra datos en tiempo real sobre el progreso del niño, incluyendo métricas como tiempo de lectura, precisión, comprensión, palabras dominadas y áreas que necesitan refuerzo. Los informes incluyen visualizaciones claras y recomendaciones prácticas."
              },
              {
                question: "¿Es segura la información de mi hijo en LIRA?",
                answer: "Absolutamente. La seguridad y privacidad son nuestras principales prioridades. LIRA cumple con todas las regulaciones de protección de datos infantiles, utiliza encriptación de extremo a extremo y no comparte información personal con terceros. Además, los padres tienen control total sobre la configuración de privacidad de las cuentas de sus hijos."
              },
              {
                question: "¿Funciona LIRA sin conexión a internet?",
                answer: "Sí, nuestra aplicación móvil permite descargar lecciones y actividades para usarlas sin conexión. Una vez que el dispositivo vuelve a conectarse, los datos de progreso se sincronizan automáticamente con la plataforma para mantener actualizado el perfil de aprendizaje del niño."
              },
              {
                question: "¿Con qué frecuencia se actualiza el contenido de LIRA?",
                answer: "Nuestro equipo de pedagogos y desarrolladores actualiza el contenanswer: Nuestro equipo de pedagogos y desarrolladores actualiza el contenido de LIRA semanalmente, añadiendo nuevas actividades, libros interactivos y desafíos. Además, nuestro sistema de IA aprende continuamente de las interacciones de los usuarios para refinar y mejorar los contenidos existentes de manera automática."
              },
              {
                question: "¿Para qué edades es adecuado LIRA?",
                answer: "LIRA está diseñado principalmente para niños de 4 a 12 años, con diferentes módulos adaptados a cada etapa del desarrollo lector. Contamos con programas para prelectores, lectores principiantes, y lectores en desarrollo, cada uno con sus propios objetivos pedagógicos y actividades específicas."
              }
            ].map((faq, index) => (
              <motion.div 
                key={index} 
                className="mb-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="flex items-center justify-between bg-orange-50 p-6 rounded-xl cursor-pointer hover:bg-orange-100 transition-all duration-300" 
                  onClick={() => {
                    const answer = document.getElementById(`answer-${index}`);
                    if (answer) {
                      answer.classList.toggle('hidden');
                    }
                  }}
                >
                  <h3 className="text-lg font-bold text-orange-600">{faq.question}</h3>
                  <motion.div
                    whileHover={{ rotate: 180 }}
                    transition={{ duration: 0.3 }}
                  >
                    <ArrowDown className="h-5 w-5 text-orange-500" />
                  </motion.div>
                </div>
                <div id={`answer-${index}`} className="hidden p-6 text-gray-700 border-l-2 border-orange-300 bg-orange-50 bg-opacity-50 mt-2 rounded-r-xl">
                  <p>{faq.answer}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Nueva sección: Planes y Precios */}
      <section className="py-24 bg-orange-50 relative z-20">
        <div className="container mx-auto px-4">
          <FadeInSection>
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-center">
              <span className="bg-gradient-to-r from-orange-500 to-orange-700 bg-clip-text text-transparent">Planes</span> y Precios
            </h2>
            <p className="text-xl text-center text-gray-600 max-w-3xl mx-auto mb-16">
              Soluciones flexibles para familias, educadores e instituciones
            </p>
          </FadeInSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {/* Plan Básico */}
            <FadeInSection delay={0.1}>
              <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-orange-100 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-24 h-24 bg-orange-200 rounded-full -mt-10 -mr-10"></div>
                <h3 className="text-2xl font-bold mb-4 text-orange-600 relative z-10">Plan Familiar</h3>
                <div className="flex items-end mb-6 relative z-10">
                  <span className="text-4xl font-bold text-orange-500">$9.99</span>
                  <span className="text-gray-600 ml-2 mb-1">/mes</span>
                </div>
                <ul className="mb-8 space-y-3 relative z-10">
                  <li className="flex items-center">
                    <svg className="h-5 w-5 text-orange-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    Hasta 3 perfiles de niños
                  </li>
                  <li className="flex items-center">
                    <svg className="h-5 w-5 text-orange-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    Reportes semanales
                  </li>
                  <li className="flex items-center">
                    <svg className="h-5 w-5 text-orange-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    Acceso a biblioteca básica
                  </li>
                  <li className="flex items-center">
                    <svg className="h-5 w-5 text-orange-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    Soporte por email
                  </li>
                </ul>
                <button className="w-full py-3 bg-orange-100 text-orange-600 rounded-xl font-medium hover:bg-orange-200 transition-all duration-300 relative z-10">
                  Comenzar prueba gratis
                </button>
              </div>
            </FadeInSection>

            {/* Plan Premium */}
            <FadeInSection delay={0.2}>
              <div className="bg-gradient-to-br from-orange-500 to-orange-600 p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 text-white transform hover:-translate-y-2 relative overflow-hidden">
                <div className="absolute -top-4 -right-4 bg-orange-400 text-white px-6 py-1 rotate-45 transform translate-x-2">Popular</div>
                <div className="absolute top-0 right-0 w-32 h-32 bg-orange-400 rounded-full opacity-30 -mt-10 -mr-10"></div>
                <h3 className="text-2xl font-bold mb-4 relative z-10">Plan Premium</h3>
                <div className="flex items-end mb-6 relative z-10">
                  <span className="text-4xl font-bold">$19.99</span>
                  <span className="ml-2 mb-1">/mes</span>
                </div>
                <ul className="mb-8 space-y-3 relative z-10">
                  <li className="flex items-center">
                    <svg className="h-5 w-5 text-white mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    Perfiles ilimitados
                  </li>
                  <li className="flex items-center">
                    <svg className="h-5 w-5 text-white mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    Reportes diarios detallados
                  </li>
                  <li className="flex items-center">
                    <svg className="h-5 w-5 text-white mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    Biblioteca completa + exclusivos
                  </li>
                  <li className="flex items-center">
                    <svg className="h-5 w-5 text-white mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    Soporte prioritario 24/7
                  </li>
                  <li className="flex items-center">
                    <svg className="h-5 w-5 text-white mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    Sesiones de tutoría mensual
                  </li>
                </ul>
                <button className="w-full py-3 bg-white text-orange-600 rounded-xl font-medium hover:bg-orange-100 transition-all duration-300 relative z-10">
                  Suscribirse ahora
                </button>
              </div>
            </FadeInSection>

            {/* Plan Educadores */}
            <FadeInSection delay={0.3}>
              <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-orange-100 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-24 h-24 bg-orange-200 rounded-full -mt-10 -mr-10"></div>
                <h3 className="text-2xl font-bold mb-4 text-orange-600 relative z-10">Plan Educadores</h3>
                <div className="flex items-end mb-6 relative z-10">
                  <span className="text-4xl font-bold text-orange-500">$29.99</span>
                  <span className="text-gray-600 ml-2 mb-1">/mes</span>
                </div>
                <ul className="mb-8 space-y-3 relative z-10">
                  <li className="flex items-center">
                    <svg className="h-5 w-5 text-orange-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    Hasta 30 estudiantes
                  </li>
                  <li className="flex items-center">
                    <svg className="h-5 w-5 text-orange-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    Dashboard para docentes
                  </li>
                  <li className="flex items-center">
                    <svg className="h-5 w-5 text-orange-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    Herramientas de asignación
                  </li>
                  <li className="flex items-center">
                    <svg className="h-5 w-5 text-orange-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    Analytics avanzados
                  </li>
                  <li className="flex items-center">
                    <svg className="h-5 w-5 text-orange-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    Capacitación para docentes
                  </li>
                </ul>
                <button className="w-full py-3 bg-orange-100 text-orange-600 rounded-xl font-medium hover:bg-orange-200 transition-all duration-300 relative z-10">
                  Solicitar demo
                </button>
              </div>
            </FadeInSection>
          </div>

          <div className="text-center mt-12">
            <p className="text-gray-600">
              ¿Buscas una solución para toda tu institución educativa?
            </p>
            <a href="#" className="inline-block mt-3 text-orange-500 font-medium hover:text-orange-600 transition-colors">
              Contáctanos para planes institucionales personalizados →
            </a>
          </div>
        </div>
      </section>

{/* Nueva sección: Blog/Recursos */}
<section className="py-24 bg-white relative z-20">
  <div className="container mx-auto px-4">
    <FadeInSection>
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold mb-4">
          <span className="bg-gradient-to-r from-orange-500 to-orange-700 bg-clip-text text-transparent">Recursos Educativos</span> y Artículos
        </h2>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Descubre contenido valioso para potenciar la experiencia de aprendizaje
        </p>
      </div>
    </FadeInSection>

    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {[
        {
          image: "https://images.unsplash.com/photo-1588072432836-e10032774350?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400&q=80",
          title: "Estrategias para motivar la lectura",
          excerpt: "Técnicas probadas para despertar el interés por la lectura en todas las edades.",
          category: "Educación",
          date: "12 Abr 2025"
        },
        {
          image: "https://images.unsplash.com/photo-1546410531-bb4caa6b424d?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400&q=80",
          title: "IA en la educación: El futuro del aprendizaje",
          excerpt: "Cómo la inteligencia artificial está transformando la educación moderna.",
          category: "Tecnología",
          date: "5 Abr 2025"
        },
        {
          image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400&q=80",
          title: "Caso de éxito: Colegio Santa María",
          excerpt: "Implementación exitosa mejorando resultados académicos.",
          category: "Éxitos",
          date: "28 Mar 2025"
        }
      ].map((post, index) => (
        <FadeInSection key={index} delay={0.1 * index}>
          <div className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 group h-full flex flex-col">
            <div className="relative overflow-hidden h-48">
              <img 
                src={post.image} 
                alt={post.title}
                className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
            </div>
            <div className="p-6 flex flex-col flex-grow">
              <div className="flex justify-between items-center mb-3">
                <span className="px-3 py-1 bg-orange-100 text-orange-600 rounded-full text-xs font-medium">{post.category}</span>
                <span className="text-gray-500 text-sm">{post.date}</span>
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-800 group-hover:text-orange-500 transition-colors">{post.title}</h3>
              <p className="text-gray-600">{post.excerpt}</p>
            </div>
          </div>
        </FadeInSection>
      ))}
    </div>

    <FadeInSection>
      <div className="text-center mt-12">
        <a href="#" className="inline-flex items-center justify-center rounded-full px-8 py-3 bg-gradient-to-r from-orange-500 to-orange-600 text-white hover:from-orange-600 hover:to-orange-700 transition-all duration-300 shadow-md hover:shadow-lg">
          Explorar todos los recursos
          <ArrowRightIcon className="h-5 w-5 ml-2" />
        </a>
      </div>
    </FadeInSection>
  </div>
</section>

    {/* Contact Section Mejorada */}
<section className="py-24 bg-gradient-to-r from-orange-500 to-orange-600 text-white relative z-20">
  <div className="container mx-auto px-4">
    <FadeInSection>
      <div className="max-w-4xl mx-auto">
        <div className="flex flex-col md:flex-row items-center gap-12">
          {/* Columna izquierda - Imagen */}
          <div className="md:w-1/2">
            <div className="relative rounded-xl overflow-hidden shadow-2xl transform hover:scale-[1.02] transition-transform duration-300">
              <img 
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=600&q=80" 
                alt="Niños aprendiendo con tecnología"
                className="w-full h-auto object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-orange-600/30 to-transparent"></div>
            </div>
          </div>
          
          {/* Columna derecha - Contenido */}
          <div className="md:w-1/2 text-center md:text-left">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Transforma la Educación <span className="block">con LIRA</span>
            </h2>
            <p className="text-xl mb-8 text-orange-100">
              Únete a miles de educadores que están revolucionando cómo los niños aprenden a leer.
            </p>
            
            <div className="grid grid-cols-1 gap-6 mb-8">
              <div className="flex items-start bg-white/10 backdrop-blur-sm p-5 rounded-xl">
                <div className="bg-white/20 p-3 rounded-full mr-4">
                  <FaChartLine className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-1">90% de mejora</h3>
                  <p className="text-orange-100">en comprensión lectora</p>
                </div>
              </div>
              
              <div className="flex items-start bg-white/10 backdrop-blur-sm p-5 rounded-xl">
                <div className="bg-white/20 p-3 rounded-full mr-4">
                  <CursorArrowRaysIcon className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-1">3X más participación</h3>
                  <p className="text-orange-100">estudiantil</p>
                </div>
              </div>
              
              <div className="flex items-start bg-white/10 backdrop-blur-sm p-5 rounded-xl">
                <div className="bg-white/20 p-3 rounded-full mr-4">
                  <RocketLaunchIcon className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-1">14 días gratis</h3>
                  <p className="text-orange-100">de prueba sin compromiso</p>
                </div>
              </div>
            </div>
            
            <div className="text-center md:text-left">
              <a
                href="/contacto"
                className="inline-flex items-center justify-center rounded-full px-8 py-3 bg-white text-orange-600 font-bold hover:bg-orange-100 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg shadow-md"
              >
                Comenzar Ahora
                <ArrowRightIcon className="h-5 w-5 ml-2" />
              </a>
              <p className="mt-4 text-sm text-orange-100">
                Sin compromisos • Cancela cuando quieras
              </p>
            </div>
          </div>
        </div>
      </div>
    </FadeInSection>
  </div>
</section>

      {/* Footer Mejorado */}
      <div className="relative z-30">
        <Footer />
      </div>
    </div>
  );
}