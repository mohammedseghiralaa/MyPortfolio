import { JSX } from "react";
import TechnicalSkills from "./TechnicalSkills";
import ProfessionalSkills from "./ProfessionalSkills";
export default function Skills(): JSX.Element {
  return (
    <div className="pt-10 px-6 sm:pt-22 sm:px-17">
      <div>
        <TechnicalSkills />
        <ProfessionalSkills />
      </div>
    </div>
  );
}
