import React from "react";
import { FaGithub } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import { useProject } from "../context/ProjectContext";

export default function UrlProject() {
  const { currentProject } = useProject();
  const { url } = currentProject;
  return (
    <div className="flex justify-center items-center">
      <AnimatePresence mode="wait">
        <motion.a
          key={url} // يسمح بتغيير الرابط مع حركة عند تغيير المشروع
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: "var(--text-color)" }}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          transition={{ duration: 0.3 }}
          className="transition-transform duration-300 ease-in-out hover:scale-125 active:scale-110 text-2xl sm:text-3xl md:text-4xl lg:text-5xl"
        >
          <FaGithub />
        </motion.a>
      </AnimatePresence>
    </div>
  );
}
