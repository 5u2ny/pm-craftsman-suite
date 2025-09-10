import Hero from "@/components/Hero";
import ProjectsShowcase from "@/components/ProjectsShowcase";
import Experience from "@/components/Experience";
import ToolsSkills from "@/components/ToolsSkills";

const Home = () => {
  return (
    <main>
      <Hero />
      <Experience />
      <ToolsSkills />
      <ProjectsShowcase />
    </main>
  );
};

export default Home;