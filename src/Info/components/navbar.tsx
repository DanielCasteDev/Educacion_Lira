import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import liraLogo from "../../assets/lira.png"; // Importa tu logo

interface NavbarProps {
  scrolled: boolean;
}

export default function Navbar({ scrolled }: NavbarProps) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      {/* Header */}
      <motion.header
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          scrolled ? "bg-white/90 backdrop-blur-sm shadow-sm" : "bg-transparent"
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <motion.div
            className="text-xl font-bold"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            {/* Usa la imagen en lugar del texto */}
            <img
              src={liraLogo}
              alt="LIRA Logo"
              className="h-14" // Ajusta el tamaño según sea necesario
            />
          </motion.div>

          <div className="hidden md:flex space-x-8 items-center">
            {[
              { name: "Inicio", path: "/" },
              { name: "Que es LIRA?", path: "/mision" },
              { name: "Contacto", path: "/contacto" },
            ].map((item, i) => (
              <motion.a
                key={item.name}
                href={item.path} // Usa el atributo href para redirigir
                className="hover:text-orange-500 transition-colors text-orange-800 font-semibold text-lg tracking-wide"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * i }}
              >
                {item.name}
              </motion.a>
            ))}
            <motion.a
              href="/login" // Redirige al login
              className="rounded-full px-6 py-2 bg-orange-500 text-white hover:bg-orange-600 transition font-semibold text-lg tracking-wide"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              Iniciar Sesión
            </motion.a>
          </div>

          <div className="md:hidden">
            <button
              className="p-2"
              onClick={() => setMenuOpen(true)}
            >
              <Menu className="text-orange-600" />
            </button>
          </div>
        </div>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="fixed inset-0 bg-white z-50 flex flex-col"
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            <div className="flex justify-end p-4">
              <button
                className="p-2"
                onClick={() => setMenuOpen(false)}
              >
                <X className="text-orange-600" />
              </button>
            </div>
            <div className="flex flex-col items-center justify-center flex-1 space-y-8">
              {[
                { name: "Inicio", path: "/" },
                { name: "Que es LIRA?", path: "/mision" },
                { name: "Contacto", path: "/contacto" },
              ].map((item, i) => (
                <motion.a
                  key={item.name}
                  href={item.path} // Usa el atributo href para redirigir
                  className="text-2xl font-semibold text-orange-800 tracking-wide"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 * i }}
                  onClick={() => setMenuOpen(false)} // Cierra el menú móvil
                >
                  {item.name}
                </motion.a>
              ))}
              <motion.a
                href="/login" // Redirige al login
                className="rounded-full px-6 py-2 bg-orange-500 text-white hover:bg-orange-600 transition font-semibold text-lg tracking-wide"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
              >
                Iniciar Sesión
              </motion.a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}