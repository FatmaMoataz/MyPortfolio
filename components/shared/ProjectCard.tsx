"use client";

import { motion } from "framer-motion";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardFooter,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export default function ProjectCard({ project, index }: any) {
  const renderDemoButtons = () => {
    if (typeof project.demo === "string") {
      if (project.demo === "#") return null;
      return (
        <Button asChild className="w-full bg-[#8b5cf6] hover:bg-[#7c3aed] transition-colors duration-300">
          <a href={project.demo} target="_blank" rel="noreferrer">Live Demo</a>
        </Button>
      );
    }
    
    return Object.entries(project.demo).map(([label, url]: [string, any]) => (
      <Button key={label} asChild variant="outline" className="w-full text-[10px] px-1 border-[#8b5cf6] text-[#8b5cf6] hover:bg-[#8b5cf6]/10">
        <a href={url} target="_blank" rel="noreferrer">{label}</a>
      </Button>
    ));
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.1 }} 
      whileHover={{ y: -5 }} 
      className="h-full"
    >
      <Card className="group relative mx-auto w-full max-w-sm pt-0 bg-[#0f172a] border-[#1e293b] hover:border-[#8b5cf6]/50 flex flex-col h-full overflow-hidden transition-all duration-300 shadow-2xl hover:shadow-[#8b5cf6]/10">
        
        {/* Image Section with Overlay */}
        <div className="relative aspect-video w-full overflow-hidden bg-slate-800">
          <img
            src={project.image || "https://avatar.vercel.sh/placeholder"}
            alt={project.title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0f172a] via-transparent to-transparent opacity-60" />
          
          {project.featured && (
             <div className="absolute top-2 right-2 z-40">
                <Badge className="bg-[#8b5cf6] text-white shadow-lg animate-pulse">Featured</Badge>
             </div>
          )}
        </div>

        <CardHeader className="flex-grow">
          <div className="flex flex-wrap gap-1 mb-3">
            {project.tech.map((t: string) => (
              <Badge key={t} variant="outline" className="text-[10px] text-slate-400 border-slate-700 group-hover:border-[#8b5cf6]/30 transition-colors">
                {t}
              </Badge>
            ))}
          </div>
          <CardTitle className="text-white text-xl group-hover:text-[#8b5cf6] transition-colors">
            {project.title}
          </CardTitle>
          <CardDescription className="text-slate-400 text-sm line-clamp-3">
            {project.description}
          </CardDescription>
        </CardHeader>

        <CardFooter className="flex flex-col gap-2 mt-auto pb-6">
          <div className="flex gap-2 w-full">
             {renderDemoButtons()}
          </div>
          {project.github !== "#" && (
            <Button variant="ghost" asChild className="w-full text-slate-500 hover:text-white hover:bg-white/5 transition-all">
              <a href={project.github} target="_blank" rel="noreferrer">View Source Code</a>
            </Button>
          )}
        </CardFooter>
      </Card>
    </motion.div>
  );
}