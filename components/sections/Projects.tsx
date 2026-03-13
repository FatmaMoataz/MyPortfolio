import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import projects from "../data/projects.json";
import ProjectCard from "../shared/ProjectCard";
import { motion } from "framer-motion";

export default function Projects() {

  const renderProjects = (category: string) => {
    const filtered = projects.filter((p) => p.category === category);
    
    if (filtered.length === 0) {
      return (
        <div className="col-span-full text-center py-10 text-slate-500">
          No projects in this category yet.
        </div>
      );
    }

    return filtered.map((project, index) => (
      <ProjectCard key={index} project={project} />
    ));
  };

  return (
    <div id="projects" className="container mx-auto py-24 px-4">
      <motion.h1 
       initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
      className="text-4xl font-bold mb-8 text-center text-white">
        Featured <span className="text-[#8b5cf6]">Projects</span>
      </motion.h1>

      <Tabs defaultValue="frontend" className="w-full">
<div className="flex justify-center mb-16 bg-white/5 backdrop-blur-md border border-white/10 rounded-lg p-1">
  <TabsList className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 h-auto gap-2 bg-transparent w-full">
<TabsTrigger 
  value="fullstack" 
  className="
    text-white/70 
    transition-all
    hover:text-white 
    hover:bg-white/10
    data-[state=active]:bg-[#8b5cf6] 
    data-[state=active]:text-white 
    data-[state=active]:shadow-lg
    cursor-pointer
  "
>
  Full-Stack
</TabsTrigger>
  
    <TabsTrigger 
  value="frontend" 
  className="
    text-white/70 
    transition-all
    hover:text-white 
    hover:bg-white/10
    data-[state=active]:bg-[#8b5cf6] 
    data-[state=active]:text-white 
    data-[state=active]:shadow-lg
    cursor-pointer
  "
>
  Frontend
</TabsTrigger>

    <TabsTrigger 
  value="backend" 
  className="
    text-white/70 
    transition-all
    hover:text-white 
    hover:bg-white/10
    data-[state=active]:bg-[#8b5cf6] 
    data-[state=active]:text-white 
    data-[state=active]:shadow-lg
    cursor-pointer
  "
>
  Backend
</TabsTrigger>

    <TabsTrigger 
  value="data" 
  className="
    text-white/70 
    transition-all
    hover:text-white 
    hover:bg-white/10
    data-[state=active]:bg-[#8b5cf6] 
    data-[state=active]:text-white 
    data-[state=active]:shadow-lg
    cursor-pointer
  "
>
  Data Science / ML
</TabsTrigger>

    <TabsTrigger 
  value="design" 
  className="
    text-white/70 
    transition-all
    hover:text-white 
    hover:bg-white/10
    data-[state=active]:bg-[#8b5cf6] 
    data-[state=active]:text-white 
    data-[state=active]:shadow-lg
    cursor-pointer
  "
>
  UI/UX
</TabsTrigger>
  </TabsList>
</div>  
        <TabsContent value="fullstack" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {renderProjects("fullstack")}
        </TabsContent>

        <TabsContent value="frontend" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {renderProjects("frontend")}
          {renderProjects("web")} 
        </TabsContent>

        <TabsContent value="backend" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {renderProjects("backend")}
        </TabsContent>

        <TabsContent value="data" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {renderProjects("data")}
        </TabsContent>

        <TabsContent value="design" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {renderProjects("design")}
        </TabsContent>
      </Tabs>
    </div>
  );
}