import React from "react";

export default function NavBar() {
  return (
    <div className="w-full bg-[#100d12] py-3 px-4 flex justify-end border-b-4 border-b-solid border-b-primary-150 sticky">
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
          d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
        />
      </svg>
    </div>
  );
}
