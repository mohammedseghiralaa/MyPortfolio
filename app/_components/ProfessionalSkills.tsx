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
    <div className=" flex flex-col items-center justify-center pt-8">
      <Title>My Prefessional Skills</Title>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 pt-5">
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
