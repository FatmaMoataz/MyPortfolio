"use client";
import Navbar from "@/components/shared/Navbar";
import Footer from "@/components/shared/Footer";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Projects from "@/components/sections/Projects";
import Dashboard from "@/components/sections/dashboard";
import Skills from "@/components/sections/Skills";
import Experiences from "@/components/sections/Experiences";
import Certifications from "@/components/sections/Certifications";
import Contact from "@/components/sections/Contact";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center font-sans bg-[#020617]">
      <Navbar/>
      <Hero/>
      <About/>
      <Projects/>
      <Dashboard/>
      <Skills/>
      <Experiences/>
      <Certifications/>
      <Contact/>
      <Footer/>
    </div>
  );
}
