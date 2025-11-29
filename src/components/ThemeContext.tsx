import { createContext } from "react";
import { ColorStyles } from "../shared/styles/styled";

export type ThemeContext = {
  currentTheme: ColorStyles;
  setCurrentTheme: (currentTheme: ColorStyles) => void;
};

export const SiteThemeContext = createContext<ThemeContext | null>(null);
