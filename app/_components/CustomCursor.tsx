"use client";
import { JSX, useEffect, useState } from "react";

export default function CustomCursor(): JSX.Element {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    // تحريك المؤشر
    const moveCursor = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };
    document.addEventListener("mousemove", moveCursor);

    // التعامل مع العناصر لإخفاء المؤشر
    const titles = document.querySelectorAll<HTMLElement>(
      ".show-default-cursor"
    );

    // حفظ الدوال في مصفوفة لإزالة الـ listeners لاحقًا
    const enterLeaveHandlers: Array<{
      element: HTMLElement;
      enter: () => void;
      leave: () => void;
    }> = [];

    titles.forEach((title) => {
      const enter = () => setHidden(true);
      const leave = () => setHidden(false);
      title.addEventListener("mouseenter", enter);
      title.addEventListener("mouseleave", leave);
      enterLeaveHandlers.push({ element: title, enter, leave });
    });

    return () => {
      document.removeEventListener("mousemove", moveCursor);
      enterLeaveHandlers.forEach(({ element, enter, leave }) => {
        element.removeEventListener("mouseenter", enter);
        element.removeEventListener("mouseleave", leave);
      });
    };
  }, []);

  return (
    <div
      className="cursor fixed w-5 h-5 rounded-full bg-blue-500 pointer-events-none z-[9999] shadow-[0_0_20px_#2696e8,0_0_60px_#2696e8,0_0_100px_#2696e8] transition-opacity duration-150"
      style={{
        left: position.x,
        top: position.y,
        transform: "translate(-50%, -50%)",
        opacity: hidden ? 0 : 1,
      }}
    />
  );
}
