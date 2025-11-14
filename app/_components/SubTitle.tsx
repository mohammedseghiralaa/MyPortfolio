import React, { JSX } from "react";

type SubTitleProps = {
  icon: JSX.Element;
  title: string;
};

export default function SubTitle({ icon, title }: SubTitleProps): JSX.Element {
  return (
    <div className="flex gap-3 items-center pt-8 pb-8 sm:pt-12 sm:pb-10 transition-transform duration-200 hover:scale-105">
      {icon}
      <span
        style={{ color: "var(--text-color)" }}
        className="text-center text-xl sm:text-2xl md:text-3xl font-bold bg-clip-text "
      >
        {title}
      </span>
    </div>
  );
}
