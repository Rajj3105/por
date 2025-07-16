import { motion } from "framer-motion";
import { Database, GitBranch, Cloud, Smartphone } from "lucide-react";
import { SKILLS } from "@/lib/constants";

export default function SkillsSection() {
  return (
    <section id="skills" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gradient">Technical Skills</h2>
          <p className="text-xl text-slate-300">Technologies and tools I work with</p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Programming Skills */}
          <motion.div 
            className="glassmorphism p-8 rounded-xl"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold mb-8 text-neon-cyan">Programming & Frameworks</h3>
            
            <div className="space-y-6">
              {SKILLS.programming.map((skill, index) => (
                <motion.div
                  key={index}
                  className="skill-item"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="flex justify-between mb-2">
                    <span className="text-white font-medium">{skill.name}</span>
                    <span className="text-neon-cyan font-bold">{skill.percentage}%</span>
                  </div>
                  <div className="w-full bg-slate-700 rounded-full h-3">
                    <motion.div 
                      className="skill-bar bg-gradient-to-r from-neon-cyan to-neon-magenta h-3 rounded-full"
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.percentage}%` }}
                      transition={{ duration: 2, delay: index * 0.2 }}
                      viewport={{ once: true }}
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* AI/ML Skills */}
          <motion.div 
            className="glassmorphism p-8 rounded-xl"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold mb-8 text-neon-cyan">AI & Machine Learning</h3>
            
            <div className="space-y-6">
              {SKILLS.ai.map((skill, index) => (
                <motion.div
                  key={index}
                  className="skill-item"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="flex justify-between mb-2">
                    <span className="text-white font-medium">{skill.name}</span>
                    <span className="text-neon-cyan font-bold">{skill.percentage}%</span>
                  </div>
                  <div className="w-full bg-slate-700 rounded-full h-3">
                    <motion.div 
                      className="skill-bar bg-gradient-to-r from-neon-cyan to-neon-magenta h-3 rounded-full"
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.percentage}%` }}
                      transition={{ duration: 2, delay: index * 0.2 }}
                      viewport={{ once: true }}
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Additional Skills Grid */}
        <motion.div 
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <motion.div 
            className="glassmorphism p-6 rounded-xl text-center hover:scale-105 transition-transform duration-300"
            whileHover={{ scale: 1.05 }}
          >
            <Database className="w-12 h-12 text-neon-cyan mb-4 mx-auto" />
            <h4 className="text-lg font-semibold mb-2">Databases</h4>
            <p className="text-slate-400 text-sm">SQLite, PostgreSQL</p>
          </motion.div>
          
          <motion.div 
            className="glassmorphism p-6 rounded-xl text-center hover:scale-105 transition-transform duration-300"
            whileHover={{ scale: 1.05 }}
          >
            <GitBranch className="w-12 h-12 text-neon-magenta mb-4 mx-auto" />
            <h4 className="text-lg font-semibold mb-2">Version Control</h4>
            <p className="text-slate-400 text-sm">Git, GitHub</p>
          </motion.div>
          
          <motion.div 
            className="glassmorphism p-6 rounded-xl text-center hover:scale-105 transition-transform duration-300"
            whileHover={{ scale: 1.05 }}
          >
            <Cloud className="w-12 h-12 text-neon-cyan mb-4 mx-auto" />
            <h4 className="text-lg font-semibold mb-2">Cloud & APIs</h4>
            <p className="text-slate-400 text-sm">REST APIs, Payment Gateways</p>
          </motion.div>
          
          <motion.div 
            className="glassmorphism p-6 rounded-xl text-center hover:scale-105 transition-transform duration-300"
            whileHover={{ scale: 1.05 }}
          >
            <Smartphone className="w-12 h-12 text-neon-magenta mb-4 mx-auto" />
            <h4 className="text-lg font-semibold mb-2">Responsive Design</h4>
            <p className="text-slate-400 text-sm">Mobile-First Development</p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
