import { JSX } from "react";

interface SkillCircleProps {
  percentage: number;
  label: string;
}

export default function SkillCircle({
  percentage,
  label,
}: SkillCircleProps): JSX.Element {
  const radius = 45;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (percentage / 100) * circumference;

  return (
    <div className="flex flex-col items-center">
      <div className="relative w-24 sm:w-28 md:w-32 lg:w-36 xl:w-40 h-24 sm:h-28 md:h-32 lg:h-36 xl:h-40">
        <svg className="transform -rotate-90 w-full h-full">
          {/* Background circle */}
          <circle
            cx="50%"
            cy="50%"
            r={radius}
            stroke="#c9bbf9"
            strokeWidth="8"
            fill="none"
          />
          {/* Progress circle */}
          <circle
            cx="50%"
            cy="50%"
            r={radius}
            stroke="url(#gradient)"
            strokeWidth="8"
            fill="none"
            strokeDasharray={circumference}
            strokeDashoffset={offset}
            strokeLinecap="round"
            className="transition-all duration-1000 ease-out"
          />
          <defs>
            <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#32025f" />
              <stop offset="50%" stopColor="#b80963" />
              <stop offset="100%" stopColor="#2a047a" />
            </linearGradient>
          </defs>
        </svg>
        {/* Percentage text */}
        <div className="absolute inset-0 flex items-center justify-center">
          <span
            className="text-white text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl font-semibold"
            style={{ color: "var(--text-color)" }}
          >
            {percentage}%
          </span>
        </div>
      </div>
      {/* Label */}
      <p
        className="mt-3 text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl font-bold text-center"
        style={{ color: "var(--text-color)" }}
      >
        {label}
      </p>
    </div>
  );
}
