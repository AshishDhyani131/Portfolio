import React from "react";
import Canvas from "./Canvas";

export default function Header() {
  return (
    <header className="h-screen w-screen relative bg-[#141016] ">
      <Canvas></Canvas>
      <div className="absolute top-1/2 -translate-y-1/2 w-full text-center text-white ">
        <h1 className=" text-2xl font-semibold tracking-wide lg:text-4xl">
          Hello, I'm <span>Ashish Dhyani</span>. <br /> I'm a front-end
          developer
        </h1>
        <a
          href="#projects"
          className="border-2 border-solid border-white inline-block font-semibold px-4 py-2  mt-5 "
        >
          View my work &rarr;
        </a>
      </div>
    </header>
  );
}
