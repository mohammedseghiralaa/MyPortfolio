import React, { JSX, ReactNode } from "react";
type Tech = {
  name: string;
  image: ReactNode;
};
type OneSkillProps = {
  tech: Tech;
};
export default function OneSkill({ tech }: OneSkillProps): JSX.Element {
  return (
    <div className="w-40 h-40 border-2 border-gray-700 rounded-2xl  hover:border-purple-500 hover:scale-105 transition-all duration-300 flex flex-col items-center justify-center gap-4 shadow-lg">
      {tech.image}
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
