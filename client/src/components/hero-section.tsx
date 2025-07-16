import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import profileImage from "@assets/IMG_20241106_174022_1752660031459.jpg";

export default function HeroSection() {
  const handleDownloadResume = () => {
    // Create a downloadable resume file
    const resumeContent = `
RAJDEEP PATEL
AI Developer & MCA Student

Contact Information:
Phone: +91 9081659701
Email: patelrajdeeep@gmail.com
LinkedIn: www.linkedin.com/in/patelrajdeeep
Location: Vadodara, Gujarat, India

Education:
Parul University, Vadodara (May 2021 - April 2025)
Integrated Masters of Computer Applications in Artificial Intelligence
CGPA: 8.18

Professional Summary:
Final-year Integrated MCA student specializing in Artificial Intelligence, graduating in 2025 from Parul University. 
Enthusiastic Python developer with strong foundations in AI, machine learning, and web development. 
Experienced in building AI-powered applications and contributing to open-source projects.

Key Projects:
1. ParkSense AI (January 2025 - Present)
   - Real-time parking space detection system
   - Dynamic occupancy monitoring with time tracking
   - Illegal parking alerts
   - Interactive dashboard for real-time data visualization

2. ClassiVision (October 2024)
   - Web-based ML model training platform
   - No-code solution for educators and students
   - TensorFlow.js integration for browser-based training
   - Drag-and-drop interface for image classification

3. Cafe Menu System (February 2025)
   - Mobile-optimized QR code ordering system
   - Secure payment gateway integration
   - Multi-panel architecture (customer/owner/admin)
   - Dynamic menu management with analytics

4. Application Tracking System (March 2024)
   - NLP-powered text analysis and sentiment classification
   - Django REST API integration
   - Streamlit dashboard for data visualization
   - SQLite database with scalable NLP pipeline

Technical Skills:
Core: Python Programming, Data Science, Computer Vision, Machine Learning
Frameworks: Django, Flask, TensorFlow.js, Streamlit
Tools: NLTK, spaCy, SQLite
Languages: English, Hindi, Gujarati

Interests:
Technology enthusiast, AI advancements, gaming, cricket, badminton
`;

    const blob = new Blob([resumeContent], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'Rajdeep_Patel_Resume.txt';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative pt-20">
      <div className="gradient-overlay absolute inset-0"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div 
          className="text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <motion.div 
            className="mb-8"
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <img 
              src={profileImage} 
              alt="Rajdeep Patel - AI Developer" 
              className="w-40 h-40 md:w-48 md:h-48 rounded-full mx-auto object-cover border-4 border-neon-cyan animate-glow glow-effect" 
            />
          </motion.div>
          
          <motion.h1 
            className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            Hi, I'm <span className="text-gradient">Rajdeep Patel</span>
          </motion.h1>
          
          <motion.p 
            className="text-xl md:text-2xl text-slate-300 mb-8 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            AI Developer & Final-Year MCA Student specializing in Artificial Intelligence
          </motion.p>
          
          <motion.p 
            className="text-lg text-slate-400 mb-12 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            Building intelligent applications with Python, Machine Learning, and cutting-edge AI technologies
          </motion.p>
          
          <motion.div 
            className="flex flex-col sm:flex-row gap-6 justify-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <Button 
              asChild
              className="glassmorphism px-8 py-4 rounded-xl hover:bg-neon-cyan hover:text-dark-blue transition-all duration-300 transform hover:scale-105"
            >
              <a href="#projects">View My Projects</a>
            </Button>
            <Button 
              variant="outline"
              onClick={handleDownloadResume}
              className="border-2 border-neon-magenta px-8 py-4 rounded-xl hover:bg-neon-magenta hover:text-white transition-all duration-300 transform hover:scale-105"
            >
              Download Resume
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
