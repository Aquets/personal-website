import React from "react";
import Pill from "./Pill";
import ImageOrVideo from "./ImageOrVideo";
import { basePath } from "../../next.config";

type ProjectProps = {
  project: any;
  small?: boolean;
};

const ProjectCard = ({ project, small = false }: ProjectProps) => {
  const cover = basePath + "/images/projects/" + project.id + "/cover.png";

  return (
    <div className="flex flex-col gap-1 sm:gap-3" key={project.id}>
      <a
        href={basePath + "/projects/" + project.id}
        className="hover:underline no-underline"
      >
        <div className="flex flex-col gap-3">
          <div className="overflow-hidden rounded-lg">
            <ImageOrVideo
              src={project.cover}
              altText={project.name}
              // className="hover:scale-110 transition-transform duration-500 cursor-pointer"
              className="cursor-pointer"
            />
          </div>

          {small ? (
            <h3 className=" text-base md:text-lg font uppercase">
              {project.name}
            </h3>
          ) : (
            <h3 className="text-large font uppercase">{project.name}</h3>
          )}
        </div>
      </a>

      <div className="flex flex-row flex-wrap gap-1">
        {project.categories.map((cat: string) => {
          return <Pill key={cat} content={cat} small={true}></Pill>;
        })}
      </div>
    </div>
  );
};

export default ProjectCard;
