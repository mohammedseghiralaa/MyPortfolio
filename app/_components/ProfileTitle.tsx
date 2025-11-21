"use client";
import React, { JSX } from "react";
import { Typewriter } from "react-simple-typewriter";
import { useInfoCv } from "@/app/context/CvContext";
import Spinner from "./Spinner";
export default function ProfileTitle(): JSX.Element {
  const { skills, myDescription } = useInfoCv();
  if (!skills || !myDescription) {
    return <Spinner />;
  }
  return (
    <div className="flex flex-col gap-4 md:gap-5">
      <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-6xl font-bold text-(--text-color)">
        Hello, I&apos;m
        <span className="text-(--color-primary) transition-colors duration-300">
          {" "}
          Alaaeddine
        </span>
      </h1>

      <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-cyan-400 min-h-[3rem] sm:min-h-[3.5rem] md:min-h-[4rem] lg:min-h-[4.5rem] xl:min-h-[5rem] leading-tight">
        <Typewriter
          words={skills}
          loop={0} // 0 = infinite loop
          cursor
          cursorStyle="|"
          typeSpeed={100}
          deleteSpeed={50}
          delaySpeed={2000}
        />
      </h1>

      <p className="text-base sm:text-xl md:text-2xl max-w-full md:max-w-[500px] lg:max-w-[600px] text-[var(--color-secondary)]">
        {myDescription}
      </p>
    </div>
  );
}
