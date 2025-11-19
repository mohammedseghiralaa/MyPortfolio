"use client";
import { JSX } from "react";
import AboutImage from "./AboutImage";

export default function AboutCart(): JSX.Element {
  return (
    <div className="flex flex-col md:flex-row items-center md:items-start justify-between w-full px-3  md:px-9 lg:px-17 pt-10  gap-8">
      <p
        style={{
          color: "var(--text-color)",
          transition: "color 0.3s",
        }}
        className="flex-2 text-base leading-relaxed  sm:text-lg md:text-xl lg:text-2xl text-stone-300 text-center md:text-left"
      >
        I’m{" "}
        <span
          style={{
            color: "var(--color-primary)",
            transition: "color 0.3s",
          }}
        >
          Mohammed Seghir Alaaeddine
        </span>{" "}
        , a web developer passionate about creating seamless and engaging
        digital experiences. I study at the Higher School of Computer Science,
        Sidi Bel-Abbès (ESI-SBA), where I continuously enhance my skills and
        knowledge in web development. I enjoy tackling challenges, finding
        creative solutions, and building projects that make a meaningful impact.
        I love learning, innovating, and turning ideas into real, enjoyable
        experiences.
      </p>
      <AboutImage />
    </div>
  );
}
