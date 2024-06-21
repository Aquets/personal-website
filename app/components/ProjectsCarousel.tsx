import React from "react";
import ProjectCard from "./ProjectCard";
import projects from "../projects.json";

export const ProjectsCarousel = () => {
  function nextSlide() {
    var carousel = document.getElementById("carousel");
    if (carousel) {
      var xPos = carousel.scrollLeft;
      carousel.scroll({
        left: xPos + (window.innerWidth * 3) / 5,
        behavior: "smooth",
      });
    }
  }

  function prevSlide() {
    var carousel = document.getElementById("carousel");
    if (carousel) {
      var xPos = carousel.scrollLeft;
      carousel.scroll({
        left: xPos - (window.innerWidth * 3) / 5,
        behavior: "smooth",
      });
    }
  }

  return (
    <div className="-mt-10">
      <div className="w-full justify-end gap-1 hidden sm:flex mb-2">
        <button
          onClick={prevSlide}
          className="w-8 h-8 flex justify-center items-center rounded-full border border-black"
        >
          ←
        </button>
        <button
          onClick={nextSlide}
          className="w-8 h-8 flex justify-center items-center rounded-full border border-black"
        >
          →
        </button>
      </div>
      <div
        className="w-full flex snap-x overflow-x-auto scrollbar-hide snap-mandatory gap-6"
        id="carousel"
      >
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
    </div>
  );
};
