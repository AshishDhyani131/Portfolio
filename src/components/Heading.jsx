import React from "react";

export default function Heading({ color = null, children }) {
  return (
    <h2
      className={`relative text-center  uppercase  font-bold text-4xl pb-1 md:pb-2  after:contents-[''] after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:w-16 md:after:w-18  after:border-2 lg:after:border-[3px]  after:border-solid  after:${
        color ? "border-white" : "border-black"
      } text-${color ? "white" : "black"}`}
    >
      {children}
    </h2>
  );
}
