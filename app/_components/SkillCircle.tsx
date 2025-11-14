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
      <div className="relative w-32 h-32 ">
        <svg className="transform  -rotate-90 w-32 h-32">
          {/* Background circle */}
          <circle
            cx="64"
            cy="64"
            r={radius}
            stroke="#c9bbf9"
            strokeWidth="8"
            fill="none"
          />
          {/* Progress circle */}
          <svg width="128" height="128" className="relative">
            <defs>
              <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#32025f" />
                <stop offset="50%" stopColor="#b80963" />
                <stop offset="100%" stopColor="#2a047a" />
              </linearGradient>
            </defs>

            <circle
              cx="64"
              cy="64"
              r={radius}
              stroke="url(#gradient)"
              strokeWidth="8"
              fill="none"
              strokeDasharray={circumference}
              strokeDashoffset={offset}
              strokeLinecap="round"
              className="transition-all duration-1000 ease-out"
            />
          </svg>
        </svg>
        {/* Percentage text */}
        <div className="absolute inset-0 flex items-center justify-center">
          <span
            className="text-white text-lg sm:text-xl md:text-2xl font-semibold"
            style={{ color: "var(--text-color)" }}
          >
            {percentage}%
          </span>
        </div>
      </div>
      {/* Label */}
      <p
        className=" text-base sm:text-xl md:text-2xl mt-4 font-bold"
        style={{ color: "var(--text-color)" }}
      >
        {label}
      </p>
    </div>
  );
}
