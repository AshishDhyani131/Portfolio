import React from "react";

export default function ProjectButton({ activeBtn, children, onClick }) {
  const classes = `text-[9px] lg:text-xl uppercase font-bold py-1 px-2 ${
    activeBtn === children.toLowerCase()
      ? "bg-fuchsia-700 text-white"
      : "bg-transparent text-neutral-600"
  } duration-300 ease-in-out hover:bg-fuchsia-700 hover:text-white`;
  return (
    <button className={classes} onClick={() => onClick(children)}>
      {children}
    </button>
  );
}
