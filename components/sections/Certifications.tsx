import { motion } from "framer-motion";
import certificationsData from "../data/certifications.json";
import {
  Calendar,
  Award,
  ExternalLink,
  ChevronRight,
  Linkedin,
  Briefcase,
  Star,
  GraduationCap,
  Code
} from "lucide-react";

export default function Certifications() {
  const { certifications } = certificationsData;

  // Group certifications by year
  const groupedByYear = certifications.reduce((acc, cert) => {
    const year = cert.date.split(' ')[1];
    if (!acc[year]) acc[year] = [];
    acc[year].push(cert);
    return acc;
  }, {});

  const years = Object.keys(groupedByYear).sort().reverse();

  // Stats calculation
  const totalCerts = certifications.length;
  const uniqueIssuers = new Set(certifications.map(c => c.issuer)).size;
  const uniqueSkills = new Set(certifications.flatMap(c => c.skills)).size;
  const activeYears = years.length;

  const stats = [
    { label: "Total Certs", value: totalCerts, icon: Award },
    { label: "Organizations", value: uniqueIssuers, icon: Briefcase },
    { label: "Technologies", value: uniqueSkills, icon: Code },
    { label: "Active Years", value: `${years[0]}-${years[years.length-1]}`, icon: Calendar },
  ];

  return (
    <section id="certifications" className="py-20 px-4 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-b from-purple-900/5 via-transparent to-transparent" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-6"
        >
          <div className="flex justify-center mb-4">
            <div className="p-3 bg-[#8b5cf6]/10 rounded-2xl">
              <GraduationCap className="w-8 h-8 text-[#8b5cf6]" />
            </div>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white">
            My <span className="text-[#8b5cf6]">Certifications</span>
          </h1>
        </motion.div>
        
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-gray-400 text-center mb-16 max-w-2xl mx-auto"
        >
          Continuous learning through industry-recognized certifications 
          from leading organizations and platforms.
        </motion.p>

        {/* Stats summary */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16"
        >
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div 
                key={index}
                className="bg-white/5 backdrop-blur-sm rounded-lg p-4 text-center border border-white/10 hover:border-[#8b5cf6]/30 transition-all duration-300 group"
              >
                <Icon className="w-6 h-6 text-[#8b5cf6] mx-auto mb-2 group-hover:scale-110 transition-transform" />
                <div className="text-3xl font-bold text-[#8b5cf6] mb-1">{stat.value}</div>
                <div className="text-sm text-gray-400">{stat.label}</div>
              </div>
            );
          })}
        </motion.div>

        {/* Certifications by year */}
        {years.map((year, yearIndex) => (
          <div key={year} className="mb-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-3 mb-6"
            >
              <div className="p-2 bg-[#8b5cf6]/10 rounded-lg">
                <Calendar className="w-5 h-5 text-[#8b5cf6]" />
              </div>
              <h2 className="text-2xl font-semibold text-white">
                {year}
              </h2>
              <span className="text-sm text-gray-500 font-normal">
                ({groupedByYear[year].length} certification{groupedByYear[year].length > 1 ? 's' : ''})
              </span>
              <div className="flex-1 h-px bg-gradient-to-r from-[#8b5cf6]/50 to-transparent ml-4" />
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {groupedByYear[year].map((cert, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -5 }}
                  className="group relative"
                >
                  {/* Gradient background card */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${cert.color} rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                  
                  <div className="relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:border-[#8b5cf6]/30 transition-all duration-300 h-full flex flex-col">
                    {/* Header with icon and issuer */}
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-center gap-1 text-sm text-gray-400">
                        <Calendar className="w-3 h-3" />
                        <span>{cert.date}</span>
                      </div>
                    </div>

                    {/* Content */}
                    <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-[#8b5cf6] transition-colors line-clamp-2">
                      {cert.title}
                    </h3>
                    
                    <p className="text-[#8b5cf6] text-sm mb-3 flex items-center gap-1">
                      <Award className="w-3 h-3" />
                      {cert.issuer}
                    </p>
                    
                    <p className="text-gray-400 text-sm mb-4 line-clamp-2">
                      {cert.description}
                    </p>

                    {/* Skills tags */}
                    <div className="flex flex-wrap gap-2 mb-4 mt-auto">
                      {cert.skills.map((skill, i) => (
                        <span 
                          key={i}
                          className="text-xs px-2 py-1 bg-white/5 rounded-full text-gray-300 border border-white/10 hover:bg-[#8b5cf6]/10 hover:border-[#8b5cf6]/30 transition-all duration-300"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>

                    {/* Footer with credential link if exists */}
                    {(cert.credential || cert.credentialId) && (
                      <div className="flex items-center justify-between text-sm pt-4 border-t border-white/10">
                        {cert.credentialId && (
                          <span className="text-gray-500 text-xs flex items-center gap-1">
                            <Star className="w-3 h-3" />
                            ID: {cert.credentialId}
                          </span>
                        )}
                        {cert.credential && (
                          <button className="text-[#8b5cf6] hover:text-[#7c3aed] transition-colors text-sm font-medium flex items-center gap-1 group/btn">
                            {cert.credential}
                            <ExternalLink className="w-3 h-3 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                          </button>
                        )}
                      </div>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        ))}

        {/* View all on LinkedIn button */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <a 
            href="https://www.linkedin.com/in/fatma-moataz-31a457264" 
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-white/5 hover:bg-white/10 border border-white/10 rounded-lg text-white transition-all duration-300 hover:scale-105 group"
          >
            <Linkedin className="w-4 h-4 text-[#8b5cf6]" />
            View all on LinkedIn
            <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}