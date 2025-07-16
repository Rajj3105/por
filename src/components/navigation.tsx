import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

export default function Navigation() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleNavClick = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className="fixed top-0 w-full z-50 glassmorphism">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="text-2xl font-bold text-gradient">RP</div>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            <a href="#home" className="hover:text-neon-cyan transition-colors duration-300">Home</a>
            <a href="#about" className="hover:text-neon-cyan transition-colors duration-300">About</a>
            <a href="#projects" className="hover:text-neon-cyan transition-colors duration-300">Projects</a>
            <a href="#skills" className="hover:text-neon-cyan transition-colors duration-300">Skills</a>
            <a href="#contact" className="hover:text-neon-cyan transition-colors duration-300">Contact</a>
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden text-white"
            onClick={toggleMobileMenu}
          >
            {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`mobile-menu md:hidden glassmorphism absolute top-full left-0 w-full ${isMobileMenuOpen ? '' : 'hidden'}`}>
        <div className="flex flex-col space-y-4 p-6">
          <a href="#home" className="hover:text-neon-cyan transition-colors duration-300" onClick={handleNavClick}>Home</a>
          <a href="#about" className="hover:text-neon-cyan transition-colors duration-300" onClick={handleNavClick}>About</a>
          <a href="#projects" className="hover:text-neon-cyan transition-colors duration-300" onClick={handleNavClick}>Projects</a>
          <a href="#skills" className="hover:text-neon-cyan transition-colors duration-300" onClick={handleNavClick}>Skills</a>
          <a href="#contact" className="hover:text-neon-cyan transition-colors duration-300" onClick={handleNavClick}>Contact</a>
        </div>
      </div>
    </nav>
  );
}
