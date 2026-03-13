import { motion } from "framer-motion";
import { 
  Code2, 
  Terminal, 
  Database, 
  Palette, 
  Sparkles 
} from 'lucide-react';

const skillGroups = [
  {
    title: "Frontend Development",
    icon: <Code2 className="w-8 h-8 text-[#8b5cf6]" />,
    skills: ["React", "Next.js", "Tailwind CSS", "Framer Motion", "Shadcn UI", "Axios"],
    description: "Building responsive, high-performance, and interactive user interfaces.",
    fullWidth: false
  },
  {
    title: "Backend & Systems",
    icon: <Terminal className="w-8 h-8 text-[#8b5cf6]" />,
    skills: ["Node.js", "NestJS", "PostgreSQL (ORM)", "GraphQL", "AWS", "Mongoose (NoSQL)"],
    description: "Architecting scalable server-side logic and robust API structures.",
    fullWidth: false
  },
  {
    title: "Data Analysis",
    icon: <Database className="w-8 h-8 text-[#8b5cf6]" />,
    skills: ["Python", "SQL", "Tableau", "Pandas", "NumPy", "Matplotlib", "Excel"],
    description: "Extracting actionable insights from complex and large datasets.",
    fullWidth: false
  },
  {
    title: "Design & UI/UX",
    icon: <Palette className="w-8 h-8 text-[#8b5cf6]" />,
    skills: ["Figma", "Miro", "Prototyping", "User Research", "Wireframing"], 
    description: "Crafting user-centric digital experiences with a focus on usability.",
    fullWidth: false
  },
  {
    title: "Soft Skills & Professionalism",
    icon: <Sparkles className="w-8 h-8 text-[#8b5cf6]" />,
    skills: ["Problem Solving", "Agile (Scrum)", "Technical Writing", "Critical Thinking", "Team Collaboration", "Self-Learning"],
    description: "Driving project success through effective communication and analytical methodology.",
    fullWidth: true
  }
];

export default function Skills() {
  return (
    <section id="skills" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.h1 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl font-bold mb-16 text-center text-white"
        >
          My <span className="text-[#8b5cf6]">Tech Stack</span> & Skills
        </motion.h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {skillGroups.map((group, index) => (
            <motion.div
              key={group.title}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              whileHover={{ y: -5 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`group relative p-8 bg-[#1E293B]/50 border border-white/5 rounded-2xl overflow-hidden hover:border-[#8b5cf6]/50 transition-all ${
                group.fullWidth ? "md:col-span-2" : ""
              }`}
            >
              {/* Animated Background Glow */}
              <div className="absolute -right-10 -top-10 w-32 h-32 bg-[#8b5cf6]/10 blur-3xl group-hover:bg-[#8b5cf6]/20 transition-all" />

              <div className="flex flex-col sm:flex-row items-start gap-6 relative z-10">
                <div className="p-3 bg-[#0f172a] rounded-xl border border-white/10 group-hover:scale-110 transition-transform shadow-lg shadow-purple-500/10">
                  {group.icon}
                </div>
                
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-[#8b5cf6] transition-colors">
                    {group.title}
                  </h3>
                  <p className="text-slate-400 text-sm mb-4 leading-relaxed">
                    {group.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2">
                    {group.skills.map((skill) => (
                      <span 
                        key={skill}
                        className="text-[11px] uppercase tracking-wider font-semibold px-2 py-1 bg-[#8b5cf6]/10 text-[#a78bfa] rounded-md border border-[#8b5cf6]/20 hover:bg-[#8b5cf6]/20 hover:border-[#8b5cf6]/40 transition-colors cursor-default"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}