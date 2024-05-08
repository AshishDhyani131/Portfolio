import React from "react";
import { motion } from "framer-motion";
export default function Heading({ color = null, children }) {
  return (
    <motion.h2
      className={`relative text-center  uppercase  font-bold text-4xl pb-1 md:pb-2  after:contents-[''] after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:w-16 md:after:w-18  after:border-2 lg:after:border-[3px]  after:border-solid text-${
        color ? "white" : "black"
      } `}
      initial={{
        x: "-25%",
        opacity: 0,
      }}
      whileInView={{
        x: "0",
        opacity: 1,
      }}
      viewport={{
        once: true,
        margin: "-200px",
      }}
      transition={{
        duration: 1,
      }}
    >
      {children}
    </motion.h2>
  );
}
