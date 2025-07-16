import { motion } from "framer-motion";
import { MapPin, GraduationCap, Languages, Download } from "lucide-react";

export default function AboutSection() {
  return (
    <section id="about" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gradient">About Me</h2>
          <p className="text-xl text-slate-300">Passionate about AI and building innovative solutions</p>
        </motion.div>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <img 
              src="https://images.unsplash.com/photo-1555949963-aa79dcee981c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600" 
              alt="Modern AI development workspace" 
              className="rounded-xl shadow-2xl w-full h-auto"
            />
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="glassmorphism p-8 rounded-xl">
              <h3 className="text-2xl font-bold mb-6 text-neon-cyan">Professional Summary</h3>
              <p className="text-slate-300 mb-6 leading-relaxed">
                Final-year Integrated MCA student specializing in Artificial Intelligence, graduating in 2025 from Parul University. 
                Enthusiastic Python developer with strong foundations in AI, machine learning, and web development.
              </p>
              <p className="text-slate-300 mb-8 leading-relaxed">
                Experienced in building AI-powered applications and contributing to open-source projects, with a passion for 
                creating user-friendly, visually appealing applications that solve real-world problems.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <MapPin className="w-5 h-5 text-neon-magenta" />
                  <span>Vadodara, Gujarat, India</span>
                </div>
                <div className="flex items-center space-x-3">
                  <GraduationCap className="w-5 h-5 text-neon-magenta" />
                  <span>Parul University - CGPA: 8.18</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Languages className="w-5 h-5 text-neon-magenta" />
                  <span>English, Hindi, Gujarati</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
