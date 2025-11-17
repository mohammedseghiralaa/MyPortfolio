"use client";
import React, { JSX } from "react";
import { FaDownload } from "react-icons/fa";
import { useInfoCv } from "../context/CvContext";

export default function DownloadCv(): JSX.Element {
  const { MyCv } = useInfoCv();
  return (
    <a
      href={MyCv}
      className="
        show-default-cursor
        relative inline-flex items-center overflow-hidden border-2 font-bold
        px-3 py-1.5 sm:px-4 sm:py-2 md:px-5 md:py-2.5 lg:px-6 lg:py-3
        text-xs sm:text-sm md:text-base lg:text-lg
        transition-all duration-500 hover:scale-105 focus:outline-none group rounded-xl
      "
      style={{
        color: "var(--text-color)",
        borderColor: "var(--primary-color)",
      }}
    >
      {/* Animated diagonal swipe */}
      <span
        className="
          absolute top-0 left-[-40px] h-full w-0 skew-x-12 transition-all duration-700 ease-in-out group-hover:w-[160%] -z-10 rounded-xl
        "
        style={{
          background:
            "linear-gradient(90deg, var(--color-primary), var(--primary-color), var(--text-color))",
        }}
      ></span>

      {/* Button content */}
      <span className="flex items-center gap-1 sm:gap-2 relative z-10">
        <span className="hidden sm:inline">Download CV</span>
        <span className="sm:hidden">CV</span>
        <FaDownload className="transition-transform duration-500 group-hover:translate-x-1.5 sm:group-hover:translate-x-2 group-hover:rotate-12" />
      </span>

      {/* Glow effect on hover */}
      <span
        className="absolute inset-0 rounded-xl opacity-0 transition-opacity duration-500 group-hover:opacity-100"
        style={{
          boxShadow: `0 0 20px 0 var(--primary-color)`,
        }}
      ></span>
    </a>
  );
}
