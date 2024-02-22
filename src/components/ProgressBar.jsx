import React from "react";

export default function ProgressBar({ width, children }) {
  return (
    <div className="text-[8px] font-bold bg-neutral-300 relative h-6 text-white">
      <div
        className={`absolute top-0 left-0 h-full  bg-primary-200`}
        style={{ width: `${width}` }}
      >
        <div className="w-[70px] h-full flex items-center justify-center bg-primary-50 uppercase">
          {children}
        </div>
      </div>
    </div>
  );
}
