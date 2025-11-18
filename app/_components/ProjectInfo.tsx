"use client";
import React, { JSX } from "react";
import { useProject } from "../context/ProjectContext";
import { motion, AnimatePresence, Variants } from "framer-motion";

export default function ProjectInf(): JSX.Element {
  const { currentProject } = useProject();
  if (!currentProject) {
    return <div>Loading</div>;
  }
  const { id, name, description } = currentProject;

  const variants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i = 0) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.2, duration: 0.5, ease: "easeOut" },
    }),
    exit: { opacity: 0, y: -20, transition: { duration: 0.3 } },
  };
  return (
    <div className="w-full sm:w-1/2  sm:px-0 relative">
      <AnimatePresence mode="wait">
        <motion.div
          key={id} // مهم جدًا لتغيير العنصر عند تغير المشروع
          initial="hidden"
          animate="visible"
          exit="exit"
          className="flex flex-col gap-3 sm:gap-4 lg:gap-6"
        >
          <motion.div
            custom={0}
            variants={variants}
            className="flex sm:flex-col items-center sm:items-start gap-3"
          >
            <motion.h1
              custom={1}
              variants={variants}
              className="text-5xl sm:text-6xl lg:text-8xl font-bold text-indigo-600"
            >
              {id < 10 ? `0${id}` : id}
            </motion.h1>

            <motion.h2
              custom={2}
              variants={variants}
              className="text-xl sm:text-2xl lg:text-4xl font-bold text-gradient bg-clip-text text-transparent from-pink-500 via-purple-500 to-indigo-500 bg-gradient-to-r"
            >
              {name}
            </motion.h2>
          </motion.div>
          <motion.p
            custom={3}
            variants={variants}
            className="text-base sm:text-lg lg:text-xl text-gray-400 leading-relaxed"
          >
            {description}
          </motion.p>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
