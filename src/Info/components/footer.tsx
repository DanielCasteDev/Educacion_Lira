import { motion } from "framer-motion";

export default function Footer() {
  return (
    <footer className="py-10 bg-orange-50">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <motion.div
            className="text-xl font-bold mb-4 md:mb-0 text-orange-600"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            LIRA
          </motion.div>

          <motion.div
            className="flex space-x-6"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            {["Twitter", "Facebook", "Instagram", "YouTube"].map((item) => (
              <a
                key={item}
                href="#"
                className="hover:text-orange-500 transition-colors text-orange-800"
              >
                {item}
              </a>
            ))}
          </motion.div>
        </div>

        <motion.div
          className="mt-8 pt-8 border-t border-orange-200 text-center text-orange-600 text-sm"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          © {new Date().getFullYear()} LIRA. Todos los derechos reservados.
        </motion.div>
      </div>
    </footer>
  );
}