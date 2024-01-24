"use client";
import React from "react";
import Image from "next/image";
import parse from "html-react-parser";
import Pill from "./Pill";
import SectionHeader from "./SectionHeader";
import ImageOrVideo from "./ImageOrVideo";
import { basePath } from "../../next.config";

type ProjectPresentationProps = {
  project: any;
};

const ProjectPresentation = ({ project }: ProjectPresentationProps) => {
  return (
    <>
      <div className="flex flex-col gap-5">
        <div className="flex flex-row justify-between">
          <h1 className="text-large font uppercase">
            {project.name} <sup className="text-small">{project.year}</sup>
          </h1>
        </div>
        <div className="overflow-hidden rounded-lg">
          <ImageOrVideo src={project.cover} altText={project.name} />
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
                  <ImageOrVideo src={image} altText={image} />
                </div>
              );
            })
          : null}
      </div>
      {project.collaborators.length > 0 ? (
        <div>
          <SectionHeader title="Team"></SectionHeader>
          <div>
            {project.collaborators
              ? project.collaborators.map((collaborator: string) => {
                  return (
                    <p className="text-small" key={collaborator}>
                      {collaborator}
                    </p>
                  );
                })
              : null}
          </div>
        </div>
      ) : null}
    </>
  );
};

export default ProjectPresentation;
