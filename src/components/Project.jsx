import React from "react";

export default function Project({ project }) {
  return (
    <div className="h-[296px] w-full relative group" key={project.id}>
      <div className="absolute top-3 left-1/2 -translate-x-1/2 text-center opacity-0 group-hover:opacity-100 group-hover:translate-y-10 duration-500 ease-in-out">
        <h3 className="text-base text-black font-bold">
          {project.projectName}
        </h3>
        <p className="text-xs font-semibold text-fuchsia-700">
          {project.techStack.join("/")}
        </p>
      </div>
      <img
        src={project.imgSrc}
        alt="project img"
        className="h-full w-full object-cover group-hover:opacity-0 duration-300 ease-in-out"
      />
      <a
        target="_blank"
        href={project.link}
        className="absolute bottom-3 left-1/2 -translate-x-1/2 text-[9px]  md:text-sm
         border-2 border-solid border-fuchsia-700 uppercase px-1 md:px-5 py-1 opacity-0 group-hover:opacity-100 group-hover:-translate-y-10 duration-300 ease-in-out hover:bg-fuchsia-700 hover:text-white"
      >
        Learn More
      </a>
    </div>
  );
}
