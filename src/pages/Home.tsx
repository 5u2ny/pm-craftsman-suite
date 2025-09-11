import Hero from "@/components/Hero";
import ProjectsShowcase from "@/components/ProjectsShowcase";
import Experience from "@/components/Experience";
import ToolsSkills from "@/components/ToolsSkills";
import LiquidGlassDemo from "@/components/LiquidGlassDemo";

const Home = () => {
  return (
    <main>
      <Hero />
      <LiquidGlassDemo />
      <Experience />
      <ToolsSkills />
      <ProjectsShowcase />
    </main>
  );
};

export default Home;