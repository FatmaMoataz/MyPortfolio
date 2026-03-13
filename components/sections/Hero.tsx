import { motion } from "framer-motion";
import { Code2, Server, Database } from "lucide-react";
import { Particles } from "@/components/ui/particles";

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 },
    },
  };

  const skills = [
    { name: "Frontend Engineering (React / Next.js)", icon: Code2 },
    { name: "Backend Systems (Node.js / NestJS)", icon: Server },
    { name: "APIs & Databases (MongoDB / SQL)", icon: Database },
  ];

  return (
    <section id="home" className="relative w-full min-h-[90vh] flex items-center justify-center bg-[#020617] text-[#E2E8F0] overflow-hidden pt-30 pb-9">
      <Particles
        className="absolute inset-0 z-0"
        quantity={80}
        staticity={50}
        color="#8B5CF6"
      />

      <motion.div
        className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >

        {/* Headline */}
        <motion.h1 className="text-5xl md:text-7xl font-extrabold text-white tracking-tighter mb-6 leading-[1.1]">
          Software Engineer <br />
          Building <span className="text-[#8B5CF6]">Scalable</span> Web Systems
        </motion.h1>

        {/* Subheadline */}
        <motion.p className="text-lg md:text-xl text-[#94A3B8] max-w-3xl mx-auto mb-10 leading-relaxed">
          I design and build modern web applications across the full stack —
from responsive interfaces with <span className="text-white">React </span> to scalable backend services
with <span className="text-white">Node.js and NestJS</span>. I’m also interested in <span className="text-white">Machine Learning </span>
and data-driven systems.
        </motion.p>

        {/* Skills */}
        <motion.div className="flex flex-wrap items-center justify-center gap-4 mb-12 max-w-2xl mx-auto">
          {skills.map((skill) => (
            <div
              key={skill.name}
              className="flex items-center gap-2.5 px-4 py-2 bg-[#0F172A]/50 border border-[#1E293B] rounded-xl text-[13px] hover:border-[#8B5CF6]/50 transition-colors backdrop-blur-sm"
            >
              <skill.icon size={16} className="text-[#8B5CF6]" />
              <span className="text-[#E2E8F0] font-medium">{skill.name}</span>
            </div>
          ))}
        </motion.div>
      </motion.div>

      <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-[#020617] to-transparent z-10"></div>
    </section>
  );
}