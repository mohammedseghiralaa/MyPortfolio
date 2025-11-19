"use client";
import React, { JSX } from "react";
import SkillCircle from "./SkillCircle";
import Title from "./Title";

const skills = [
  { percentage: 90, label: "Creativity" },
  { percentage: 65, label: "Communication" },
  { percentage: 75, label: "Problem Solving" },
  { percentage: 85, label: "Teamwork" },
];

export default function ProfessionalSkills(): JSX.Element {
  return (
    <div className="flex flex-col items-center justify-center pt-8 px-4 sm:px-6 md:px-12">
      <Title>My Professional Skills</Title>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-10 md:gap-16 pt-5 w-full justify-items-center">
        {skills.map((skill, index) => (
          <SkillCircle
            key={index}
            percentage={skill.percentage}
            label={skill.label}
          />
        ))}
      </div>
    </div>
  );
}
