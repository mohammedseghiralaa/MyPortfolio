"use client";
import React, { JSX } from "react";
import { useTheme } from "../context/ThemeContext";
import Image from "next/image";

type Tech = {
  name: string;
  icon: string;
  image?: string;
};

type OneSkillProps = {
  tech: Tech;
};

export default function OneSkill({ tech }: OneSkillProps): JSX.Element {
  const { theme } = useTheme();
  return (
    <div
      className="
      w-32 sm:w-36 md:w-40 lg:w-44 xl:w-48 
      h-32 sm:h-36 md:h-40 lg:h-44 xl:h-48 
      border-2 border-gray-700 rounded-2xl 
      hover:border-purple-500 hover:scale-105 
      transition-all duration-300 
      flex flex-col items-center justify-center gap-3 sm:gap-4 shadow-lg
      p-2 sm:p-3 md:p-4
    "
    >
      {tech.image ? (
        <Image
          src={tech.image}
          alt={tech.name}
          width={45}
          height={45}
          className="sm:w-14 sm:h-14 md:w-16 md:h-16 lg:w-20 lg:h-20"
        />
      ) : (
        <i
          className={`${tech.icon} 
          text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 
          ${theme === "dark" ? "text-stone-100" : "text-gray-800"}`}
          title={tech.name}
        ></i>
      )}

      <span
        style={{
          color: "var(--text-color)",
          transition: "color 0.3s",
        }}
        className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl font-bold text-center"
      >
        {tech.name}
      </span>
    </div>
  );
}
