"use client";
import React, { JSX } from "react";
import Image from "next/image";
import { useProject } from "../context/ProjectContext";
import { motion, AnimatePresence } from "framer-motion";

export default function ProjectImage(): JSX.Element {
  const { currentProject } = useProject();
  const { image } = currentProject;

  return (
    <div className="relative w-full sm:w-[400px] md:w-[500px] lg:w-[600px] aspect-video rounded-xl overflow-hidden bg-gray-300 shrink-0 shadow-md">
      <AnimatePresence mode="wait">
        <motion.div
          key={image} // مهم: إعادة التحريك عند تغيّر الصورة
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="absolute inset-0"
        >
          <Image
            src={image}
            alt="Project Image"
            fill
            className="object-cover"
            priority
          />
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
