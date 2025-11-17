import React, { JSX, ReactNode } from "react";
import OneSkill from "./OneSkill";
type Tech = {
  name: string;
  icon: string;
  image: string;
};
type TechProps = {
  technologies: Tech[];
};
export default function Technologies({ technologies }: TechProps): JSX.Element {
  return (
    <div className="flex justify-center gap-6  flex-wrap">
      {technologies.map((tech) => (
        <OneSkill tech={tech} key={tech.name} />
      ))}
    </div>
  );
}
