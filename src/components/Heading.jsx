import React from "react";

export default function Heading({ textColor = "text-black", children }) {
  return (
    <h2
      className={`relative text-center  uppercase font-bold text-4xl pb-1 after:contents-[''] after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:w-16 after:border-2 after:border-solid after:border-black`}
    >
      {children}
    </h2>
  );
}
