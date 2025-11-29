import { useContext } from "react";
import { themes } from "./styles/themes";
import { SiteThemeContext } from "../components/ThemeContext";

export const useDarkMode = (): boolean => {
  const context = useContext(SiteThemeContext);
  const currentTheme = context?.currentTheme;

  return JSON.stringify(currentTheme) === JSON.stringify(themes.dark);
};
