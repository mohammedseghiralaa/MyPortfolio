import React, { JSX } from "react";
import ProjectInfo from "./ProjectInfo";
import ProjectImage from "./ProjectImage";
import ProjectSkills from "./ProjectSkills";

export default function ProjectCart(): JSX.Element {
  return (
    <div className="flex flex-col justfy-center">
      <div className="flex flex-col-reverse sm:flex-row items-center sm:items-start justify-between gap-6 pt-8">
        <ProjectInfo />
        <ProjectImage />
      </div>
      <ProjectSkills />
    </div>
  );
}
