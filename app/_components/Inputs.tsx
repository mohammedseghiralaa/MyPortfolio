"use client";

import React, { JSX, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import NavButton from "./NavButton";

export default function Inputs(): JSX.Element {
  const [Status, setStatus] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    const target = e.target as HTMLFormElement; // type assertion
    const formData = {
      name: (target.elements.namedItem("name") as HTMLInputElement).value,
      email: (target.elements.namedItem("email") as HTMLInputElement).value,
      message: (target.elements.namedItem("message") as HTMLTextAreaElement)
        .value,
    };
    try {
      const res = await fetch("/api/send", {
        method: "POST",
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        setStatus("Your message was sent successfully!");
        target.reset();
      } else {
        setStatus("Failed to send message");
      }
    } finally {
      setIsLoading(false);
      setTimeout(() => setStatus(""), 3000);
    }
    // Clear status after 4 seconds
    setTimeout(() => setStatus(""), 3000);
  };

  return (
    <motion.form
      onSubmit={handleSubmit}
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      className="w-full max-w-xl mx-auto  flex flex-col gap-5  px-4 sm:px-6 md:px-8
                  "
    >
      {/* Name Input */}
      <motion.input
        type="text"
        placeholder="Your Name"
        className="border placeholder-(--text-color) border-gray-300 
                   rounded-xl p-3 md:p-4 text-sm md:text-base
                   focus:outline-none focus:ring-2 focus:ring-blue-400 
                   transition-all w-full"
        whileFocus={{
          scale: 1.02,
          boxShadow: "0 0 10px rgba(59,130,246,0.4)",
        }}
        name="name"
        required
      />

      {/* Email Input */}
      <motion.input
        type="email"
        placeholder="Your Email"
        className=" border placeholder-(--text-color) border-gray-300 
                   rounded-xl p-3 md:p-4 text-sm md:text-base
                   focus:outline-none focus:ring-2 focus:ring-purple-400 
                   transition-all w-full"
        whileFocus={{
          scale: 1.02,
          boxShadow: "0 0 10px rgba(168,85,247,0.4)",
        }}
        name="email"
        required
      />

      {/* Message Input */}
      <motion.textarea
        placeholder="Your Message"
        className="border placeholder-(--text-color) border-gray-300 
                   rounded-xl p-3 md:p-4 h-32 md:h-40 resize-none 
                   text-sm md:text-base
                   focus:outline-none focus:ring-2 focus:ring-pink-400 
                   transition-all w-full"
        whileFocus={{
          scale: 1.02,
          boxShadow: "0 0 10px rgba(236,72,153,0.4)",
        }}
        name="message"
        required
      />

      {/* Submit Button + Status */}
      <div className="flex flex-col  md:flex-row justify-end items-center md:items-end gap-3 md:gap-5">
        <motion.div whileTap={{ scale: 0.95 }} whileHover={{ scale: 1.03 }}>
          <NavButton type="submit" disabled={isLoading}>
            {isLoading ? "Sending..." : "Send Message"}
          </NavButton>
        </motion.div>

        {/* Status Animation */}
        <AnimatePresence>
          {Status && (
            <motion.span
              key="status"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
              transition={{ duration: 0.4 }}
              className="text-sm md:text-base text-green-400 font-semibold"
            >
              {Status}
            </motion.span>
          )}
        </AnimatePresence>
      </div>
    </motion.form>
  );
}
