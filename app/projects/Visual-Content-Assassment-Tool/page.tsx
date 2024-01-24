import React from "react";
import ProjectPresentation from "../../components/ProjectPresentation";
import projects from "../../projects.json";

const page = () => {
  const project: any = projects.find(
    (i: any) => i.id === "Visual-Content-Assassment-Tool"
  );
  return (
    <main className="container main-content">
      <ProjectPresentation project={project}></ProjectPresentation>
    </main>
  );
};

export default page;
