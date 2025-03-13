import { motion } from "framer-motion";
import { FaTwitter, FaFacebook, FaInstagram } from "react-icons/fa"; // Iconos de redes sociales

export default function Footer() {
  return (
    <footer className="py-10 bg-orange-50">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          {/* Logo o nombre de la aplicación y enlaces a las secciones */}
          <motion.div
            className="flex flex-col items-center md:items-start mb-6 md:mb-0"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="text-3xl font-bold text-orange-600 mb-4">LIRA</div>
            <div className="flex space-x-6">
              {[
                { name: "Inicio", path: "/" },
                { name: "Que es LIRA?", path: "/mision" },
                { name: "Contacto", path: "/contacto" },
              ].map((item) => (
                <a
                  key={item.name}
                  href={item.path}
                  className="hover:text-orange-500 transition-colors text-orange-800"
                >
                  {item.name}
                </a>
              ))}
            </div>
          </motion.div>

          {/* Iconos de redes sociales */}
          <motion.div
            className="flex space-x-6 mb-6 md:mb-0"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-orange-500 transition-colors text-orange-800"
            >
              <FaTwitter className="h-6 w-6" />
            </a>
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-orange-500 transition-colors text-orange-800"
            >
              <FaFacebook className="h-6 w-6" />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-orange-500 transition-colors text-orange-800"
            >
              <FaInstagram className="h-6 w-6" />
            </a>
          </motion.div>
        </div>

        {/* Derechos de autor centrados */}
        <motion.div
          className="text-center text-orange-600 text-sm mt-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
        >
          © {new Date().getFullYear()} LIRA. Todos los derechos reservados VL.
        </motion.div>
      </div>
    </footer>
  );
}