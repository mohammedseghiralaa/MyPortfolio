"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { useProject } from "../context/ProjectContext";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, ZoomIn } from "lucide-react";
import Spinner from "./Spinner";

export default function ProjectImage() {
  const { currentProject } = useProject();
  const [currentImageIndex, setCurrentImageIndex] = useState<number>(0);
  const [isZoomed, setIsZoomed] = useState(false);
  useEffect(() => {
    setCurrentImageIndex(0);
  }, [currentProject]);
  if (!currentProject || !currentProject.images.length) {
    return <Spinner />;
  }

  const { images } = currentProject;

  const goNextImage = () => {
    setCurrentImageIndex((prev) => (prev < images.length - 1 ? prev + 1 : 0));
  };

  const goPrevImage = () => {
    setCurrentImageIndex((prev) => (prev > 0 ? prev - 1 : images.length - 1));
  };

  return (
    <>
      <div className="relative w-full sm:w-[400px] md:w-[500px] lg:w-[600px] aspect-video rounded-2xl overflow-hidden bg-gradient-to-br from-gray-900 via-gray-800 to-black shrink-0 shadow-2xl group">
        {/* Gradient Border Effect */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10 blur-xl" />

        <AnimatePresence mode="wait">
          <motion.div
            key={images[currentImageIndex]}
            initial={{ opacity: 0, x: 100, scale: 0.9 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            exit={{ opacity: 0, x: -100, scale: 0.9 }}
            transition={{ duration: 0.6, ease: [0.43, 0.13, 0.23, 0.96] }}
            className="absolute inset-0"
          >
            <Image
              src={images[currentImageIndex]}
              alt={`Project Image ${currentImageIndex + 1}`}
              fill
              className="object-cover"
              priority
            />

            {/* Subtle overlay gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </motion.div>
        </AnimatePresence>

        {/* Navigation Buttons - Left */}
        <motion.button
          onClick={goPrevImage}
          whileHover={{ scale: 1.1, x: -4 }}
          whileTap={{ scale: 0.95 }}
          className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/10 backdrop-blur-md text-white p-3 rounded-full border border-white/20 opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-white/20 shadow-lg"
        >
          <ChevronLeft className="w-6 h-6" />
        </motion.button>

        {/* Navigation Buttons - Right */}
        <motion.button
          onClick={goNextImage}
          whileHover={{ scale: 1.1, x: 4 }}
          whileTap={{ scale: 0.95 }}
          className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/10 backdrop-blur-md text-white p-3 rounded-full border border-white/20 opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-white/20 shadow-lg"
        >
          <ChevronRight className="w-6 h-6" />
        </motion.button>

        {/* Zoom Button */}
        <motion.button
          onClick={() => setIsZoomed(true)}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          className="absolute top-4 right-4 bg-white/10 backdrop-blur-md text-white p-2.5 rounded-full border border-white/20 opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-white/20 shadow-lg"
        >
          <ZoomIn className="w-5 h-5" />
        </motion.button>

        {/* Image Counter - Bottom */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/40 backdrop-blur-md text-white px-5 py-2 rounded-full border border-white/10 shadow-xl font-medium"
        >
          <span className="text-white font-semibold">
            {currentImageIndex + 1}
          </span>
          <span className="text-white/60 mx-1">/</span>
          <span className="text-white/80">{images.length}</span>
        </motion.div>

        {/* Thumbnail Dots Navigation */}
        <div className="absolute bottom-16 left-1/2 -translate-x-1/2 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          {images.map((_, index) => (
            <motion.button
              key={index}
              onClick={() => setCurrentImageIndex(index)}
              whileHover={{ scale: 1.3 }}
              whileTap={{ scale: 0.9 }}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                index === currentImageIndex
                  ? "bg-white w-8"
                  : "bg-white/40 hover:bg-white/60"
              }`}
            />
          ))}
        </div>
      </div>

      {/* Fullscreen Zoom Modal */}
      <AnimatePresence>
        {isZoomed && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsZoomed(false)}
            className="fixed inset-0 z-50 bg-black/95 backdrop-blur-sm flex items-center justify-center p-4"
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="relative max-w-7xl max-h-[90vh] w-full h-full"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={images[currentImageIndex]}
                alt={`Project Image ${currentImageIndex + 1}`}
                fill
                className="object-contain"
              />
              <button
                onClick={() => setIsZoomed(false)}
                className="absolute top-4 right-4 bg-white/10 backdrop-blur-md text-white px-4 py-2 rounded-full border border-white/20 hover:bg-white/20 transition-all duration-300 font-medium"
              >
                Close
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
