"use client";

import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";
import { fetchProjects } from "../services/sanity";
type Project = {
  id: number;
  name: string;
  description: string;
  images: [];
  skills: string[];
  url: string;
};
type ProjectContextType = {
  currentIndex: number;
  ProjectLength: number;
  goNext: () => void;
  goPrev: () => void;
  currentProject: Project | null;
};
type ProjectProviderProps = {
  children: ReactNode;
};
const ProjectContext = createContext<ProjectContextType | undefined>(undefined);
export function ProjectProvider({ children }: ProjectProviderProps) {
  const [MyProjects, setMyProjects] = useState<Project[]>([]);

  useEffect(() => {
    fetchProjects().then((data) => setMyProjects(data));
  }, []);
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
