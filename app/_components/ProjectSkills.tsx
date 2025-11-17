"use client";
import React, { JSX } from "react";
import UrlProject from "./UrlProject";
import NavigationButton from "./NavigationButton";
import { useProject } from "../context/ProjectContext";
import { motion, AnimatePresence } from "framer-motion";

export default function ProjectSkills(): JSX.Element {
  const { currentProject } = useProject();
  const { skills } = currentProject;

  return (
    <div className="flex flex-col sm:flex-row sm:items-center justify-between mt-4 gap-4 sm:gap-20">
      <div className="flex flex-1  sm:flex-row  sm:items-center justify-between border-b border-gray-500 pb-2 sm:pb-1 gap-2 sm:gap-4   ">
        <AnimatePresence mode="wait">
          <motion.h3
            key={currentProject.id}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 20 }}
            transition={{ duration: 0.5 }}
            className="  text-sm sm:text-base md:text-lg uppercase tracking-wide "
            style={{ color: "var(--color-primary)" }}
          >
            {skills.join(" . ")}
          </motion.h3>
        </AnimatePresence>

        <UrlProject />
      </div>

      <NavigationButton />
    </div>
  );
}
