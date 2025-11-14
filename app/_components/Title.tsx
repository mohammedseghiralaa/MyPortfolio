import { JSX, ReactNode } from "react";

type TitleProps = {
  children: ReactNode;
};

export default function Title({ children }: TitleProps): JSX.Element {
  return (
    <div className="w-full text-center py-8">
      <h1
        className="
          text-3xl sm:text-4xl md:text-5xl lg:text-6xl
          font-extrabold
          tracking-wide
          text-transparent
          bg-clip-text
          drop-shadow-lg
          transition-transform duration-300
          hover:scale-105
          hover:drop-shadow-2xl
          transform origin-center inline-block
        "
        style={{
          backgroundImage:
            "linear-gradient(to right, #8003c9, #F52CF9, #22D3EE)",
        }}
      >
        {children}
      </h1>
    </div>
  );
}
