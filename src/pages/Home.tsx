import Hero from "@/components/Hero";
import ProjectsShowcase from "@/components/ProjectsShowcase";
import Experience from "@/components/Experience";
import ToolsSkills from "@/components/ToolsSkills";
import Recommendations from "@/components/Recommendations";
import WorkingPrinciples from "@/components/WorkingPrinciples";

const Home = () => {
  return (
    <main>
      <Hero />
      <WorkingPrinciples />
      <Experience />
      <ToolsSkills />
      <Recommendations />
      <ProjectsShowcase />
    </main>
  );
};

export default Home;