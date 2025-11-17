"use client";
import React, { JSX } from "react";
import {
  FaTelegramPlane,
  FaGithub,
  FaLinkedinIn,
  FaWhatsapp,
} from "react-icons/fa";
import { useInfoCv } from "../context/CvContext";
const iconMap: Record<string, JSX.Element> = {
  Telegram: <FaTelegramPlane />,
  GitHub: <FaGithub />,
  LinkedIn: <FaLinkedinIn />,
  WhatsApp: <FaWhatsapp />,
};

const colorMap: Record<string, string> = {
  Telegram: "#0088cc",
  GitHub: "var(--text-color)",
  LinkedIn: "#0077b5",
  WhatsApp: "#25d366",
};
export default function SocialLinks(): JSX.Element {
  const { contacts } = useInfoCv();
  return (
    <div className="flex items-center gap-3 sm:gap-4 md:gap-5">
      {contacts.map((contact) => {
        const icon = iconMap[contact.label] || <FaGithub />; // fallback icon
        const hoverColor = colorMap[contact.label] || "black";
        return (
          <a
            key={contact.label}
            href={contact.url}
            className=" w-10 h-10 sm:w-11 sm:h-11 md:w-12 md:h-12 flex items-center justify-center text-lg  sm:text-xl border-2 rounded-full transition-all duration-500 hover:scale-110 show-default-cursor"
            style={{
              color: "var(--text-color)", // اللون الأساسي حسب الوضع
              borderColor: "var(--text-color)", // إطار حسب الوضع
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.color = hoverColor;
              e.currentTarget.style.borderColor = hoverColor;
              e.currentTarget.style.boxShadow = `0 0 25px ${hoverColor}`;
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.color = "var(--text-color)";
              e.currentTarget.style.borderColor = "var(--text-color)";
              e.currentTarget.style.boxShadow = "none";
            }}
          >
            {icon}
          </a>
        );
      })}
    </div>
  );
}
