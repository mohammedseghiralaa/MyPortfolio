"use client";

import { createContext, ReactNode, useContext, useState } from "react";
type Project = {
  id: number;
  name: string;
  description: string;
  image: string;
  skills: string;
  url: string;
};
type ProjectContextType = {
  currentIndex: number;
  ProjectLength: number;
  goNext: () => void;
  goPrev: () => void;
  currentProject: Project;
};
const initialValue: Project[] = [
  {
    id: 1,
    name: "Portfolio Website",
    description: `A personal portfolio website built with Next.js and Tailwind CSS to showcase projects, blogs, and skills with a modern responsive design.`,
    image: "/images/portfolio.png",
    skills: "ReactJS · NextJS · Tailwind",
    url: "https://github.com/mohammedseghiralaa/Weather.git",
  },
  {
    id: 2,
    name: "Pizza Ordering Frontend",
    description: `A responsive front-end for a pizza ordering application built with React and Tailwind CSS. Users can browse the menu, select pizzas, and add them to the cart with smooth UI interactions.`,
    image: "/images/project2.png",
    skills: "ReactJS · Tailwind CSS · ",
    url: "https://github.com/mohammedseghiralaa/fast-pizza.git",
  },
  {
    id: 3,
    name: "Weather Website",
    description: `A responsive weather website that shows real-time weather information for any city. Built with React and styled with Tailwind CSS, it fetches data from a public weather API and displays temperature, humidity, and weather conditions in a user-friendly interface.`,
    image: "/images/project3.png",
    skills: "ReactJS · Tailwind CSS  · API",
    url: "https://github.com/mohammedseghiralaa/Weather.git",
  },
];

type ProjectProviderProps = {
  children: ReactNode;
};
const ProjectContext = createContext<ProjectContextType | undefined>(undefined);
export function ProjectProvider({ children }: ProjectProviderProps) {
  const MyProjects = initialValue;
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const currentProject = MyProjects[currentIndex];
  const ProjectLength = MyProjects.length;
  function goNext() {
    setCurrentIndex((prev) => (prev < MyProjects.length - 1 ? prev + 1 : prev));
  }
  function goPrev() {
    setCurrentIndex((prev) => (prev !== 0 ? prev - 1 : prev));
  }
  return (
    <ProjectContext.Provider
      value={{ currentIndex, goNext, goPrev, currentProject, ProjectLength }}
    >
      {children}
    </ProjectContext.Provider>
  );
}
export const useProject = (): ProjectContextType => {
  const context = useContext(ProjectContext);
  if (!context) throw new Error("wrong in useProject");
  return context;
};
