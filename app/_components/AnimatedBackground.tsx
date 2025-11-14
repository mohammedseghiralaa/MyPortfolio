"use client";

import { useCallback, useEffect, useState } from "react";
import { loadFull } from "tsparticles";
import Particles from "react-tsparticles";
import { useTheme } from "../context/ThemeContext";
import { Engine, ISourceOptions } from "tsparticles-engine";

export default function AnimatedBackground() {
  const { theme } = useTheme();
  const [bgColor, setBgColor] = useState<string>("#221536");
  const [linkColor, setLinkColor] = useState<string>("#9b5de5");

  const particlesInit = useCallback(async (engine: Engine) => {
    await loadFull(engine);
  }, []);

  useEffect(() => {
    const root = document.body;
    const computedStyle = getComputedStyle(root);

    const bg = computedStyle.getPropertyValue("--bg-color").trim() || "#221536";
    const link =
      computedStyle.getPropertyValue("--text-color").trim() || "#9b5de5";

    setBgColor((prev) => (prev !== bg ? bg : prev));
    setLinkColor((prev) => (prev !== link ? link : prev));
  }, [theme]);

  const options: ISourceOptions = {
    fullScreen: { enable: true, zIndex: -1 },
    particles: {
      number: { value: 50, density: { enable: true, area: 800 } },
      color: { value: "#f200ff" },
      shape: { type: "circle" },
      opacity: { value: 0.5, random: true },
      size: { value: 3, random: true },
      move: {
        enable: true,
        speed: 1,
        direction: "none",
        outModes: "bounce",
      },
      links: {
        enable: true,
        distance: 150,
        color: linkColor,
        opacity: 0.4,
        width: 1,
      },
    },
    interactivity: {
      events: {
        onHover: { enable: true, mode: "repulse" },
        onClick: { enable: false },
      },
      modes: { repulse: { distance: 100 }, push: { quantity: 4 } },
    },
    retina_detect: true,
    background: { color: bgColor },
  };

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      options={options}
      className="overflow-hidden"
    />
  );
}
