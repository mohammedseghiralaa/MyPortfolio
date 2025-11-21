"use client";
import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";
import { fetchSkills } from "../services/sanity";

interface Skill {
  name: string;
  icon: string;
  image: string;
}

interface SkillsContextType {
  frontEnd: Skill[];
  backEnd: Skill[];
  tools: Skill[];
}

interface SkillsProviderProps {
  children: ReactNode;
}

const SkillsContext = createContext<SkillsContextType | null>(null);

// Default empty values
const defaultSkills: SkillsContextType = {
  frontEnd: [],
  backEnd: [],
  tools: [],
};

export function SkillsProvider({ children }: SkillsProviderProps) {
  const [skills, setSkills] = useState<SkillsContextType>(defaultSkills);

  useEffect(() => {
    fetchSkills().then((data) => setSkills(data));
  }, []);

  const { frontEnd, backEnd, tools } = skills;

  return (
    <SkillsContext.Provider value={{ frontEnd, backEnd, tools }}>
      {children}
    </SkillsContext.Provider>
  );
}

export function useSkills(): SkillsContextType {
  const context = useContext(SkillsContext);
  if (!context)
    throw new Error("useSkills must be used within a SkillsProvider");
  return context;
}
