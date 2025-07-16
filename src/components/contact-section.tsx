import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Phone, Mail, Linkedin, Send } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

export default function ContactSection() {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        toast({
          title: "Message sent successfully!",
          description: "Thank you for reaching out. I'll get back to you soon.",
        });
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        throw new Error('Failed to send message');
      }
    } catch (error) {
      toast({
        title: "Failed to send message",
        description: "Please try again or contact me directly via email.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gradient">Get In Touch</h2>
          <p className="text-xl text-slate-300">Let's collaborate on your next AI project</p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="glassmorphism p-8 rounded-xl mb-8">
              <h3 className="text-2xl font-bold mb-6 text-neon-cyan">Contact Information</h3>
              
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-neon-cyan bg-opacity-20 rounded-lg flex items-center justify-center">
                    <Phone className="w-6 h-6 text-neon-cyan" />
                  </div>
                  <div>
                    <p className="text-slate-400 text-sm">Phone</p>
                    <p className="text-white font-medium">+91 9081659701</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-neon-magenta bg-opacity-20 rounded-lg flex items-center justify-center">
                    <Mail className="w-6 h-6 text-neon-magenta" />
                  </div>
                  <div>
                    <p className="text-slate-400 text-sm">Email</p>
                    <p className="text-white font-medium">patelrajdeeep@gmail.com</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-neon-cyan bg-opacity-20 rounded-lg flex items-center justify-center">
                    <Linkedin className="w-6 h-6 text-neon-cyan" />
                  </div>
                  <div>
                    <p className="text-slate-400 text-sm">LinkedIn</p>
                    <a 
                      href="https://www.linkedin.com/in/patelrajdeeep" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-white font-medium hover:text-neon-cyan transition-colors duration-300"
                    >
                      linkedin.com/in/patelrajdeeep
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <img 
              src="https://images.unsplash.com/photo-1517077304055-6e89abbf09b0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600" 
              alt="Modern programming workspace with multiple monitors" 
              className="rounded-xl shadow-2xl w-full h-auto"
            />
          </motion.div>

          {/* Contact Form */}
          <motion.div 
            className="glassmorphism p-8 rounded-xl"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold mb-6 text-neon-cyan">Send a Message</h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <Label htmlFor="name" className="text-slate-300 mb-2">Your Name</Label>
                <Input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className="bg-slate-800 border-slate-600 text-white focus:ring-neon-cyan focus:border-neon-cyan"
                  placeholder="Enter your name"
                />
              </div>
              
              <div>
                <Label htmlFor="email" className="text-slate-300 mb-2">Email Address</Label>
                <Input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="bg-slate-800 border-slate-600 text-white focus:ring-neon-cyan focus:border-neon-cyan"
                  placeholder="Enter your email"
                />
              </div>
              
              <div>
                <Label htmlFor="subject" className="text-slate-300 mb-2">Subject</Label>
                <Input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  required
                  className="bg-slate-800 border-slate-600 text-white focus:ring-neon-cyan focus:border-neon-cyan"
                  placeholder="Project discussion, collaboration, etc."
                />
              </div>
              
              <div>
                <Label htmlFor="message" className="text-slate-300 mb-2">Message</Label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={5}
                  className="bg-slate-800 border-slate-600 text-white focus:ring-neon-cyan focus:border-neon-cyan resize-none"
                  placeholder="Tell me about your project or how we can collaborate..."
                />
              </div>
              
              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full btn-gradient text-white font-bold py-4 px-6 rounded-lg hover:shadow-lg hover:shadow-neon-cyan/25 transition-all duration-300 transform hover:scale-105"
              >
                <Send className="w-5 h-5 mr-2" />
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </Button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
