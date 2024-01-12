import React from "react";
import SectionHeader from "../components/SectionHeader";
import Pill from "../components/Pill";

const Info = () => {
  const experiences = [
    {
      year: "2023",
      title: "Master degree in Communication Design",
      place: "Politecnico di Milano",
    },
    {
      year: "2022",
      title: "Digital Methods Summer School",
      place: "University of Amsterdam",
    },
    {
      year: "2022",
      title: "Internship at Density Design Lab",
      place: "Density Design Lab",
    },
    {
      year: "2022",
      title: "SMART Data Sprint",
      place: "iNOVA Media Lab",
    },
    {
      year: "2020",
      title: "Work experience",
      place: "Saiver srl",
    },
    {
      year: "2020",
      title: "Bachelor Degree in Communication Design",
      place: "Politecnico di Milano",
    },
  ];

  const skills = [
    "Figma",
    "Illustrator",
    "Photoshop",
    "InDesign",
    "AfterEffects",
    "Premier",
    "Blender",
    "HTML",
    "CSS",
    "JavaScript",
    "P5.js",
    "Three.js",
    "React",
    "Wordpress",
    "Python",
    "C++",
    "Processing",
    "Arduino",
  ];

  return (
    <main className="container main-content">
      <div>
        <SectionHeader title="Overview" />
        <p className="text-large">
          Hi! I am Alessandro Quets. I am a digital designer based in Milan. I
          have coding skills and a strong interest in web design, interaction
          design and data visualization. My aim is to create visual experiences
          that captivate, engage and inform the users.
          <br />
          <br />I use code as my preferred tool to design and present the
          projects. Through the experiences at{" "}
          <a target="_blank" href="https://densitydesign.org/">
            Density Design Lab
          </a>
          ,{" "}
          <a
            target="_blank"
            href="https://wiki.digitalmethods.net/Dmi/DmiAbout"
          >
            DMI Summer School
          </a>{" "}
          and{" "}
          <a
            target="_blank"
            href="https://www.fcsh.unl.pt/eventos/smart-data-sprint-2022/"
          >
            SMART Data Sprint
          </a>{" "}
          I delved into the use of the code to manipule data and create static
          and interactive visualizations.
          <br />
          <br />
          In October 2023 I completed my studies in Communication Design at
          Politecnico di Milano. With my master{"'"}s thesis I focused on user
          collaboration in enhancing the visual side of Wikipedia. Utilizing
          UX/UI Design and data visualization, I developed a tool aimed at
          assisting Wikipedians in bridging gaps in visual content.
        </p>
      </div>
      <div>
        <SectionHeader title="Experiences" />
        <div className="flex flex-col w-full">
          {experiences.map((exp, index) => {
            return (
              <div
                key={index}
                className={`flex flex-col items-left sm:items-center w-full py-8 gap-0 text-xl md:flex-row md:gap-10 border-color ${
                  index === 0 ? "border-0" : "border-t"
                }`}
              >
                <div className="text-sm">{exp.year}</div>
                <div>{exp.title}</div>
                <div className="grow md:text-right text-sm">{exp.place}</div>
              </div>
            );
          })}
        </div>
      </div>
      <div>
        <SectionHeader title="Software and Tools" />
        <div className="flex flex-row flex-wrap gap-3">
          {skills.map((skill) => {
            return <Pill key={skill} content={skill}></Pill>;
          })}
        </div>
      </div>
      <div className="flex flex-col gap-14">
        <div>
          <SectionHeader title="Mail" />
          <p className="text-large">alessandroquets@gmail.com</p>
        </div>
        <div>
          <SectionHeader title="Instagram" />
          <p className="text-large">
            <a
              className="no-underline"
              target="_blank"
              href="https://www.instagram.com/alessandroquets/"
            >
              @alessandroquets
            </a>
          </p>
        </div>
        <div>
          <SectionHeader title="GitHub" />
          <p className="text-large">
            <a
              className="no-underline"
              target="_blank"
              href="https://github.com/Aquets"
            >
              aquets
            </a>
          </p>
        </div>
      </div>
    </main>
  );
};

export default Info;
