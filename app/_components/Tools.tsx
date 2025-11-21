"use client";
import React, { JSX } from "react";
import SubTitle from "./SubTitle";
import { Terminal } from "lucide-react";
import Technologies from "./Technologies";
import { useSkills } from "../context/SkillsContext";
import Spinner from "./Spinner";
export default function Tools(): JSX.Element {
  const { tools } = useSkills();
  if (!tools) return <Spinner />;
  return (
    <div className="flex flex-col items-center">
      <SubTitle
        title="Tools"
        icon={
          <Terminal
            style={{ color: "var(--text-color)" }}
            className="w-7 h-7"
          />
        }
      />
      <Technologies technologies={tools} />
    </div>
  );
}
