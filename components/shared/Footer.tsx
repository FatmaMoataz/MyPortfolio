import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, ArrowUpRight, Heart } from 'lucide-react';
import { RetroGrid } from "@/components/ui/retro-grid";

// Custom LeetCode SVG Icon
const LeetCodeIcon = ({ size = 18 }: { size?: number }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M13.483 0a1.374 1.374 0 0 0-.961.414l-9.774 9.774a1.374 1.374 0 0 0 0 1.942l9.774 9.774a1.374 1.374 0 0 0 1.942 0 1.374 1.374 0 0 0 0-1.942l-8.803-8.803 8.803-8.803A1.374 1.374 0 0 0 13.483 0zM15.5 11.5a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm4.5 0a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-9 0a1 1 0 1 0 0 2 1 1 0 0 0 0-2z" />
  </svg>
);

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { Icon: Github, href: "https://github.com/FatmaMoataz" },
    { Icon: Linkedin, href: "https://www.linkedin.com/in/fatma-moataz-31a457264/" },
    { Icon: LeetCodeIcon, href: "https://leetcode.com/u/fatmamoataz65/" },
    { Icon: Mail, href: "mailto:fatmamoataz65@gmail.com" },
  ];

  return (
    <footer className="relative w-full bg-[#020617] border-t border-[#1E293B] text-[#E2E8F0] pt-20 pb-10 overflow-hidden">
      {/* Magic UI Background Effect */}
      <RetroGrid opacity={0.3} />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-20">
          
          {/* Brand Bio */}
          <div className="col-span-1 md:col-span-2 space-y-6">
            <div className="flex items-center gap-2">
              <div className="h-6 w-[3px] bg-[#8B5CF6] rounded-full"></div>
              <span className="text-white font-bold text-xl tracking-tight uppercase">
                Fatma<span className="text-[#8B5CF6]">.</span>
              </span>
            </div>
            <p className="text-sm text-[#94A3B8] max-w-sm leading-relaxed">
              Aspiring Software Engineer. Building digital experiences that combine high performance with clean, modern design.
            </p>
            <div className="flex gap-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  target='_blank'
                  whileHover={{ y: -4, backgroundColor: "#1E293B" }}
                  className="p-2.5 bg-[#0F172A] border border-[#1E293B] rounded-xl text-[#8B5CF6] transition-all flex items-center justify-center"
                  href={social.href}
                >
                  <social.Icon size={18} />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Links */}
          <div className="space-y-6">
            <h4 className="text-white font-bold text-xs uppercase tracking-[0.3em] opacity-50">Navigation</h4>
            <ul className="space-y-4 text-sm font-medium text-[#94A3B8]">
              {['Home', 'Projects', 'Dashboard', 'Skills', 'Experiences' , 'Certifications' , 'Contact'].map((item) => (
                <li key={item}>
                  <a href={`#${item.toLowerCase()}`} className="hover:text-[#8B5CF6] transition-colors flex items-center group">
                    {item}
                    <ArrowUpRight size={14} className="opacity-0 group-hover:opacity-100 transition-all ml-1" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Status Card */}
          <div className="space-y-6">
            <h4 className="text-white font-bold text-xs uppercase tracking-[0.3em] opacity-50">Status</h4>
            <div className="relative group overflow-hidden rounded-xl border border-[#1E293B] bg-[#0F172A] p-5 transition-all hover:border-[#8B5CF6]/50 shadow-2xl">
              {/* Subtle background glow on hover */}
              <div className="absolute -right-10 -top-10 w-32 h-32 bg-[#8B5CF6]/5 blur-3xl group-hover:bg-[#8B5CF6]/10 transition-colors"></div>
              
              <div className="relative z-10 space-y-3">
                <div className="flex items-center gap-2">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                  </span>
                  <span className="text-[10px] font-bold text-emerald-400 uppercase tracking-widest">Available</span>
                </div>
                <p className="text-[12px] text-[#94A3B8] leading-snug">
                  Currently open for freelance opportunities and collaborations.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-[#1E293B]/50 pt-10 flex flex-col md:flex-row justify-between items-center gap-6 text-[11px] font-medium uppercase tracking-[0.1em] text-[#64748B]">
          <p>© {currentYear} Fatma Moataz — Egypt</p>
          <div className="flex items-center gap-1.5">
            <span>Crafted with</span>
            <Heart size={12} className="text-[#8B5CF6] fill-[#8B5CF6]" />
            <span>by Fatma</span>
          </div>
        </div>
      </div>
    </footer>
  );
}