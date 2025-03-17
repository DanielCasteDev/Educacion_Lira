import React, { useState } from 'react';
import { FaUser, FaEnvelope, FaPhone, FaLock, FaArrowRight, FaArrowLeft } from 'react-icons/fa';
import { motion } from 'framer-motion';
import Sphere from "../../components/sphere";

const Admin: React.FC = () => {
    const [step, setStep] = useState(0);
    const [parentData, setParentData] = useState({
        nombre: '',
        apellido: '',
        correo: '',
        telefono: '',
        contraseña: '',
        fechaNacimiento: '',
    });

    const handleParentChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setParentData({ ...parentData, [e.target.name]: e.target.value });
    };

    const nextStep = () => {
        setStep(step + 1);
    };

    const prevStep = () => {
        setStep(step - 1);
    };

    const submitForm = () => {
        console.log('Datos del Padre:', parentData);
        alert('¡Registro exitoso!');
    };

    const variants = {
        hidden: { opacity: 0, x: -50 },
        visible: { opacity: 1, x: 0 },
        exit: { opacity: 0, x: 50 }
    };

    return (
        <div className="relative flex flex-col items-center justify-center min-h-screen font-sans">
            {/* Fondo con gradiente y esferas */}
            <div className="absolute inset-0 -z-10 bg-gradient-to-r from-orange-80 to-yellow-50 opacity-70"></div>
          
            {/* Esferas animadas en el fondo */}
            <div className="absolute inset-0 -z-20">
                {[50, 70, 40, 60, 80, 90, 30, 100, 55, 65, 80, 70, 50, 30, 110].map((size, index) => (
                    <Sphere
                        key={index}
                        size={size}
                        color={`rgba(255, 165, 0, ${0.4 + index * 0.05})`}
                    />
                ))}
            </div>

            {/* Sección de Introducción */}
            {step === 0 && (
                <motion.div
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                    variants={variants}
                    className="w-full max-w-2xl p-8 bg-white rounded-lg shadow-2xl mx-4"
                >
                    <h2 className="text-4xl font-bold text-orange-600 mb-6 flex items-center justify-center">
                        ¡Bienvenido al Registro de LIRA!
                    </h2>
                    <p className="text-gray-600 text-center mb-6">
                        "Este proceso es muy fácil. Primero, registrarás tu cuenta como administrador (el 'papá'). Después de eso, podrás registrar a los hijos en el sistema, asociándolos a tu cuenta. Completa estos pasos y serás parte de nuestra plataforma en minutos."
                    </p>
                    <p className="text-gray-600 text-center mb-6">
                        "Solo sigue los pasos que te mostramos, primero registrando tus datos, luego podrás registrar los datos de los hijos, y podrás administrarlos desde tu cuenta."
                    </p>
                    <button
                        onClick={nextStep}
                        className="w-full bg-yellow-100 text-black py-3 px-6 rounded-lg mt-6 hover:bg-orange-100 transition-colors flex items-center justify-center"
                    >
                        Comenzar <FaArrowRight className="ml-2" />
                    </button>
                </motion.div>
            )}

            {/* Sección 1: Registro del Padre */}
            {step === 1 && (
                <motion.div
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                    variants={variants}
                    className="w-full max-w-2xl p-8 bg-white rounded-lg shadow-2xl mx-4"
                >
                    <h2 className="text-4xl font-bold text-orange-600 mb-6 flex items-center justify-center">
                        <FaUser className="mr-2" /> ¡Hola! Empecemos con tu nombre
                    </h2>
                    <p className="text-gray-600 text-center mb-6">
                        "Este es el primer paso para tu perfil de administrador. ¡Vamos a hacerlo increíble!"
                    </p>
                    <div className="flex items-center border-2 border-orange-300 rounded-lg p-3">
                        <FaUser className="text-orange-500 mr-2" />
                        <input
                            type="text"
                            name="nombre"
                            placeholder="Tu nombre"
                            value={parentData.nombre}
                            onChange={handleParentChange}
                            className="w-full focus:outline-none"
                        />
                    </div>
                    <button
                        onClick={nextStep}
                        className="w-full bg-yellow-100 text-black py-3 px-6 rounded-lg mt-6 hover:bg-orange-100 transition-colors flex items-center justify-center"
                    >
                        Siguiente <FaArrowRight className="ml-2" />
                    </button>
                </motion.div>
            )}

            {/* Sección 2: Apellido */}
            {step === 2 && (
                <motion.div
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                    variants={variants}
                    className="w-full max-w-2xl p-8 bg-white rounded-lg shadow-2xl mx-4"
                >
                    <h2 className="text-4xl font-bold text-orange-600 mb-6 flex items-center justify-center">
                        <FaUser className="mr-2" /> ¿Cuál es tu apellido?
                    </h2>
                    <p className="text-gray-600 text-center mb-6">
                        "Solo necesitamos tu apellido para completar tu perfil."
                    </p>
                    <div className="flex items-center border-2 border-orange-300 rounded-lg p-3">
                        <FaUser className="text-orange-500 mr-2" />
                        <input
                            type="text"
                            name="apellido"
                            placeholder="Tu apellido"
                            value={parentData.apellido}
                            onChange={handleParentChange}
                            className="w-full focus:outline-none"
                        />
                    </div>
                    <div className="flex gap-4 mt-6">
                        <button
                            onClick={prevStep}
                            className="w-1/2 bg-gray-400 text-white py-3 px-6 rounded-lg hover:bg-gray-500 transition-colors flex items-center justify-center"
                        >
                            <FaArrowLeft className="mr-2" /> Anterior
                        </button>
                        <button
                            onClick={nextStep}
                            className="w-1/2 bg-yellow-100 text-black py-3 px-6 rounded-lg hover:bg-orange-100 transition-colors flex items-center justify-center"
                        >
                            Siguiente <FaArrowRight className="ml-2" />
                        </button>
                    </div>
                </motion.div>
            )}

            {/* Sección 3: Correo */}
            {step === 3 && (
                <motion.div
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                    variants={variants}
                    className="w-full max-w-2xl p-8 bg-white rounded-lg shadow-2xl mx-4"
                >
                    <h2 className="text-4xl font-bold text-orange-600 mb-6 flex items-center justify-center">
                        <FaEnvelope className="mr-2" /> ¡Casi listo! Tu correo, por favor
                    </h2>
                    <p className="text-gray-600 text-center mb-6">
                        "Tu correo nos permitirá enviarte toda la información importante."
                    </p>
                    <div className="flex items-center border-2 border-orange-300 rounded-lg p-3">
                        <FaEnvelope className="text-orange-500 mr-2" />
                        <input
                            type="email"
                            name="correo"
                            placeholder="Tu correo"
                            value={parentData.correo}
                            onChange={handleParentChange}
                            className="w-full focus:outline-none"
                        />
                    </div>
                    <div className="flex gap-4 mt-6">
                        <button
                            onClick={prevStep}
                            className="w-1/2 bg-gray-400 text-white py-3 px-6 rounded-lg hover:bg-gray-500 transition-colors flex items-center justify-center"
                        >
                            <FaArrowLeft className="mr-2" /> Anterior
                        </button>
                        <button
                            onClick={nextStep}
                            className="w-1/2 bg-yellow-100 text-black py-3 px-6 rounded-lg hover:bg-orange-100 transition-colors flex items-center justify-center"
                        >
                            Siguiente <FaArrowRight className="ml-2" />
                        </button>
                    </div>
                </motion.div>
            )}

            {/* Sección 4: Teléfono */}
            {step === 4 && (
                <motion.div
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                    variants={variants}
                    className="w-full max-w-2xl p-8 bg-white rounded-lg shadow-2xl mx-4"
                >
                    <h2 className="text-4xl font-bold text-orange-600 mb-6 flex items-center justify-center">
                        <FaPhone className="mr-2" /> ¿Tu número de teléfono?
                    </h2>
                    <p className="text-gray-600 text-center mb-6">
                        "¡Lo necesitamos para ponernos en contacto contigo!"
                    </p>
                    <div className="flex items-center border-2 border-orange-300 rounded-lg p-3">
                        <FaPhone className="text-orange-500 mr-2" />
                        <input
                            type="text"
                            name="telefono"
                            placeholder="Tu número de teléfono"
                            value={parentData.telefono}
                            onChange={handleParentChange}
                            className="w-full focus:outline-none"
                        />
                    </div>
                    <div className="flex gap-4 mt-6">
                        <button
                            onClick={prevStep}
                            className="w-1/2 bg-gray-400 text-white py-3 px-6 rounded-lg hover:bg-gray-500 transition-colors flex items-center justify-center"
                        >
                            <FaArrowLeft className="mr-2" /> Anterior
                        </button>
                        <button
                            onClick={nextStep}
                            className="w-1/2 bg-yellow-100 text-black py-3 px-6 rounded-lg hover:bg-orange-100 transition-colors flex items-center justify-center"
                        >
                            Siguiente <FaArrowRight className="ml-2" />
                        </button>
                    </div>
                </motion.div>
            )}

            {/* Sección 5: Contraseña */}
            {step === 5 && (
                <motion.div
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                    variants={variants}
                    className="w-full max-w-2xl p-8 bg-white rounded-lg shadow-2xl mx-4"
                >
                    <h2 className="text-4xl font-bold text-orange-600 mb-6 flex items-center justify-center">
                        <FaLock className="mr-2" /> ¡Hora de tu contraseña!
                    </h2>
                    <p className="text-gray-600 text-center mb-6">
                        "Por seguridad, necesitamos que establezcas una contraseña."
                    </p>
                    <div className="flex items-center border-2 border-orange-300 rounded-lg p-3">
                        <FaLock className="text-orange-500 mr-2" />
                        <input
                            type="password"
                            name="contraseña"
                            placeholder="Contraseña"
                            value={parentData.contraseña}
                            onChange={handleParentChange}
                            className="w-full focus:outline-none"
                        />
                    </div>

                    <div className="flex gap-4 mt-6">
                        <button
                            onClick={prevStep}
                            className="w-1/2 bg-gray-400 text-white py-3 px-6 rounded-lg hover:bg-gray-500 transition-colors flex items-center justify-center"
                        >
                            <FaArrowLeft className="mr-2" /> Anterior
                        </button>
                        <button
                            onClick={nextStep}
                            className="w-1/2 bg-yellow-100 text-black py-3 px-6 rounded-lg hover:bg-orange-100 transition-colors flex items-center justify-center"
                        >
                            Siguiente <FaArrowRight className="ml-2" />
                        </button>
                    </div>
                </motion.div>
            )}

            {/* Sección 6: Confirmación de Datos y Bienvenida */}
            {step === 6 && (
                <motion.div
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                    variants={variants}
                    className="w-full max-w-2xl p-8 bg-white rounded-lg shadow-2xl mx-4"
                >
                    <h2 className="text-4xl font-bold text-orange-600 mb-6 flex items-center justify-center">
                        ¡Bienvenido a LIRA!
                    </h2>
                    <p className="text-gray-600 text-center mb-6">
                        "Por favor, revisa tus datos antes de continuar:"
                    </p>
                    <div className="text-left mb-6">
                        <p><strong>Nombre:</strong> {parentData.nombre}</p>
                        <p><strong>Apellido:</strong> {parentData.apellido}</p>
                        <p><strong>Correo:</strong> {parentData.correo}</p>
                        <p><strong>Teléfono:</strong> {parentData.telefono}</p>
                        <p><strong>Contraseña:</strong> ********</p>
                    </div>
                    <div className="flex gap-4 mt-6">
                        <button
                            onClick={prevStep}
                            className="w-1/2 bg-gray-400 text-white py-3 px-6 rounded-lg hover:bg-gray-500 transition-colors flex items-center justify-center"
                        >
                            <FaArrowLeft className="mr-2" /> Anterior
                        </button>
                        <button
                            onClick={submitForm}
                            className="w-1/2 bg-yellow-100 text-black py-3 px-6 rounded-lg hover:bg-orange-100 transition-colors flex items-center justify-center"
                        >
                            Enviar <FaArrowRight className="ml-2" />
                        </button>
                    </div>
                </motion.div>
            )}
        </div>
    );
};

export default Admin;