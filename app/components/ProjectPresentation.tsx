"use client";
import React from "react";
import Image from "next/image";
import { usePathname } from "next/navigation";
import parse from "html-react-parser";
import Pill from "./Pill";
import SectionHeader from "./SectionHeader";
import ProjectCard from "./ProjectCard";
import projects from "../projects.json";

const ProjectPresentation = () => {
  /*  const lastSegmentOfUrl = usePathname()
    .substring(usePathname().lastIndexOf("/") + 1)
    .replace(".html", "");
  var project: any = projects.find((i: any) => i.id === lastSegmentOfUrl);
  project ? projects[0] : project;

  const cover = "/images/projects/" + project.id + "/cover.png";
  const projectIndex = projects.findIndex((p: any) => p.id == project.id);

  var indexes: number[] = [];
  for (let i = 0; i < 3; i++) {
    var index = 0;
    if (i == 0) {
      index = projectIndex;
    } else {
      index = indexes[indexes.length - 1];
    }

    if (index >= projects.length - 1) {
      index = index - projects.length + 1;
    } else {
      index++;
    }

    indexes.push(index);
  }
  const otherProjects = [
    projects.at(indexes[0]),
    projects.at(indexes[1]),
    projects.at(indexes[2]),
  ];

  return (
    <>
      <div className="flex flex-col gap-5">
        <div className="flex flex-row justify-between">
          <h1 className="text-large font uppercase">
            {project.name} <sup className="text-sm">{project.year}</sup>
          </h1>
        </div>
        <div className="overflow-hidden rounded-lg">
          <Image
            src={cover}
            alt={project.name}
            width={1080}
            height={1080}
            style={{
              width: "100%",
              height: "100%",
            }}
            className="object-cover"
          />
        </div>
      </div>
      <div className="flex flex-row flex-wrap justify-between gap-10 lg:gap-0">
        <p className="text-large basis-full lg:basis-3/4 pr-10">
          {parse(project.description)}
        </p>
        <div className="flex flex-col gap-8 basis-full lg:basis-1/4">
          <div>
            <SectionHeader title="Client"></SectionHeader>
            <p className="text-xl">{project.client}</p>
          </div>
          <div>
            <SectionHeader title="Role"></SectionHeader>
            <p className="text-xl">{project.role}</p>
          </div>
          <div>
            <SectionHeader title="Categories"></SectionHeader>
            <div className="flex flex-col gap-2 items-start">
              {project.categories.map((cat: string) => {
                return <Pill key={cat} small={true} content={cat}></Pill>;
              })}
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-5">
        {project.images
          ? project.images.map((image: string) => {
              return (
                <div className="overflow-hidden rounded-lg" key={image}>
                  <Image
                    src={"/images/projects/" + project.id + "/" + image}
                    alt={image}
                    width={1080}
                    height={1080}
                    style={{
                      width: "100%",
                      height: "100%",
                    }}
                    className="object-cover"
                  />
                </div>
              );
            })
          : null}
      </div>
      {project.collaborators ? (
        <div>
          <SectionHeader title="Team"></SectionHeader>
          <div>
            {project.collaborators
              ? project.collaborators.map((collaborator: string) => {
                  return (
                    <p className="text-xl" key={collaborator}>
                      {collaborator}
                    </p>
                  );
                })
              : null}
          </div>
        </div>
      ) : null}
      <div className="pt-20">
        <SectionHeader title="Other projects"></SectionHeader>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {otherProjects.map((p: any) => {
            return (
              <ProjectCard key={p.id} project={p} small={true}></ProjectCard>
            );
          })}
        </div>
      </div>
    </>
  ); */
  return <>progetto</>;
};

export default ProjectPresentation;
