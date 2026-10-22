"use client";
import React, { JSX } from "react";
import SubTitle from "./SubTitle";
import { Brain } from "lucide-react";
import Technologies from "./Technologies";
import { useSkills } from "../context/SkillsContext";
import Spinner from "./Spinner";

export default function MachineLearning(): JSX.Element {
  const { machineLearning } = useSkills();
  if (!machineLearning) return <Spinner />;
  return (
    <div className="flex flex-col items-center">
      <SubTitle
        title="Machine Learning"
        icon={
          <Brain style={{ color: "var(--text-color)" }} className="w-7 h-7" />
        }
      />
      <Technologies technologies={machineLearning} />
    </div>
  );
}
