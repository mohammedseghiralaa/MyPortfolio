"use client";
import React from "react";
import SubTitle from "./SubTitle";
import { Server } from "lucide-react";
import Technologies from "./Technologies";
import { useSkills } from "../context/SkillsContext";
export default function BackEndSkills() {
  const { backEnd } = useSkills();
  return (
    <div className="flex flex-col items-center">
      <SubTitle
        title="BackEnd"
        icon={
          <Server style={{ color: "var(--text-color)" }} className="w-7 h-7" />
        }
      />
      <Technologies technologies={backEnd} />
    </div>
  );
}
