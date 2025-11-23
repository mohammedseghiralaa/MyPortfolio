"use client";
import { JSX } from "react";

type NavBarProps = {
  isMobile: boolean;
  closeMenu: () => void;
};

export default function NavBar({
  isMobile,
  closeMenu,
}: NavBarProps): JSX.Element {
  const Links = [
    { name: "Home", id: "home" },
    { name: "About", id: "about" },
    { name: "Projects", id: "projects" },
    { name: "Contact", id: "contact" },
  ];

  const handleScroll = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });

      // تحديث الـ URL بدون إعادة تحميل الصفحة
      window.history.pushState(null, "", `#${id}`);
    }
    closeMenu(); // لو الموبايل مفتوح يغلق القائمة
  };

  return (
    <ul
      className={`flex navbar custom-cursor show-default-cursor ${
        isMobile ? "flex-col gap-8 items-center py-8" : "gap-6 items-center"
      }`}
    >
      {Links.map((link) => (
        <li
          key={link.name}
          className="font-bold transition-all duration-500 hover:scale-115"
          onClick={() => handleScroll(link.id)}
        >
          <span className="cursor-pointer transition-colors duration-300">
            {link.name}
          </span>
        </li>
      ))}
    </ul>
  );
}
