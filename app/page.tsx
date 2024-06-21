"use client";
import HeroSection from "./components/HeroSection";
import ProjectsSection from "./components/ProjectsSection";
import SectionHeader from "./components/SectionHeader";
import { EmblaCarousel } from "./components/EmblaCarousel";

export default function Home() {
  return (
    <>
      <HeroSection></HeroSection>

      <div className="container main-content">
        <div id="#projects" className="pt-10">
          <SectionHeader title="Projects" />
          <EmblaCarousel></EmblaCarousel>
        </div>
        <div>
          <SectionHeader title="About me" />
          <div className="flex flex-col">
            <p className="text-large">
              I am a digital designer based near Milan. I have coding skills and
              a strong interest in web design, interaction design and data
              visualization. My aim is to create visual experiences that
              captivate, engage and inform the users.
            </p>
            <p className="pt-2 sm:pt-5">
              <a href="info">read more</a> ↝
            </p>
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
