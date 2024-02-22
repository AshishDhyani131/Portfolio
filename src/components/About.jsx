import React from "react";
import Heading from "./Heading";
import ProgressBar from "./ProgressBar";
import Profile from "../assets/portfolioPicture.jpg";

export default function About() {
  return (
    <section className="mt-20" id="about">
      <Heading>About</Heading>
      <div className="container mt-16 px-4 grid grid-cols-2 lg:grid-cols-4  gap-y-8">
        <div className="flex justify-center items-center flex-col text-neutral-600">
          <div className="bg-primary-150 w-24 h-20 flex items-center justify-center  bgClip">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-8 h-8 stroke-white fill-white "
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m3.75 13.5 10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75Z"
              />
            </svg>
          </div>
          <h3 className="mt-3 font-semibold text-xl">Fast</h3>
          <p className="text-center text-xs">
            Fast load times and lag free interaction, my highest priority.
          </p>
        </div>
        <div className="flex justify-center items-center flex-col text-neutral-600 h-full">
          <div className="bg-primary-150 w-24 h-20 flex items-center justify-center  bgClip">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-8 h-8 stroke-white stroke-2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 18v-5.25m0 0a6.01 6.01 0 0 0 1.5-.189m-1.5.189a6.01 6.01 0 0 1-1.5-.189m3.75 7.478a12.06 12.06 0 0 1-4.5 0m3.75 2.383a14.406 14.406 0 0 1-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 1 0-7.517 0c.85.493 1.509 1.333 1.509 2.316V18"
              />
            </svg>
          </div>
          <h3 className="mt-3 font-semibold text-xl">Intuitive</h3>
          <p className="text-center text-xs">
            Strong preference for easy to use UI/UX.
          </p>
        </div>
        <div className="flex justify-center items-center flex-col text-neutral-600 h-full">
          <div className="bg-primary-150 w-24 h-20 flex items-center justify-center  bgClip">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-8 h-8 stroke-white stroke-2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 17.25v1.007a3 3 0 0 1-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0 1 15 18.257V17.25m6-12V15a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 15V5.25m18 0A2.25 2.25 0 0 0 18.75 3H5.25A2.25 2.25 0 0 0 3 5.25m18 0V12a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 12V5.25"
              />
            </svg>
          </div>
          <h3 className="mt-3 font-semibold text-xl">Responsive</h3>
          <p className="text-center text-xs">
            My layout will work on any device, big or small.
          </p>
        </div>
        <div className="flex justify-center items-center flex-col text-neutral-600 h-full">
          <div className="bg-primary-150 w-24 h-20 flex items-center justify-center  bgClip">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-8 h-8 fill-white"
            >
              <path
                fillRule="evenodd"
                d="M9.315 7.584C12.195 3.883 16.695 1.5 21.75 1.5a.75.75 0 0 1 .75.75c0 5.056-2.383 9.555-6.084 12.436A6.75 6.75 0 0 1 9.75 22.5a.75.75 0 0 1-.75-.75v-4.131A15.838 15.838 0 0 1 6.382 15H2.25a.75.75 0 0 1-.75-.75 6.75 6.75 0 0 1 7.815-6.666ZM15 6.75a2.25 2.25 0 1 0 0 4.5 2.25 2.25 0 0 0 0-4.5Z"
                clipRule="evenodd"
              />
              <path d="M5.26 17.242a.75.75 0 1 0-.897-1.203 5.243 5.243 0 0 0-2.05 5.022.75.75 0 0 0 .625.627 5.243 5.243 0 0 0 5.022-2.051.75.75 0 1 0-1.202-.897 3.744 3.744 0 0 1-3.008 1.51c0-1.23.592-2.323 1.51-3.008Z" />
            </svg>
          </div>
          <h3 className="mt-3 font-semibold text-xl">Dynamic</h3>
          <p className="text-center text-xs">
            Websites don't have to be static, I love making pages come to life.
          </p>
        </div>
      </div>
      <div className="lg:grid lg:grid-cols-2">
        <div className="container mt-16 px-4 flex flex-col lg:grid-cols-2 items-center justify-center text-neutral-600">
          <img
            src={Profile}
            alt="profile picture"
            className="object-cover object-top  bgClip w-72 h-72"
          />

          <h3 className="mt-3 font-semibold text-xl">Who's this guy</h3>
          <p className="text-center text-xs">
            I'm a Front-End Developer for Samsung SDS in Gurugram, Haryana. I
            have serious passion for UI effects, animations and creating
            intuitive, dynamic user experiences.<br></br>{" "}
            <a
              href="#"
              className="text-blue-500 hover:text-blue-600 duration-300"
            >
              Let's make something special
            </a>
            .
          </p>
        </div>
        <div className="container mt-16 px-8 flex flex-col gap-4">
          <ProgressBar width="100%">CSS</ProgressBar>
          <ProgressBar width="100%">HTML</ProgressBar>
          <ProgressBar width="100%">javascript</ProgressBar>
          <ProgressBar width="90%">Tailwind CSS</ProgressBar>
          <ProgressBar width="90%">DSA</ProgressBar>
          <ProgressBar width="80%">react</ProgressBar>
          <ProgressBar width="60%">Nodejs</ProgressBar>
        </div>
      </div>
    </section>
  );
}
