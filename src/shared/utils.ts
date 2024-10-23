import { useContext } from "react";
import { SiteThemeContext } from "../components/ThemeContextProvider";
import { themes } from "./styles/themes";

export const useDarkMode = (): boolean => {
  const context = useContext(SiteThemeContext);
  const currentTheme = context?.currentTheme;

  return JSON.stringify(currentTheme) === JSON.stringify(themes.dark);
};
