import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { 
  UserIcon, 
  LockClosedIcon, 
  TvIcon, 
  CheckCircleIcon,
  ExclamationTriangleIcon 
} from "@heroicons/react/24/solid";

export default function LoginTV() {
  const [qrToken, setQrToken] = useState("");
  const [correo, setCorreo] = useState("");
  const [contraseña, setContraseña] = useState("");
  const [status, setStatus] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const token = params.get("token");
    if (token) {
      setQrToken(token);
      setStatus("");
    } else {
      setStatus("No se encontró token QR en la URL.");
    }
  }, []);

  const handleSubmit = async (e: { preventDefault: () => void; }) => {
    e.preventDefault();

    if (!qrToken) {
      setStatus("Token QR no disponible.");
      return;
    }

    setIsLoading(true);
    setStatus("Iniciando sesión...");

    try {
      // 1. Login en backend
      const loginRes = await fetch("https://api-lira.onrender.com/api/tv-login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ correo, contraseña }),
      });

      if (!loginRes.ok) {
        const errorData = await loginRes.json();
        throw new Error(errorData.message || "Error en login");
      }

      const loginData = await loginRes.json();
      const nombre = loginData.user?.nombre || "Usuario";

      // 2. Vincular token QR con nombre en backend
      const tvLoginRes = await fetch("https://api-lira.onrender.com/api/tv-login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ qr_token: qrToken, nombre }),
      });

      if (!tvLoginRes.ok) {
        const errorTv = await tvLoginRes.json();
        throw new Error(errorTv.message || "Error vinculando con TV");
      }

      setStatus("¡Login exitoso! Puedes volver a la TV.");
      setIsSuccess(true);

    } catch (err) {
      setStatus("Error: " + (err instanceof Error ? err.message : String(err)));
      setIsSuccess(false);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-orange-100 relative overflow-hidden">
      {/* Fondo decorativo */}
      <div className="absolute inset-0">
        <div className="absolute top-10 right-10 w-64 h-64 bg-orange-200 rounded-full opacity-20 blur-3xl"></div>
        <div className="absolute bottom-10 left-10 w-48 h-48 bg-orange-300 rounded-full opacity-20 blur-2xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-orange-100 rounded-full opacity-30 blur-3xl"></div>
      </div>

      <div className="relative z-10 min-h-screen flex items-center justify-center px-4 py-8">
        <motion.div
          className="w-full max-w-md"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {/* Header */}
          <motion.div
            className="text-center mb-8"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-orange-500 to-orange-600 rounded-full mb-6 shadow-lg">
              <TvIcon className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-3xl font-bold text-gray-800 mb-2">Conectar con TV</h1>
            <p className="text-gray-600">Inicia sesión para vincular tu cuenta con la pantalla</p>
          </motion.div>

          {/* Card principal */}
          <motion.div
            className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-2xl p-8 border border-orange-100"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {!qrToken ? (
              <motion.div
                className="text-center"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4 }}
              >
                <ExclamationTriangleIcon className="w-16 h-16 text-orange-500 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-800 mb-2">Token QR no detectado</h3>
                <p className="text-gray-600">
                  Por favor, escanea el código QR desde la aplicación en tu TV para continuar.
                </p>
              </motion.div>
            ) : isSuccess ? (
              <motion.div
                className="text-center"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4 }}
              >
                <CheckCircleIcon className="w-16 h-16 text-green-500 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-800 mb-2">¡Conexión exitosa!</h3>
                <p className="text-gray-600 mb-6">
                  Tu cuenta ha sido vinculada correctamente. Puedes volver a tu TV.
                </p>
                <motion.button
                  onClick={() => window.close()}
                  className="w-full bg-gradient-to-r from-green-500 to-green-600 text-white py-3 px-6 rounded-xl font-semibold hover:from-green-600 hover:to-green-700 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Cerrar ventana
                </motion.button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Campo Email */}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: 0.3 }}
                >
                  <label htmlFor="correo" className="block text-sm font-semibold text-gray-700 mb-2">
                    Correo Electrónico
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <UserIcon className="h-5 w-5 text-orange-400" />
                    </div>
                    <input
                      type="email"
                      id="correo"
                      value={correo}
                      onChange={(e) => setCorreo(e.target.value)}
                      required
                      autoFocus
                      className="w-full pl-10 pr-4 py-3 border-2 border-orange-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-300 bg-white"
                      placeholder="tu@email.com"
                    />
                  </div>
                </motion.div>

                {/* Campo Contraseña */}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: 0.4 }}
                >
                  <label htmlFor="contraseña" className="block text-sm font-semibold text-gray-700 mb-2">
                    Contraseña
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <LockClosedIcon className="h-5 w-5 text-orange-400" />
                    </div>
                    <input
                      type="password"
                      id="contraseña"
                      value={contraseña}
                      onChange={(e) => setContraseña(e.target.value)}
                      required
                      className="w-full pl-10 pr-4 py-3 border-2 border-orange-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-300 bg-white"
                      placeholder="••••••••"
                    />
                  </div>
                </motion.div>

                {/* Botón de envío */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.5 }}
                >
                  <button
                    type="submit"
                    disabled={isLoading}
                    className={`w-full py-3 px-6 rounded-xl font-semibold text-white transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg ${
                      isLoading
                        ? 'bg-gray-400 cursor-not-allowed'
                        : 'bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700'
                    }`}
                  >
                    {isLoading ? (
                      <div className="flex items-center justify-center space-x-2">
                        <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                        <span>Conectando...</span>
                      </div>
                    ) : (
                      'Conectar con TV'
                    )}
                  </button>
                </motion.div>
              </form>
            )}

            {/* Status message */}
            {status && !isSuccess && (
              <motion.div
                className={`mt-6 p-4 rounded-xl text-center ${
                  status.includes('Error') || status.includes('no detectado')
                    ? 'bg-red-50 text-red-700 border border-red-200'
                    : status.includes('exitoso')
                    ? 'bg-green-50 text-green-700 border border-green-200'
                    : 'bg-orange-50 text-orange-700 border border-orange-200'
                }`}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
              >
                <p className="font-medium">{status}</p>
              </motion.div>
            )}
          </motion.div>

          {/* Footer info */}
          {qrToken && !isSuccess && (
            <motion.div
              className="text-center mt-8 text-sm text-gray-600"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <p className="mb-2">🔐 Conexión segura con LIRA</p>
              <p>Token de sesión: <span className="font-mono text-orange-600">***{qrToken.slice(-6)}</span></p>
            </motion.div>
          )}
        </motion.div>
      </div>
    </div>
  );
}
