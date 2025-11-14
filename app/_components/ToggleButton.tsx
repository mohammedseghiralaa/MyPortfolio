"use client";
import React, { JSX, useState } from "react";
import { useTheme } from "../context/ThemeContext";

// ToggleButton Component
export default function ToggleButton(): JSX.Element {
  const { theme, toggleTheme } = useTheme();
  const [isAnimating, setIsAnimating] = useState<boolean>(false);

  const handleClick = (): void => {
    setIsAnimating(true);
    toggleTheme();
    setTimeout(() => setIsAnimating(false), 600);
  };

  const isDark = theme === "dark";

  return (
    <button
      onClick={handleClick}
      className={`
        relative w-12 h-12 md:w-16 md:h-16 rounded-full
        flex items-center justify-center
        transition-all duration-500 ease-out
        transform-gpu overflow-hidden
        focus:outline-none focus:ring-4
        ${isDark ? "focus:ring-blue-500/40" : "focus:ring-orange-400/40"}
        shadow-2xl hover:shadow-3xl
        ${isAnimating ? "scale-95" : "scale-100 hover:scale-105"}
        ${
          isDark
            ? "bg-gradient-to-br from-slate-800 via-slate-900 to-black"
            : "bg-gradient-to-br from-yellow-300 via-orange-400 to-orange-500"
        }
      `}
      aria-label={`Switch to ${isDark ? "light" : "dark"} mode`}
    >
      {/* Ambient Glow Background */}
      <div
        className={`
          absolute inset-0 rounded-full
          transition-all duration-700 ease-out
          ${isAnimating ? "scale-150 opacity-60" : "scale-100 opacity-0"}
          ${isDark ? "bg-blue-500" : "bg-yellow-400"}
          blur-2xl
        `}
      />

      {/* Rotating Ring */}
      <div
        className={`
          absolute inset-1 rounded-full border-2
          transition-all duration-700 ease-out
          ${isAnimating ? "rotate-180 scale-110" : "rotate-0 scale-100"}
          ${isDark ? "border-blue-400/30" : "border-white/30"}
        `}
      />

      {/* Sun Icon */}
      <div
        className={`
          absolute inset-0 flex items-center justify-center
          transition-all duration-500 ease-out
          ${
            isDark
              ? "opacity-0 rotate-180 scale-50"
              : "opacity-100 rotate-0 scale-100"
          }
        `}
      >
        <div className="relative">
          {[...Array(8)].map((_, i) => (
            <div
              key={i}
              className={`
                absolute w-0.5 h-2 md:h-3 bg-white rounded-full
                transition-all duration-500
                ${isAnimating && !isDark ? "scale-150" : "scale-100"}
              `}
              style={{
                top: "50%",
                left: "50%",
                transform: `translate(-50%, -50%) rotate(${
                  i * 45
                }deg) translateY(-8px)`,
              }}
            />
          ))}
          <span className="text-2xl md:text-3xl drop-shadow-lg relative z-10">
            ☀️
          </span>
        </div>
      </div>

      {/* Moon Icon */}
      <div
        className={`
          absolute inset-0 flex items-center justify-center
          transition-all duration-500 ease-out
          ${
            isDark
              ? "opacity-100 rotate-0 scale-100"
              : "opacity-0 -rotate-180 scale-50"
          }
        `}
      >
        <div className="relative">
          {[...Array(6)].map((_, i) => (
            <div
              key={i}
              className={`
                absolute text-xs
                transition-all duration-700
                ${
                  isAnimating && isDark
                    ? "opacity-100 scale-100"
                    : "opacity-0 scale-0"
                }
              `}
              style={{
                top: "50%",
                left: "50%",
                transform: `translate(-50%, -50%) rotate(${
                  i * 60
                }deg) translateY(-14px)`,
                transitionDelay: `${i * 50}ms`,
              }}
            >
              ✨
            </div>
          ))}
          <span className="text-2xl md:text-3xl drop-shadow-lg relative z-10">
            🌙
          </span>
        </div>
      </div>

      {/* Sparkle effect on click */}
      {isAnimating && (
        <div className="absolute inset-0 flex items-center justify-center">
          {[...Array(12)].map((_, i) => (
            <div
              key={i}
              className={`absolute w-1 h-1 rounded-full ${
                isDark ? "bg-blue-300" : "bg-yellow-200"
              } animate-ping`}
              style={{
                animationDuration: "600ms",
                animationDelay: `${i * 30}ms`,
                transform: `rotate(${i * 30}deg) translateY(-16px)`,
              }}
            />
          ))}
        </div>
      )}
    </button>
  );
}
