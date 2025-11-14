import { JSX } from "react";
import TechnicalSkills from "./TechnicalSkills";
import ProfessionalSkills from "./ProfessionalSkills";
export default function Skills(): JSX.Element {
  return (
    <div className="pt-22 px-17">
      <div>
        <TechnicalSkills />
        <ProfessionalSkills />
      </div>
    </div>
  );
}
