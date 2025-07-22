"use client";

import type React from "react";
import { createContext, useContext, useState, useEffect } from "react";

interface AppContextType {
  // Theme states
  theme: "dark" | "light";
  setTheme: (theme: "dark" | "light") => void;

  // Accessibility states
  fontSize: number;
  setFontSize: (size: number) => void;
  highContrast: boolean;
  setHighContrast: (enabled: boolean) => void;
  reducedMotion: boolean;
  setReducedMotion: (enabled: boolean) => void;

  // Language state
  language: string;
  setLanguage: (lang: string) => void;

  // Terminal state
  terminalHistory: string[];
  addToTerminalHistory: (command: string) => void;
  clearTerminalHistory: () => void;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

export function AppProvider({ children }: { children: React.ReactNode }) {
  // Theme states
  const [theme, setTheme] = useState<"dark" | "light">("dark");

  // Accessibility states
  const [fontSize, setFontSize] = useState(16);
  const [highContrast, setHighContrast] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);

  // Language state
  const [language, setLanguage] = useState("pt-BR");

  // Terminal state
  const [terminalHistory, setTerminalHistory] = useState<string[]>([]);

  const addToTerminalHistory = (command: string) => {
    setTerminalHistory((prev) => [...prev, command].slice(-50)); // Keep last 50 commands
  };

  const clearTerminalHistory = () => {
    setTerminalHistory([]);
  };

  // Apply theme to document
  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark");
    document.documentElement.classList.toggle("light", theme === "light");
  }, [theme]);

  // Apply accessibility settings
  useEffect(() => {
    document.documentElement.style.fontSize = `${fontSize}px`;
    document.documentElement.classList.toggle("high-contrast", highContrast);
    document.documentElement.classList.toggle("reduced-motion", reducedMotion);
  }, [fontSize, highContrast, reducedMotion]);

  const value: AppContextType = {
    theme,
    setTheme,
    fontSize,
    setFontSize,
    highContrast,
    setHighContrast,
    reducedMotion,
    setReducedMotion,
    language,
    setLanguage,
    terminalHistory,
    addToTerminalHistory,
    clearTerminalHistory,
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}

export function useApp() {
  const context = useContext(AppContext);
  if (context === undefined) {
    throw new Error("useApp must be used within an AppProvider");
  }
  return context;
}
