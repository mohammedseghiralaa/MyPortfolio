"use client";
import React, { JSX } from "react";
import { PenTool } from "lucide-react";
import SubTitle from "./SubTitle";
import Technologies from "./Technologies";
import { useSkills } from "../context/SkillsContext";
export default function FrontEndSkills(): JSX.Element {
  const { frontEnd } = useSkills();
  return (
    <div className="flex flex-col items-center">
      <SubTitle
        title="FrontEnd"
        icon={
          <PenTool
            style={{ color: "var(--text-color)" }}
            className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10"
          />
        }
      />

      <Technologies technologies={frontEnd} />
    </div>
  );
}
