import React from "react";
import Heading from "./Heading";
import ProjectButton from "./ProjectButton";
import { useState } from "react";
import { projectsData } from "../../data";
import Project from "./Project";
export default function Projects() {
  const [activeBtn, setActiveBtn] = useState("all");
  return (
    <section className="mt-20 py-10 bg-neutral-200 lg:px-32" id="projects">
      <Heading>Projects</Heading>
      <div className="container mt-16 px-6 lg:px-20 grid grid-cols-4 gap-x-4">
        <ProjectButton activeBtn={activeBtn} onClick={setActiveBtn}>
          all
        </ProjectButton>
        <ProjectButton activeBtn={activeBtn} onClick={setActiveBtn}>
          react
        </ProjectButton>
        <ProjectButton activeBtn={activeBtn} onClick={setActiveBtn}>
          javascript
        </ProjectButton>
        <ProjectButton activeBtn={activeBtn} onClick={setActiveBtn}>
          html/css
        </ProjectButton>
      </div>
      <div className="grid grid-cols-2 lg:grid-cols-3 px-4 mt-8">
        {projectsData.map((project, index) => {
          if (!project.projectType.includes(activeBtn)) return;
          return <Project project={project} key={index}></Project>;
        })}
      </div>
    </section>
  );
}
