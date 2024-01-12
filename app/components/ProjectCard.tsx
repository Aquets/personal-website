import React from "react";
import Image from "next/image";
import parse from "html-react-parser";
import Pill from "./Pill";

type ProjectProps = {
  project: any;
  small?: boolean;
};

const ProjectCard = ({ project, small = false }: ProjectProps) => {
  const cover =
    process.env.BASE_PATH + "/images/projects/" + project.id + "/cover.png";

  return (
    <div className="flex flex-col gap-3" key={project.id}>
      <a
        className="overflow-hidden rounded-lg"
        href={"/projects/" + project.id}
      >
        <Image
          src={cover}
          alt={project.name}
          width={720}
          height={720}
          style={{
            width: "100%",
            height: "100%",
          }}
          className="object-cover hover:scale-110 transition duration-500 cursor-pointer"
        />
      </a>
      {small ? (
        <h3 className=" text-base md:text-lg font uppercase">
          {project.name}
          {/* <sup className="text-sm">{project.year}</sup> */}
        </h3>
      ) : (
        <h3 className="text-large font uppercase">
          {project.name}
          {/* <sup className="text-sm">{project.year}</sup> */}
        </h3>
      )}

      <div className="flex flex-row flex-wrap gap-1">
        {project.categories.map((cat: string) => {
          return <Pill key={cat} content={cat} small={true}></Pill>;
        })}
      </div>

      {/* <p className=" line-clamp-2">{parse(project.description)}</p>

      <a href={"/projects/" + project.id}>Read more</a>
      <div>
        {project.categories.map((cat: string) => {
          return <p key={cat}>{cat}</p>;
        })}
      </div> */}
    </div>
  );
};

export default ProjectCard;
