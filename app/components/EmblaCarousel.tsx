import React from "react";
import useEmblaCarousel from "embla-carousel-react";
import ProjectCard from "./ProjectCard";
import projects from "../projects.json";

export const EmblaCarousel = () => {
  const [emblaRef] = useEmblaCarousel();

  return (
    <div className="embla" ref={emblaRef}>
      <div className="embla__container">
        {projects.map((project) => {
          return (
            <div key={project.id} className="embla__slide">
              <ProjectCard key={project.id} project={project}></ProjectCard>
            </div>
          );
        })}
      </div>
    </div>
  );
};
