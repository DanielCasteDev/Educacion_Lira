import { motion } from "framer-motion";
import { FaArrowLeft } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import logo from "../../../assets/lira.png";
import fondo from "../../../assets/image.jpg";
import { useState } from "react"; 
import { loginUser } from "../auth/utils/Data";
import { toast, Toaster } from "react-hot-toast"; // Importa Toaster

const LoginPage = () => {
  const [usuario, setUsuario] = useState("");
  const [contraseña, setContraseña] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  
    try {
      const data = await loginUser(usuario, contraseña);
  
      // Muestra la notificación de éxito
      toast.success("Inicio de sesión exitoso");
  
      // Espera 1.5 segundos antes de redirigir para que se vea la animación
      setTimeout(() => {
        navigate("/admin");
      }, 1500);
  
      console.log("Datos del usuario:", data);
    } catch (error) {
      if (error instanceof Error) {
        toast.error(error.message);
      } else {
        toast.error("Ocurrió un error desconocido");
      }
    }
  };

  const loginVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  return (
    <div className="min-h-screen bg-white text-gray-800">
      {/* Renderiza Toaster aquí para que los toasts funcionen */}
      <Toaster position="top-right" reverseOrder={false} />

      <a
        href="/"
        className="absolute top-4 right-6 flex items-center text-gray-500 hover:text-gray-700 transition-all duration-200"
      >
        <FaArrowLeft className="w-5 h-5 mr-2" />
        <span>Regresar</span>
      </a>

      <div className="h-screen flex flex-col lg:flex-row">
        <div
          className="hidden lg:block lg:w-1/2 h-full relative items-center justify-center bg-cover bg-center"
          style={{
            backgroundImage: `url(${fondo})`,
          }}
        >
          <motion.div
            className="relative z-20 text-center px-8 py-6 bg-black/50 rounded-lg"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            <h1 className="text-5xl font-bold text-white mb-4">¡Bienvenido!</h1>
            <p className="text-xl text-white">
              Transformamos la lectura en una experiencia dinámica y atractiva para los niños.
            </p>
          </motion.div>
        </div>

        <div className="w-full lg:w-1/2 h-full flex items-center justify-center p-6">
          <motion.div
            className="bg-white p-8 rounded-lg shadow-2xl w-full max-w-md border border-gray-100"
            variants={loginVariants}
            initial="hidden"
            animate="visible"
          >
            <div className="flex justify-center mb-6">
              <img src={logo} alt="Logo" className="h-16" />
            </div>

            <h2 className="text-3xl font-bold mb-6 text-center text-gray-900">
              Iniciar Sesión
            </h2>

            <form className="space-y-6" onSubmit={handleSubmit}>
              <div className="relative">
                <input
                  type="text"
                  id="usuario"
                  className="block w-full px-4 py-2 border-0 border-b-2 border-gray-200 focus:border-orange-500 focus:outline-none focus:ring-0 peer"
                  placeholder=" "
                  value={usuario}
                  onChange={(e) => setUsuario(e.target.value)}
                />
                <label
                  htmlFor="usuario"
                  className="absolute left-0 -top-3.5 text-gray-500 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 peer-focus:-top-3.5 peer-focus:text-sm peer-focus:text-gray-500"
                >
                  Usuario
                </label>
              </div>

              <div className="relative">
                <input
                  type="password"
                  id="contraseña"
                  className="block w-full px-4 py-2 border-0 border-b-2 border-gray-200 focus:border-orange-500 focus:outline-none focus:ring-0 peer"
                  placeholder=" "
                  value={contraseña}
                  onChange={(e) => setContraseña(e.target.value)}
                />
                <label
                  htmlFor="contraseña"
                  className="absolute left-0 -top-3.5 text-gray-500 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 peer-focus:-top-3.5 peer-focus:text-sm peer-focus:text-gray-500"
                >
                  Contraseña
                </label>
              </div>

              <button
                type="submit"
                className="w-full flex justify-center py-3 px-4 border border-transparent rounded-lg shadow-sm text-sm font-medium text-white bg-orange-500 hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500 transition-all duration-200"
              >
                Iniciar Sesión
              </button>
            </form>

            <div className="mt-6 text-center">
              <a
                href="olvidaste"
                className="text-sm text-orange-500 hover:text-orange-600 focus:outline-none transition-all duration-200"
              >
                ¿Olvidaste tu contraseña?
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
