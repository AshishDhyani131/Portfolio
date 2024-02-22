import React from "react";
import { useRef } from "react";
export default function NavBar() {
  const navRef = useRef(null);
  function handleClick() {
    navRef.current.classList.toggle("scale-y-100");
    navRef.current.classList.toggle("opacity-100");
  }
  return (
    <div className="relative w-full bg-[#100d12] py-3 px-4 flex justify-between border-b-4 border-b-solid border-b-primary-150">
      <ul
        ref={navRef}
        className="absolute  top-[3.75rem] left-0 right-0 opacity-0  uppercase text-base font-medium px-4 py-6 z-10 text-white bg-neutral-600 origin-top scale-y-0 duration-500 ease-out flex gap-3 flex-col md:p-0 md:opacity-100  md:scale-y-100 md:static md:bg-inherit md:gap-10 md:flex-row md:items-center md:justify-center  lg:px-20"
      >
        <li className="">
          <a href="#">home</a>
        </li>
        <li className="">
          <a href="#about">about</a>
        </li>
        <li className="">
          <a href="#projects">Projects</a>
        </li>
        <li className="">
          <a href="#contact">contact</a>
        </li>
      </ul>
      <button className=" md:hidden" onClick={handleClick}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-8 h-8 stroke-white stroke-2 "
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
          />
        </svg>
      </button>
    </div>
  );
}
