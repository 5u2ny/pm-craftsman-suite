import Hero from "@/components/Hero";
import ProjectsShowcase from "@/components/ProjectsShowcase";
import Experience from "@/components/Experience";
import ToolsSkills from "@/components/ToolsSkills";
import Recommendations from "@/components/Recommendations";

const Home = () => {
  return (
    <main>
      <Hero />
      <Experience />
      <ToolsSkills />
      <Recommendations />
      <ProjectsShowcase />
    </main>
  );
};

export default Home;