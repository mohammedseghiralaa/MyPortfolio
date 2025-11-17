"use client";
import React, { JSX } from "react";
import { useTheme } from "../context/ThemeContext";
import Image from "next/image";
type Tech = {
  name: string;
  icon: string; // e.g., "devicon-nextjs-plain"
  image?: string; // optional image
};

type OneSkillProps = {
  tech: Tech;
};

export default function OneSkill({ tech }: OneSkillProps): JSX.Element {
  const { theme } = useTheme();
  return (
    <div className="w-40 h-40 border-2 border-gray-700 rounded-2xl hover:border-purple-500 hover:scale-105 transition-all duration-300 flex flex-col items-center justify-center gap-4 shadow-lg">
      {tech.image ? (
        <Image src={tech.image} alt={tech.name} width={60} height={60} />
      ) : (
        <i
          className={`${tech.icon} text-3xl sm:text-4xl md:text-6xl ${theme === "dark" ? "text-stone-100" : ""}`}
          title={tech.name}
        ></i>
      )}

      <span
        style={{
          color: "var(--text-color)",
          transition: "color 0.3s",
        }}
        className="text-xl font-bold"
      >
        {tech.name}
      </span>
    </div>
  );
}
