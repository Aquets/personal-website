import React from "react";
import projects from "../projects.json";
import ProjectCard from "../components/ProjectCard";

const Projects = () => {
  return (
    <main className="container main-content">
      <div className="grid grid-cols-1 gap-14 md:gap-52">
        {projects.map((project) => {
          return <ProjectCard key={project.id} project={project}></ProjectCard>;
        })}
      </div>
    </main>
  );
};

export default Projects;
