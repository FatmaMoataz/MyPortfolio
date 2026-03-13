import { motion } from "framer-motion";

export default function About() {

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 30 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  return (
    <section id="about" className="w-full py-24 bg-[#020617] text-[#E2E8F0]">
      <motion.div
        className="max-w-6xl mx-auto px-6"
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      >

        {/* Title */}
        <motion.h2
          variants={item}
           initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-5xl font-bold text-white mb-12"
        >
          About <span className="text-[#8B5CF6]">Me</span>
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-12 items-center">

          {/* Text */}
          <motion.div
            variants={container}
            className="space-y-6 text-[#94A3B8] leading-relaxed text-lg"
          >
            <motion.p variants={item}>
              I'm a <span className="text-white font-medium">Software Engineer </span>
              and passionate about building scalable
              web applications and modern digital experiences.
            </motion.p>

            <motion.p variants={item}>
              I work across the full stack using
              <span className="text-white"> React, Node.js, and NestJS</span>,
              designing APIs and creating responsive user interfaces.
            </motion.p>

            <motion.p variants={item}>
              I completed a <span className="text-white">Software Engineering Internship at Microsoft </span>
              where I contributed to internal systems and collaborated on
              production-level code.
            </motion.p>

            <motion.p variants={item}>
              My team also ranked <span className="text-white">4th place in NASA Space Apps Challenge </span>
              in Alexandria.
            </motion.p>
          </motion.div>

          {/* Cards */}
          <motion.div
            variants={container}
            className="grid grid-cols-2 gap-6"
          >

            {[
              { title: "3+", text: "Internships & Training" },
              { title: "10+", text: "Projects Built" },
              { title: "4th", text: "NASA Space Apps Ranking" },
              { title: "2026", text: "Expected Graduation" }
            ].map((card, i) => (
              <motion.div
                key={i}
                variants={item}
                whileHover={{
                  scale: 1.05,
                  borderColor: "#8B5CF6"
                }}
                transition={{ type: "spring", stiffness: 200 }}
                className="p-6 rounded-2xl bg-[#0F172A] border border-[#1E293B]"
              >
                <h3 className="text-3xl font-bold text-[#8B5CF6]">
                  {card.title}
                </h3>
                <p className="text-sm text-[#94A3B8] mt-2">
                  {card.text}
                </p>
              </motion.div>
            ))}

          </motion.div>

        </div>
      </motion.div>
    </section>
  );
}