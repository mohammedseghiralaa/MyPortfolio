"use client";
import { createContext, useState, useContext, ReactNode } from "react";
type Theme = "light" | "dark";
interface ThemeContextType {
  theme: Theme;
  toggleTheme: () => void;
}
const ThemeContext = createContext<ThemeContextType | undefined>(undefined);
const inititalValue: Theme = "dark";
interface ThemeProviderProps {
  children: ReactNode;
}
export function ThemeProvider({ children }: ThemeProviderProps) {
  const [theme, setTheme] = useState<Theme>(inititalValue);
  const toggleTheme = () => {
    setTheme((prev) => {
      const newTheme: Theme = prev === "light" ? "dark" : "light";
      document.body.className = newTheme; // يغير الـ CSS variables تلقائياً
      return newTheme;
    });
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export const useTheme = (): ThemeContextType => {
  const context = useContext(ThemeContext);
  if (!context) throw new Error("useTheme must be used within a themeprovider");
  return context;
};
