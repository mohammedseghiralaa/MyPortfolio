import React, { JSX } from "react";
import Title from "./Title";
import ProjectCart from "./ProjectCart";

export default function Projects(): JSX.Element {
  return (
    <div id="projects" className="px-6 sm:px-17 pt-22">
      <Title>My Project</Title>
      <ProjectCart />
    </div>
  );
}
