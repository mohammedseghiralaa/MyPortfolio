import React, { JSX } from "react";

export default function EndPage(): JSX.Element {
  return (
    <div
      style={{ color: "var(--text-color)" }}
      className="flex flex-col md:flex-row items-center justify-center md:justify-between px-9 py-5 gap-2 md:gap-0"
    >
      <p className="text-center sm:text-xl font-bold">
        Built with ❤️ by Alaaeddine
      </p>
      <p className="text-center sm:text-xl font-bold">
        © 2025 Alaaeddine. All rights reserved.
      </p>
    </div>
  );
}
