import React from "react";
import useEmblaCarousel from "embla-carousel-react";
import ImageOrVideo from "./ImageOrVideo";
import ProjectCard from "./ProjectCard";
import projects from "../projects.json";

export const EmblaCarousel = () => {
  const [emblaRef] = useEmblaCarousel();

  // return (
  //   <div className="embla" ref={emblaRef}>
  //     <div className="embla__container">
  //       {projects.map((project) => {
  //         return (
  //           <div key={project.id} className="embla__slide">
  //             <ProjectCard key={project.id} project={project}></ProjectCard>
  //           </div>
  //         );
  //       })}
  //     </div>
  //   </div>
  // );

  return (
    <>
      {/* <div>← →</div> */}
      <div className="w-full flex snap-x overflow-x-auto scrollbar-hide snap-mandatory gap-6">
        {projects.map((project) => {
          return (
            <div
              key={project.id}
              className="snap-start sm:snap-center w-full md:w-[80%] shrink-0"
            >
              <ProjectCard key={project.id} project={project}></ProjectCard>
            </div>
          );
        })}
      </div>
    </>
  );
};
