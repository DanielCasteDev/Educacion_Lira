import React, { useState } from "react";
import { FaUser, FaArrowRight, FaArrowLeft, FaChild } from "react-icons/fa";
import { motion } from "framer-motion";
 import Sphere from "../../Info/components/sphere";

const New_hijo: React.FC = () => {
  const [step, setStep] = useState(0);
  const [childData, setChildData] = useState({
    nombre: "",
    apellido: "",
    edad: "",
    sexo: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setChildData({ ...childData, [e.target.name]: e.target.value });
  };

  const nextStep = () => {
    setStep(step + 1);
  };

  const prevStep = () => {
    setStep(step - 1);
  };

  const submitForm = () => {
    console.log("Datos del Niño:", childData);
    alert("¡Registro exitoso!");
  };

  const variants = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: 50 },
  };

  return (
    <div className="relative flex flex-col items-center justify-center min-h-screen font-sans">
      {/* Fondo con gradiente y esferas */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-blue-400 to-blue-200 opacity-70"></div>
      <div className="absolute inset-0 -z-20">
        {[50, 70, 40, 60, 80, 90, 30, 100].map((size, index) => (
          <Sphere key={index} size={size} color={`rgba(0, 123, 255, ${0.4 + index * 0.05})`} />
        ))}
      </div>

      {/* Sección 1: Nombre */}
      {step === 0 && (
        <motion.div initial="hidden" animate="visible" exit="exit" variants={variants} className="w-full max-w-2xl p-8 bg-white rounded-lg shadow-2xl mx-4">
          <h2 className="text-4xl font-bold text-blue-600 mb-6 flex items-center justify-center">
            <FaUser className="mr-2" /> ¿Cuál es el nombre del niño?
          </h2>
          <input
            type="text"
            name="nombre"
            placeholder="Nombre"
            value={childData.nombre}
            onChange={handleChange}
            className="w-full border-2 border-blue-300 rounded-lg p-3 focus:outline-none"
          />
          <button onClick={nextStep} className="w-full bg-blue-100 text-black py-3 px-6 rounded-lg mt-6 hover:bg-blue-200 transition-colors flex items-center justify-center">
            Siguiente <FaArrowRight className="ml-2" />
          </button>
        </motion.div>
      )}

      {/* Sección 2: Apellido */}
      {step === 1 && (
        <motion.div initial="hidden" animate="visible" exit="exit" variants={variants} className="w-full max-w-2xl p-8 bg-white rounded-lg shadow-2xl mx-4">
          <h2 className="text-4xl font-bold text-blue-600 mb-6 flex items-center justify-center">
            <FaUser className="mr-2" /> ¿Cuál es su apellido?
          </h2>
          <input
            type="text"
            name="apellido"
            placeholder="Apellido"
            value={childData.apellido}
            onChange={handleChange}
            className="w-full border-2 border-blue-300 rounded-lg p-3 focus:outline-none"
          />
          <div className="flex gap-4 mt-6">
            <button onClick={prevStep} className="w-1/2 bg-gray-400 text-white py-3 px-6 rounded-lg hover:bg-gray-500 transition-colors flex items-center justify-center">
              <FaArrowLeft className="mr-2" /> Anterior
            </button>
            <button onClick={nextStep} className="w-1/2 bg-blue-100 text-black py-3 px-6 rounded-lg hover:bg-blue-200 transition-colors flex items-center justify-center">
              Siguiente <FaArrowRight className="ml-2" />
            </button>
          </div>
        </motion.div>
      )}

      {/* Sección 3: Edad */}
      {step === 2 && (
        <motion.div initial="hidden" animate="visible" exit="exit" variants={variants} className="w-full max-w-2xl p-8 bg-white rounded-lg shadow-2xl mx-4">
          <h2 className="text-4xl font-bold text-blue-600 mb-6 flex items-center justify-center">
            <FaChild className="mr-2" /> ¿Cuántos años tiene?
          </h2>
          <input
            type="number"
            name="edad"
            placeholder="Edad"
            value={childData.edad}
            onChange={handleChange}
            className="w-full border-2 border-blue-300 rounded-lg p-3 focus:outline-none"
          />
          <div className="flex gap-4 mt-6">
            <button onClick={prevStep} className="w-1/2 bg-gray-400 text-white py-3 px-6 rounded-lg hover:bg-gray-500 transition-colors flex items-center justify-center">
              <FaArrowLeft className="mr-2" /> Anterior
            </button>
            <button onClick={nextStep} className="w-1/2 bg-blue-100 text-black py-3 px-6 rounded-lg hover:bg-blue-200 transition-colors flex items-center justify-center">
              Siguiente <FaArrowRight className="ml-2" />
            </button>
          </div>
        </motion.div>
      )}

      {/* Sección 4: Sexo */}
      {step === 3 && (
        <motion.div initial="hidden" animate="visible" exit="exit" variants={variants} className="w-full max-w-2xl p-8 bg-white rounded-lg shadow-2xl mx-4">
          <h2 className="text-4xl font-bold text-blue-600 mb-6 flex items-center justify-center">
            <FaChild className="mr-2" /> ¿Cuál es su género?
          </h2>
          <select name="sexo" value={childData.sexo} onChange={handleChange} className="w-full border-2 border-blue-300 rounded-lg p-3 focus:outline-none">
            <option value="">Selecciona una opción</option>
            <option value="Masculino">Masculino</option>
            <option value="Femenino">Femenino</option>
          </select>
          <div className="flex gap-4 mt-6">
            <button onClick={prevStep} className="w-1/2 bg-gray-400 text-white py-3 px-6 rounded-lg hover:bg-gray-500 transition-colors flex items-center justify-center">
              <FaArrowLeft className="mr-2" /> Anterior
            </button>
            <button onClick={submitForm} className="w-1/2 bg-green-400 text-white py-3 px-6 rounded-lg hover:bg-green-500 transition-colors flex items-center justify-center">
              Registrar <FaArrowRight className="ml-2" />
            </button>
          </div>
        </motion.div>
      )}
    </div>
  );
};

export default New_hijo;
