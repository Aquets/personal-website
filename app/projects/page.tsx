import React from "react";
import projects from "../projects.json";
import ProjectCard from "../components/ProjectCard";

const Projects = () => {
  return (
    <main className="container main-content">
      <div className="grid grid-cols-1 gap-20">
        {projects.map((project) => {
          return <ProjectCard key={project.id} project={project}></ProjectCard>;
        })}
      </div>
    </main>
  );
};

export default Projects;
