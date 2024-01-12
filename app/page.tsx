import HeroSection from "./components/HeroSection";
import ProjectsSection from "./components/ProjectsSection";
import SectionHeader from "./components/SectionHeader";

export default function Home() {
  return (
    <>
      <HeroSection></HeroSection>

      <div className="container main-content">
        <div id="#projects">
          <SectionHeader title="Projects" />
          <ProjectsSection></ProjectsSection>
        </div>
        <div>
          <SectionHeader title="Overview" />
          <div className="flex flex-col">
            <p className="text-large">
              I am a digital designer based in Milan. I have coding skills and a
              strong interest in web design, interaction design and data
              visualization. My aim is to create visual experiences that
              captivate, engage and inform the users.
            </p>
            <a className="pt-5" href="/info">
              ↳ read more
            </a>
          </div>
        </div>
        <div>
          <SectionHeader title="Mail" />
          <p className="text-large">alessandroquets@gmail.com</p>
        </div>
        <div>
          <SectionHeader title="Instagram" />
          <p className="text-large">@alessandroquets</p>
        </div>
      </div>
    </>
  );
}
