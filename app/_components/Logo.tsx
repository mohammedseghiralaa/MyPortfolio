"use client";

import { JSX } from "react";

// Logo Component
export default function Logo(): JSX.Element {
  return (
    <h1
      className="text-3xl font-extrabold tracking-wid
      e show-default-cursor transition-all duration-500 
      md:text-4xl hover:scale-105 cursor-pointer "
      style={{
        color: "var(--text-color)",
        transition: "color 0.3s",
      }}
    >
      Web
      <span
        style={{
          color: "var(--color-primary)",
          transition: "color 0.3s",
        }}
      >
        Dev
      </span>
    </h1>
  );
}
