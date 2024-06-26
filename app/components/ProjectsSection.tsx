import React from "react";
import projects from "../projects.json";
import ProjectCard from "./ProjectCard";

const ProjectsSection = () => {
  return (
    /* <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
      {projects.map((project) => {
        return <ProjectCard key={project.id} project={project}></ProjectCard>;
      })}
    </div> */
    <div className="w-full flex gap-12 snap-x snap-mandatory overflow-x-auto pb-3 pt-3">
      {projects.map((project) => {
        return (
          <div
            key={project.id}
            className="snap-center shrink-0 w-full sm:w-9/12"
          >
            <ProjectCard key={project.id} project={project}></ProjectCard>
          </div>
        );
      })}
    </div>
  );
};

export default ProjectsSection;
