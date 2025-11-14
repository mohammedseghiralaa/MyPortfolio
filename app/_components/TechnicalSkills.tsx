import { JSX } from "react";
import FrontEndSkills from "./FrontEndSkills";
import BackEndSkills from "./BackEndSkills";
import Tools from "./Tools";
import Title from "./Title";

export default function TechnicalSkills(): JSX.Element {
  return (
    <div className="flex flex-col items-center">
      <Title>My Technical Skills</Title>
      <FrontEndSkills />
      <BackEndSkills />
      <Tools />
    </div>
  );
}
