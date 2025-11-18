"use client";
import { JSX, ReactNode } from "react";

type NavButtonProps = {
  className?: string;
  onClick?: () => void;
  children: ReactNode;
  disabled?: boolean;
  type?: "button" | "submit" | "reset";
};

export default function NavButton({
  onClick,
  className,
  disabled = false,
  children,
  type = "button",
}: NavButtonProps): JSX.Element {
  return (
    <button
      type={type}
      disabled={disabled}
      className={`
        px-4 py-1 font-bold
        relative sm:px-8 sm:py-3 text-white rounded-lg overflow-hidden
        bg-linear-to-r from-indigo-500 via-purple-500 to-pink-500
        before:absolute before:inset-0 before:bg-linear-to-r before:from-transparent before:via-white/20 before:to-transparent
        before:translate-x-[-200%] hover:before:translate-x-[200%] before:transition-transform before:duration-700
        transform transition-transform duration-200
        active:scale-110 active:rotate-3
                 ${className}

        ${disabled ? "opacity-50 cursor-not-allowed" : ""}
      `}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
