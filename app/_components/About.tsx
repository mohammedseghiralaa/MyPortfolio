"use client";
import React, { JSX } from "react";
import Title from "./Title";
import AboutCart from "./AboutCart";

export default function About(): JSX.Element {
  return (
    <div id="about" className="pt-22 ">
      <Title>About Me</Title>
      <AboutCart />
    </div>
  );
}
