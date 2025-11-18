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
    { name: "Home", href: "/" },
    { name: "About", href: "about" },
    { name: "Projects", href: "projects" },
    { name: "Contact", href: "contact" },
  ];

  const handleScroll = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" }); // الحركة السلسة
    }
    closeMenu(); // لو الموبايل مفتوح يغلق القائمة
  };

  return (
    <ul
      className={`flex navbar custom-cursor show-default-cursor
        ${
          isMobile ? " flex-col gap-8 items-center py-8" : "gap-6 items-center"
        }`}
    >
      {Links.map((link) => (
        <li
          key={link.name}
          className="font-bold transition-all duration-500 hover:scale-115"
          onClick={() => handleScroll(link.href)}
        >
          <span className="cursor-pointer transition-colors duration-300">
            {link.name}
          </span>
        </li>
      ))}
    </ul>
  );
}
