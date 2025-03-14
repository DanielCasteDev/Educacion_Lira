import { motion } from "framer-motion"; // Importa Framer Motion
import Navbar from "../../components/navbar";
import Sphere from "../../components/sphere";
import logo from "../../../assets/lira.png"; // Importa tu logo directamente

const LoginPage = () => {
  // Animaciones para el recuadro del login
  const loginVariants = {
    hidden: { opacity: 0, y: 50 }, // Estado inicial: invisible y ligeramente abajo
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }, // Estado final: visible y en su posición
  };

  return (
    <div className="min-h-screen bg-white text-gray-800">
      {/* Navbar */}
      <Navbar scrolled={false} />

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

      {/* Contenido de la página de Login */}
      <section className="h-screen flex items-center justify-center relative z-20">
        {/* Recuadro del Login con animaciones */}
        <motion.div
          className="bg-white p-8 rounded-lg shadow-2xl w-full max-w-md"
          variants={loginVariants}
          initial="hidden" // Estado inicial
          animate="visible" // Estado final
        >
          {/* Logo */}
          <div className="flex justify-center mb-6">
            <img src={logo} alt="Logo" className="h-16" />
          </div>

          {/* Título */}
          <h2 className="text-2xl font-bold mb-6 text-center text-orange-500">
            Iniciar Sesión
          </h2>

          {/* Formulario de Login */}
          <form className="space-y-6">
            {/* Campo de correo o teléfono */}
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Correo electrónico o teléfono
              </label>
              <input
                type="text"
                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-500"
                placeholder="Correo electrónico o teléfono"
              />
            </div>

            {/* Campo de contraseña */}
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Contraseña
              </label>
              <input
                type="password"
                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-500"
                placeholder="Contraseña"
              />
            </div>

            {/* Botón de Iniciar Sesión */}
            <button
              type="submit"
              className="w-full flex justify-center py-2 px-4 border border-transparent rounded-lg shadow-sm text-sm font-medium text-white bg-orange-500 hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500"
            >
              Iniciar Sesión
            </button>
          </form>

          {/* Enlace para recuperar contraseña */}
          <div className="mt-6 text-center">
            <a
              href="#"
              className="text-sm text-orange-500 hover:text-orange-600 focus:outline-none"
            >
              ¿Olvidaste tu contraseña?
            </a>
          </div>
        </motion.div>
      </section>

    </div>
  );
};

export default LoginPage;