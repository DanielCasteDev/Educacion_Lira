import { motion } from "framer-motion";
import { FaTwitter, FaFacebook, FaInstagram, FaLinkedin, FaEnvelope, FaPhone } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-b from-orange-50 to-orange-100 py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <motion.div
            className="col-span-1 md:col-span-2"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="text-4xl font-bold text-orange-600 mb-4">LIRA</div>
            <p className="text-gray-600 mb-4 max-w-md">
              Transformando la gestión de riesgos y asegurando un futuro más seguro para todos.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-orange-500 transition-colors text-orange-800"
              >
                <FaTwitter className="h-5 w-5" />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-orange-500 transition-colors text-orange-800"
              >
                <FaFacebook className="h-5 w-5" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-orange-500 transition-colors text-orange-800"
              >
                <FaInstagram className="h-5 w-5" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-orange-500 transition-colors text-orange-800"
              >
                <FaLinkedin className="h-5 w-5" />
              </a>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="text-lg font-semibold text-orange-800 mb-4">Enlaces Rápidos</h3>
            <ul className="space-y-2">
              {[
                { name: "Inicio", path: "/" },
                { name: "¿Qué es LIRA?", path: "/mision" },
                { name: "Servicios", path: "/servicios" },
                { name: "Blog", path: "/blog" },
                { name: "Contacto", path: "/contacto" }
              ].map((item) => (
                <li key={item.name}>
                  <a
                    href={item.path}
                    className="text-gray-600 hover:text-orange-500 transition-colors"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <h3 className="text-lg font-semibold text-orange-800 mb-4">Contacto</h3>
            <ul className="space-y-3">
              <li className="flex items-center space-x-2 text-gray-600">
                <FaEnvelope className="h-5 w-5 text-orange-600" />
                <span>contacto@lira.com</span>
              </li>
              <li className="flex items-center space-x-2 text-gray-600">
                <FaPhone className="h-5 w-5 text-orange-600" />
                <span>+1 (555) 123-4567</span>
              </li>
            </ul>
            <motion.a
              href="https://app-lira.vercel.app/"
              className="inline-block mt-4 px-6 py-2 bg-orange-600 text-white rounded-lg hover:bg-orange-700 transition-colors"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
            >
              Iniciar Sesión
            </motion.a>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          className="border-t border-orange-200 mt-12 pt-8 text-center text-gray-600 text-sm"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p>© {new Date().getFullYear()} LIRA. Todos los derechos reservados.</p>
            <div className="flex space-x-4 mt-4 md:mt-0">
              <a href="/privacidad" className="hover:text-orange-500 transition-colors">
                Política de Privacidad
              </a>
              <a href="/terminos" className="hover:text-orange-500 transition-colors">
                Términos y Condiciones
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
