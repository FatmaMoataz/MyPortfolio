import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Github, Linkedin } from 'lucide-react';
import { ShinyButton } from "@/components/ui/shiny-button";

const navLinks = [
  { name: 'About', href: '#about' },
  { name: 'Projects', href: '#projects' },
  { name: 'Dashboard', href: '#dashboard' },
  { name: 'Skills', href: '#skills' },
  { name: 'Experiences', href: '#experiences' },
  { name: 'Certifications', href: '#certifications' },
  { name: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full z-50 border-b border-[#1E293B] bg-[#020617]/80 backdrop-blur-md text-[#E2E8F0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          
          {/* Logo Section */}
          <motion.div 
            whileHover={{ scale: 1.02 }}
            className="flex items-center gap-2 cursor-pointer"
          >
            <div className="h-8 w-[2px] bg-[#8B5CF6] rounded-full"></div>
            <div className="flex flex-col">
              <span className="text-white font-bold text-xl tracking-wide leading-tight uppercase">
                Fatma<span className="text-[#8B5CF6]">.</span>
              </span>
              <span className="text-[#8B5CF6] text-[10px] font-medium tracking-[0.3em] -mt-1 uppercase opacity-80">
                Developer
              </span>
            </div>
          </motion.div>

          {/* Desktop Links */}
          <div className="hidden md:block">
            <div className="flex items-center space-x-8">
              {navLinks.map((link, index) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="text-sm font-medium hover:text-[#8B5CF6]  transition-colors relative group"
                >
                  {link.name}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#8B5CF6] transition-all group-hover:w-full"></span>
                </motion.a>
              ))}
            </div>
          </div>

          {/* Action Section */}
          <div className="hidden md:flex items-center gap-6">
            <motion.a 
              whileHover={{ y: -2 }}
              href="https://github.com/FatmaMoataz"
              target='_blank' 
              className="text-[#94A3B8] hover:text-white transition-colors"
            >
              <Github size={20} />
            </motion.a>
<ShinyButton 
  className="bg-[#8B5CF6] text-white px-6 py-2 rounded-full text-xs font-bold uppercase tracking-wider"
  whileHover={{ scale: 1.05 }}
  whileTap={{ scale: 0.95 }}
>
  Contact Me
</ShinyButton>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-[#8B5CF6]">
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-[#0F172A] border-b border-[#1E293B] overflow-hidden"
          >
            <div className="px-6 py-8 space-y-4">
              {navLinks.map((link) => (
                <a key={link.name} href={link.href} className="block text-lg font-medium hover:text-[#8B5CF6]">
                  {link.name}
                </a>
              ))}
              <div className="pt-4 border-t border-[#1E293B] flex gap-4">
                <Github size={20} />
                <Linkedin size={20} />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}