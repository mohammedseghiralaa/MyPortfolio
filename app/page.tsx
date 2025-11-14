import React, { JSX } from "react";
import Home from "./_components/Home";
import About from "./_components/About";
import Projects from "./_components/Projects";
import Contact from "./_components/Contact";
import Skills from "./_components/Skills";

export default function Page(): JSX.Element {
  return (
    <div>
      <Home />
      <About />
      <Skills />
      <Projects />
      <Contact />
    </div>
  );
}
