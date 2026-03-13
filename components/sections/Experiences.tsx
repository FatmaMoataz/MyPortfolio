import { motion } from "framer-motion";
import { 
  Briefcase, 
  Database, 
  Code2, 
  Bot, 
  Terminal,
  MapPin,
  Calendar
} from 'lucide-react';
import experiencesData from '../data/experiences.json';

const getIcon = (iconName: string) => {
  switch (iconName) {
    case 'bot': return <Bot className="w-5 h-5 text-[#8b5cf6]" />;
    case 'database': return <Database className="w-5 h-5 text-[#8b5cf6]" />;
    case 'code': return <Code2 className="w-5 h-5 text-[#8b5cf6]" />;
    case 'microsoft': return <Terminal className="w-5 h-5 text-[#3b82f6]" />;
    default: return <Briefcase className="w-5 h-5 text-[#8b5cf6]" />;
  }
};

export default function Experiences() {
  return (
    <section id="experiences" className="py-20 px-6 w-full">
      <div className="max-w-4xl mx-auto">
        <motion.h1 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl font-bold mb-16 text-center text-white"
        >
          My <span className="text-[#8b5cf6]">Journey</span>
        </motion.h1>

        <div className="relative border-l-2 border-white/5 ml-4 md:ml-12">
          {experiencesData.map((exp, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 }}
              className="mb-12 ml-10 relative"
            >
              {/* Timeline Indicator */}
              <div className="absolute -left-[54px] top-1 bg-[#1E293B] border border-white/10 p-2.5 rounded-xl shadow-[0_0_20px_rgba(139,92,246,0.15)] z-10 group-hover:scale-110 transition-transform">
                {getIcon(exp.icon)}
              </div>

              <div className="group relative bg-[#1E293B]/30 border border-white/5 p-6 rounded-2xl hover:border-[#8b5cf6]/40 transition-all">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-white group-hover:text-[#8b5cf6] transition-colors">
                      {exp.title}
                    </h3>
                    <p className="text-[#a78bfa] font-medium">{exp.company}</p>
                  </div>
                  
                  <div className="flex flex-col items-start md:items-end gap-2 text-xs text-slate-400">
                    <span className="flex items-center bg-white/5 px-3 py-1 rounded-full border border-white/5">
                      <Calendar className="w-3 h-3 mr-2" />
                      {exp.date}
                    </span>
                    <span className="flex items-center text-[#8b5cf6]/80 px-1">
                      <MapPin className="w-3 h-3 mr-1" />
                      {exp.location}
                    </span>
                  </div>
                </div>

                <p className="text-slate-400 text-sm leading-relaxed max-w-2xl">
                  {exp.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}