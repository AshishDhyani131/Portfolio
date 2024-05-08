import React from "react";
import Heading from "./Heading";
import linkedinLogo from "../assets/linkedin-in.svg";
import { SocialData } from "../../data";
export default function Footer() {
  return (
    <footer className="py-20 bg-grey-150 relative">
      <a
        href="#"
        className="absolute top-0 left-1/2 -translate-y-1/2 -translate-x-1/2 p-4 bg-rose-500"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-8 h-8 stroke-2 text-white"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="m4.5 18.75 7.5-7.5 7.5 7.5"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="m4.5 12.75 7.5-7.5 7.5 7.5"
          />
        </svg>
      </a>
      <div className="flex item-center justify-center gap-6">
        {SocialData.map((socialIcon, index) => {
          return (
            <a href="#" key={index}>
              <div className="p-4 bg-grey-50 active:bg-primary-150 focus:bg-primary-50 duration-300">
                <ion-icon src={socialIcon}></ion-icon>
              </div>
            </a>
          );
        })}
      </div>
    </footer>
  );
}
