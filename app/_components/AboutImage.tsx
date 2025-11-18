"use client";

import Image from "next/image";

export default function AboutImage() {
  return (
    <div className="flex items-center justify-center">
      <div className="relative w-75 h-75 mx-auto">
        {/* Rotating gradient border */}
        <div
          className="absolute -inset-1 rounded-full bg-gradient-to-r from-purple-700 via-pink-400 to-transparent opacity-65 blur-sm animate-spin"
          style={{ animationDuration: "4s" }}
        ></div>

        {/* Inner Image */}
        <div className="relative w-full h-full rounded-full overflow-hidden border-1 border-gray-900 shadow-2xl bg-[#12041A]">
          <Image
            src="/images/about.jpg"
            alt="About Image"
            fill
            className="object-contain rounded-full"
          />
        </div>
      </div>
    </div>
  );
}
