import { useState, useEffect, useRef } from "react";
import { motion, useAnimation, useInView } from "framer-motion";
import { 
  EnvelopeIcon, 
  PhoneIcon, 
  GlobeAltIcon,
  MapPinIcon,
  ClockIcon,
  ChatBubbleLeftRightIcon,
  UserGroupIcon,
  StarIcon,
  ArrowRightIcon
} from "@heroicons/react/24/solid";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import Sphere from "../components/sphere";

// Props para componentes
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
      {Array.from({ length: 12 }).map((_, index) => {
        const size = Math.random() * 60 + 20;
        const left = Math.random() * 100;
        const animationDuration = Math.random() * 12 + 8;
        const delay = Math.random() * 3;
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

export default function ContactPage() {
  const [scrolled, setScrolled] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    message: '',
    interest: 'familia'
  });

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const style = document.createElement('style');
    style.textContent = `
      @keyframes float {
        0%, 100% {
          transform: translateY(0) rotate(0deg);
        }
        50% {
          transform: translateY(-80px) rotate(8deg);
        }
      }
    `;
    document.head.appendChild(style);
    return () => {
      document.head.removeChild(style);
    };
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Formulario enviado:', formData);
    // Aquí iría la lógica para enviar el formulario
  };

  return (
    <div className="min-h-screen bg-white text-black overflow-x-hidden">
      {/* Fondo con gradiente */}
      <div className="fixed inset-0 z-0" style={{ background: "linear-gradient(135deg, #FFF7ED 0%, #FFEDD5 50%, #FFF7ED 100%)" }}></div>
      
      {/* Burbujas flotantes */}
      <FloatingBubbles />
      
      {/* Esferas animadas */}
      <div className="absolute inset-0 z-10 opacity-60">
        {[40, 60, 35, 50, 70, 80, 25, 90, 45, 55].map((size, index) => (
          <Sphere
            key={index}
            size={size}
            color={`rgba(249, 115, 22, ${0.15 + index * 0.02})`}
          />
        ))}
      </div>

      {/* Navbar */}
      <Navbar scrolled={scrolled} />

      {/* Hero Section Mejorada */}
      <section className="min-h-screen flex items-center justify-center relative pt-20">
        <div className="container mx-auto px-4 z-20">
          <div className="max-w-6xl mx-auto">
            <div className="text-center">
              <motion.div
                className="inline-block px-4 py-2 rounded-full bg-orange-100 text-orange-600 font-medium mb-6"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6 }}
              >
                💬 Estamos aquí para ti
              </motion.div>
              
              <motion.h1
                className="text-5xl md:text-7xl font-extrabold mb-8 bg-gradient-to-r from-orange-500 to-orange-700 bg-clip-text text-transparent"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                Contáctanos
              </motion.h1>
              
              <motion.p
                className="text-xl md:text-2xl text-orange-800 max-w-3xl mx-auto mb-12 leading-relaxed"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                Queremos conocerte y ayudarte. Nuestro equipo de expertos está listo para 
                resolver tus dudas y acompañarte en el viaje hacia una educación transformadora.
              </motion.p>

              {/* Stats rápidas */}
              <motion.div 
                className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                <div className="bg-white/80 backdrop-blur-sm p-6 rounded-2xl shadow-lg border border-orange-100">
                  <div className="text-3xl font-bold text-orange-600 mb-2">24h</div>
                  <div className="text-gray-700">Tiempo de respuesta</div>
                </div>
                <div className="bg-white/80 backdrop-blur-sm p-6 rounded-2xl shadow-lg border border-orange-100">
                  <div className="text-3xl font-bold text-orange-600 mb-2">98%</div>
                  <div className="text-gray-700">Satisfacción cliente</div>
                </div>
                <div className="bg-white/80 backdrop-blur-sm p-6 rounded-2xl shadow-lg border border-orange-100">
                  <div className="text-3xl font-bold text-orange-600 mb-2">+500</div>
                  <div className="text-gray-700">Consultas resueltas</div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Información de Contacto Mejorada */}
      <section className="py-24 bg-white relative z-20">
        <div className="container mx-auto px-4">
          <FadeInSection>
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-4">
                <span className="bg-gradient-to-r from-orange-500 to-orange-700 bg-clip-text text-transparent">Múltiples</span> Formas de Contacto
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Elige la manera que más te convenga para conectar con nuestro equipo
              </p>
            </div>
          </FadeInSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Email */}
            <motion.div
              className="group bg-gradient-to-br from-orange-50 to-orange-100 p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-orange-200"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -8 }}
            >
              <div className="flex justify-center mb-6">
                <div className="bg-orange-500 p-4 rounded-full group-hover:bg-orange-600 transition-colors">
                  <EnvelopeIcon className="h-8 w-8 text-white" />
                </div>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-center text-orange-700">Correo Electrónico</h3>
              <p className="text-orange-600 text-center font-medium mb-4">info@liraeducacion.com</p>
              <p className="text-sm text-gray-600 text-center">Respuesta en menos de 24 horas</p>
            </motion.div>

            {/* Teléfono */}
            <motion.div
              className="group bg-gradient-to-br from-orange-50 to-orange-100 p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-orange-200"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              whileHover={{ y: -8 }}
            >
              <div className="flex justify-center mb-6">
                <div className="bg-orange-500 p-4 rounded-full group-hover:bg-orange-600 transition-colors">
                  <PhoneIcon className="h-8 w-8 text-white" />
                </div>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-center text-orange-700">Teléfono</h3>
              <p className="text-orange-600 text-center font-medium mb-4">+52 33 1234 5678</p>
              <p className="text-sm text-gray-600 text-center">Lunes a Viernes 9:00 - 18:00</p>
            </motion.div>

            {/* Chat en Vivo */}
            <motion.div
              className="group bg-gradient-to-br from-orange-50 to-orange-100 p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-orange-200"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              whileHover={{ y: -8 }}
            >
              <div className="flex justify-center mb-6">
                <div className="bg-orange-500 p-4 rounded-full group-hover:bg-orange-600 transition-colors">
                  <ChatBubbleLeftRightIcon className="h-8 w-8 text-white" />
                </div>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-center text-orange-700">Chat en Vivo</h3>
              <p className="text-orange-600 text-center font-medium mb-4">Disponible ahora</p>
              <p className="text-sm text-gray-600 text-center">Respuesta inmediata</p>
            </motion.div>

            {/* Redes Sociales */}
            <motion.div
              className="group bg-gradient-to-br from-orange-50 to-orange-100 p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-orange-200"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              whileHover={{ y: -8 }}
            >
              <div className="flex justify-center mb-6">
                <div className="bg-orange-500 p-4 rounded-full group-hover:bg-orange-600 transition-colors">
                  <GlobeAltIcon className="h-8 w-8 text-white" />
                </div>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-center text-orange-700">Redes Sociales</h3>
              <div className="flex justify-center space-x-4 mb-4">
                <a href="#" className="text-orange-600 hover:text-orange-700 font-medium transition-colors">
                  Facebook
                </a>
                <a href="#" className="text-orange-600 hover:text-orange-700 font-medium transition-colors">
                  Twitter
                </a>
              </div>
              <p className="text-sm text-gray-600 text-center">Síguenos para novedades</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Horarios y Ubicación */}
      <section className="py-24 bg-orange-50 relative z-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Horarios */}
            <FadeInSection delay={0.1}>
              <div className="bg-white p-8 rounded-2xl shadow-lg">
                <div className="flex items-center mb-6">
                  <div className="bg-orange-100 p-3 rounded-full mr-4">
                    <ClockIcon className="h-8 w-8 text-orange-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-orange-700">Horarios de Atención</h3>
                </div>
                
                <div className="space-y-4">
                  <div className="flex justify-between items-center py-3 border-b border-orange-100">
                    <span className="font-medium text-gray-700">Lunes - Viernes</span>
                    <span className="text-orange-600 font-semibold">9:00 AM - 6:00 PM</span>
                  </div>
                  <div className="flex justify-between items-center py-3 border-b border-orange-100">
                    <span className="font-medium text-gray-700">Sábados</span>
                    <span className="text-orange-600 font-semibold">10:00 AM - 2:00 PM</span>
                  </div>
                  <div className="flex justify-between items-center py-3 border-b border-orange-100">
                    <span className="font-medium text-gray-700">Domingos</span>
                    <span className="text-gray-500">Cerrado</span>
                  </div>
                  <div className="flex justify-between items-center py-3">
                    <span className="font-medium text-gray-700">Soporte Online</span>
                    <span className="text-green-600 font-semibold">24/7</span>
                  </div>
                </div>

                <div className="mt-8 p-4 bg-orange-50 rounded-lg">
                  <p className="text-sm text-orange-700">
                    💡 <strong>Tip:</strong> Para consultas urgentes fuera de horario, 
                    utiliza nuestro chat en línea disponible las 24 horas.
                  </p>
                </div>
              </div>
            </FadeInSection>

            {/* Información de Oficina */}
            <FadeInSection delay={0.2}>
              <div className="bg-white p-8 rounded-2xl shadow-lg">
                <div className="flex items-center mb-6">
                  <div className="bg-orange-100 p-3 rounded-full mr-4">
                    <MapPinIcon className="h-8 w-8 text-orange-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-orange-700">Nuestra Oficina</h3>
                </div>
                
                <div className="space-y-6">
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">Dirección</h4>
                    <p className="text-gray-600">
                      Universidad Tecnológica de la Zona<br />
                      Metropolitana de Guadalajara<br />
                      Guadalajara, Jalisco, México
                    </p>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">Transporte Público</h4>
                    <p className="text-gray-600 text-sm">
                      🚌 Línea 2 del Tren Ligero<br />
                      🚍 Rutas de autobús: 45, 67, 123
                    </p>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">Estacionamiento</h4>
                    <p className="text-gray-600 text-sm">
                      🚗 Estacionamiento gratuito disponible<br />
                      🏢 Entrada por el edificio principal
                    </p>
                  </div>
                </div>

                <div className="mt-6">
                  <button className="w-full bg-orange-500 text-white py-3 rounded-lg hover:bg-orange-600 transition-colors font-medium">
                    Ver en Google Maps
                  </button>
                </div>
              </div>
            </FadeInSection>
          </div>
        </div>
      </section>

      {/* Mapa Mejorado */}
      <section className="py-24 bg-white relative z-20">
        <div className="container mx-auto px-4">
          <FadeInSection>
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-4">
                <span className="bg-gradient-to-r from-orange-500 to-orange-700 bg-clip-text text-transparent">¿Dónde</span> Estamos?
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Nos encontramos estratégicamente ubicados en el corazón educativo de Guadalajara
              </p>
            </div>
          </FadeInSection>

          <div className="max-w-5xl mx-auto">
            <div className="bg-gradient-to-r from-orange-500 to-orange-600 p-6 rounded-t-2xl text-white">
              <div className="flex items-center">
                <MapPinIcon className="h-6 w-6 mr-3" />
                <div>
                  <h3 className="text-lg font-semibold">LIRA - Oficinas Principales</h3>
                  <p className="opacity-90">Universidad Tecnológica de la Zona Metropolitana de Guadalajara</p>
                </div>
              </div>
            </div>
            
            <div className="rounded-b-2xl overflow-hidden shadow-2xl border-4 border-orange-100">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3737.563919393111!2d-103.53575682475815!3d20.483096581033163!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x842f55f2173b24d1%3A0xb3fc2b0647d8a722!2sUniversidad%20Tecnol%C3%B3gica%20de%20la%20Zona%20Metropolitana%20de%20Guadalajara!5e0!3m2!1ses-419!2smx!4v1741799978369!5m2!1ses-419!2smx"
                width="100%"
                height="500"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="transition-all duration-300 hover:brightness-105"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Formulario de Contacto Avanzado */}
      <section className="py-24 bg-gradient-to-br from-orange-50 to-orange-100 relative z-20">
        <div className="container mx-auto px-4">
          <FadeInSection>
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-4">
                <span className="bg-gradient-to-r from-orange-500 to-orange-700 bg-clip-text text-transparent">Escríbenos</span> un Mensaje
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Cuéntanos cómo podemos ayudarte. Nuestro equipo se pondrá en contacto contigo pronto.
              </p>
            </div>
          </FadeInSection>

          <div className="max-w-4xl mx-auto">
            <div className="bg-white p-8 md:p-12 rounded-3xl shadow-2xl border border-orange-200">
              <form onSubmit={handleSubmit} className="space-y-8">
                {/* Primera fila */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    viewport={{ once: true }}
                  >
                    <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-3">
                      Nombre Completo *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full px-4 py-4 rounded-xl border-2 border-orange-200 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-300"
                      placeholder="Tu nombre completo"
                      required
                    />
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    viewport={{ once: true }}
                  >
                    <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-3">
                      Correo Electrónico *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full px-4 py-4 rounded-xl border-2 border-orange-200 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-300"
                      placeholder="tu@email.com"
                      required
                    />
                  </motion.div>
                </div>

                {/* Segunda fila */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    viewport={{ once: true }}
                  >
                    <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-3">
                      Teléfono
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full px-4 py-4 rounded-xl border-2 border-orange-200 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-300"
                      placeholder="+52 33 1234 5678"
                    />
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    viewport={{ once: true }}
                  >
                    <label htmlFor="interest" className="block text-sm font-semibold text-gray-700 mb-3">
                      Tipo de Interés *
                    </label>
                    <select
                      id="interest"
                      name="interest"
                      value={formData.interest}
                      onChange={handleInputChange}
                      className="w-full px-4 py-4 rounded-xl border-2 border-orange-200 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-300"
                      required
                    >
                      <option value="familia">Soy padre/madre de familia</option>
                      <option value="educador">Soy educador/profesor</option>
                      <option value="institucion">Represento una institución</option>
                      <option value="otro">Otro</option>
                    </select>
                  </motion.div>
                </div>

                {/* Company field (conditional) */}
                {(formData.interest === 'educador' || formData.interest === 'institucion') && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    transition={{ duration: 0.3 }}
                  >
                    <label htmlFor="company" className="block text-sm font-semibold text-gray-700 mb-3">
                      Institución/Escuela
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleInputChange}
                      className="w-full px-4 py-4 rounded-xl border-2 border-orange-200 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-300"
                      placeholder="Nombre de tu institución"
                    />
                  </motion.div>
                )}

                {/* Mensaje */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.5 }}
                  viewport={{ once: true }}
                >
                  <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-3">
                    Mensaje *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    className="w-full px-4 py-4 rounded-xl border-2 border-orange-200 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-300 resize-none"
                    rows={6}
                    placeholder="Cuéntanos cómo podemos ayudarte..."
                    required
                  />
                </motion.div>

                {/* Botón de envío */}
                <motion.div
                  className="text-center"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.6 }}
                  viewport={{ once: true }}
                >
                  <button
                    type="submit"
                    className="inline-flex items-center justify-center px-12 py-4 bg-gradient-to-r from-orange-500 to-orange-600 text-white text-lg font-semibold rounded-xl hover:from-orange-600 hover:to-orange-700 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg shadow-md"
                  >
                    Enviar Mensaje
                    <ArrowRightIcon className="h-5 w-5 ml-2" />
                  </button>
                  <p className="mt-4 text-sm text-gray-600">
                    📧 Te responderemos en menos de 24 horas
                  </p>
                </motion.div>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonios de Contacto */}
      <section className="py-24 bg-white relative z-20">
        <div className="container mx-auto px-4">
          <FadeInSection>
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-4">
                <span className="bg-gradient-to-r from-orange-500 to-orange-700 bg-clip-text text-transparent">Lo que Dicen</span> Nuestros Clientes
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                La experiencia de contacto que otros han tenido con nuestro equipo
              </p>
            </div>
          </FadeInSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                name: "María Fernández",
                role: "Madre de familia",
                text: "El equipo de soporte de LIRA es increíble. Respondieron todas mis dudas sobre la plataforma y me ayudaron a configurar las cuentas de mis hijos.",
                rating: 5,
                avatar: "https://randomuser.me/api/portraits/women/32.jpg"
              },
              {
                name: "Prof. Carlos Ruiz",
                role: "Director Académico",
                text: "Excelente atención personalizada. Nos acompañaron durante todo el proceso de implementación en nuestra escuela.",
                rating: 5,
                avatar: "https://randomuser.me/api/portraits/men/45.jpg"
              },
              {
                name: "Ana López",
                role: "Coordinadora Educativa",
                text: "Muy profesionales y atentos. Sus webinars informativos nos ayudaron mucho a entender el potencial de LIRA.",
                rating: 5,
                avatar: "https://randomuser.me/api/portraits/women/28.jpg"
              }
            ].map((testimonial, index) => (
              <FadeInSection key={index} delay={0.1 * index}>
                <div className="bg-orange-50 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-orange-100">
                  <div className="flex items-center mb-6">
                    <img 
                      src={testimonial.avatar}
                      alt={testimonial.name}
                      className="w-16 h-16 rounded-full object-cover border-2 border-orange-200 mr-4"
                    />
                    <div>
                      <h4 className="text-lg font-bold text-orange-700">{testimonial.name}</h4>
                      <p className="text-orange-600 text-sm">{testimonial.role}</p>
                    </div>
                  </div>
                  
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <StarIcon key={i} className="w-5 h-5 text-orange-500" />
                    ))}
                  </div>
                  
                  <p className="text-gray-700 italic">"{testimonial.text}"</p>
                </div>
              </FadeInSection>
            ))}
          </div>
        </div>
      </section>

      {/* Call-to-Action Final */}
      <section className="py-20 bg-gradient-to-r from-orange-500 to-orange-600 text-white relative z-20">
        <div className="container mx-auto px-4">
          <FadeInSection>
            <div className="max-w-4xl mx-auto text-center">
              <UserGroupIcon className="h-16 w-16 mx-auto mb-6 opacity-90" />
              <h2 className="text-3xl md:text-5xl font-bold mb-6">
                ¿Listo para Transformar la Educación?
              </h2>
              <p className="text-xl mb-8 text-orange-100 max-w-2xl mx-auto">
                Únete a miles de educadores y familias que ya están revolucionando 
                la manera de aprender con LIRA.
              </p>
              <div className="flex flex-col md:flex-row gap-4 justify-center">
                <a
                  href="#"
                  className="inline-flex items-center justify-center px-8 py-4 bg-white text-orange-600 rounded-xl font-bold hover:bg-orange-50 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg"
                >
                  Comenzar Prueba Gratuita
                </a>
                <a
                  href="#"
                  className="inline-flex items-center justify-center px-8 py-4 border-2 border-white text-white rounded-xl font-bold hover:bg-white hover:text-orange-600 transition-all duration-300"
                >
                  Solicitar Demo
                </a>
              </div>
            </div>
          </FadeInSection>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}