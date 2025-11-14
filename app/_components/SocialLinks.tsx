"use client";
import React, { JSX } from "react";
import {
  FaTelegramPlane,
  FaGithub,
  FaLinkedinIn,
  FaWhatsapp,
} from "react-icons/fa";

export default function SocialLinks(): JSX.Element {
  const links = [
    {
      icon: <FaTelegramPlane />,
      href: "https://t.me/alaeddineMS",
      hoverColor: "#0088cc", // مثال: لون الفوشيا عند hover
    },
    {
      icon: <FaGithub />,
      href: "https://github.com/mohammedseghiralaa",
      hoverColor: "var(--text-color)", // ممكن أبيض أو حسب الوضع
    },
    {
      icon: <FaLinkedinIn />,
      href: "https://www.linkedin.com/in/alaa-eddine-mohammed-seghir",
      hoverColor: "#0077b5",
    },
    {
      icon: <FaWhatsapp />,
      href: "https://wa.me/213123456789?text=Welcome",
      hoverColor: "#25d366",
    },
  ];

  return (
    <div className="flex items-center gap-3 sm:gap-4 md:gap-5">
      {links.map((link, index) => (
        <a
          key={index}
          href={link.href}
          className=" w-10 h-10 sm:w-11 sm:h-11 md:w-12 md:h-12 flex items-center justify-center text-lg  sm:text-xl border-2 rounded-full transition-all duration-500 hover:scale-110 show-default-cursor"
          style={{
            color: "var(--text-color)", // اللون الأساسي حسب الوضع
            borderColor: "var(--text-color)", // إطار حسب الوضع
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.color = link.hoverColor;
            e.currentTarget.style.borderColor = link.hoverColor;
            e.currentTarget.style.boxShadow = `0 0 25px ${link.hoverColor}`;
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.color = "var(--text-color)";
            e.currentTarget.style.borderColor = "var(--text-color)";
            e.currentTarget.style.boxShadow = "none";
          }}
        >
          {link.icon}
        </a>
      ))}
    </div>
  );
}
