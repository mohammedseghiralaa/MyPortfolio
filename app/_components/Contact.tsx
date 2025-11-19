"use client";
import React, { JSX } from "react";
import Title from "./Title";
import SendMessage from "./SendMessage";
import EndPage from "./EndPage";
export default function Contact(): JSX.Element {
  return (
    <div
      id="contact"
      style={{ color: "var(--text-color)" }}
      className=" pt-10 sm:pt-22"
    >
      <Title> Contact Me</Title>
      <SendMessage />
      <EndPage />
    </div>
  );
}
