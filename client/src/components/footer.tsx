import { motion } from "framer-motion";
import { Linkedin, Github, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="py-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="flex justify-center space-x-6 mb-8">
            <motion.a 
              href="https://www.linkedin.com/in/patelrajdeeep" 
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 bg-slate-800 rounded-lg flex items-center justify-center hover:bg-neon-cyan hover:text-dark-blue transition-all duration-300"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <Linkedin className="w-6 h-6" />
            </motion.a>
            
            <motion.a 
              href="https://github.com/patelrajdeeep" 
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 bg-slate-800 rounded-lg flex items-center justify-center hover:bg-neon-magenta hover:text-white transition-all duration-300"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <Github className="w-6 h-6" />
            </motion.a>
            
            <motion.a 
              href="mailto:patelrajdeeep@gmail.com"
              className="w-12 h-12 bg-slate-800 rounded-lg flex items-center justify-center hover:bg-neon-cyan hover:text-dark-blue transition-all duration-300"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <Mail className="w-6 h-6" />
            </motion.a>
          </div>
          
          <p className="text-slate-400 mb-4">
            © 2025 Rajdeep Patel. Crafted with passion for AI and innovation.
          </p>
          <p className="text-slate-500 text-sm">
            Built with modern web technologies and a love for clean design.
          </p>
        </motion.div>
      </div>
    </footer>
  );
}
