"use client";
import { createContext, ReactNode, useContext, useState } from "react";
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
const initialValues = await fetchSkills();
export function SkillsProvider({ children }: SkillsProviderProps) {
  const { frontEnd, backEnd, tools } = initialValues;
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
