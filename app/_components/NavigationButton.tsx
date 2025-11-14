"use client";
import React, { JSX } from "react";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";
import NavButton from "./NavButton";
import { useProject } from "../context/ProjectContext";
export default function NavigationButton(): JSX.Element {
  const { goNext, goPrev, currentIndex, ProjectLength } = useProject();
  return (
    <div className="flex  sm:flex-row sm:justify-center justify-end items-center gap-4 pt-6 sm:pt-7">
      <NavButton disabled={currentIndex === 0} onClick={goPrev}>
        <FaArrowLeft />
      </NavButton>

      <NavButton disabled={currentIndex === ProjectLength - 1} onClick={goNext}>
        <FaArrowRight />
      </NavButton>
    </div>
  );
}
