import { useState, useEffect, ReactNode } from "react";
import { ThemeProvider } from "styled-components";
import { ColorStyles } from "../shared/styles/styled";
import { themes, base } from "../shared/styles/themes";
import { SiteThemeContext } from "./ThemeContext";

type ThemeContextProviderProps = {
  children: ReactNode;
};

/**
 * ThemeContextProvider component.
 *
 * This component provides the site theme context to its children components.
 * It initializes the theme state based on localStorage or user preference,
 * and listens for system theme changes.
 *
 * @param {ThemeContextProviderProps} props - The component props.
 * @returns {React.JSX.Element} The rendered component.
 */
const ThemeContextProvider = (
  props: ThemeContextProviderProps
): React.JSX.Element => {
  // Lazily initialize the theme state to avoid synchronous setState in effects
  const [currentTheme, setCurrentTheme] = useState<ColorStyles>(() => {
    // Check localStorage first
    const storedTheme = localStorage.getItem("current_theme");
    if (storedTheme) {
      return JSON.parse(storedTheme) as ColorStyles;
    }
    // Fallback to system preference
    const themeQuery = window.matchMedia("(prefers-color-scheme: light)");
    return themeQuery.matches ? themes.light : themes.dark;
  });

  /**
   * Listens for changes in the user's system theme preference.
   */
  useEffect(() => {
    const themeQuery = window.matchMedia("(prefers-color-scheme: light)");

    // Handler for theme changes
    const handleThemeChange = ({ matches }: MediaQueryListEvent) => {
      setCurrentTheme(matches ? themes.light : themes.dark);
    };

    // Add listener
    themeQuery.addEventListener("change", handleThemeChange);

    // Cleanup: Remove listener on unmount
    return () => {
      themeQuery.removeEventListener("change", handleThemeChange);
    };
  }, []);

  // Create the theme object by merging the base theme with the current theme colors
  const theme = { ...base, colors: currentTheme };

  // Provide the theme context to the children components
  return (
    <SiteThemeContext.Provider value={{ currentTheme, setCurrentTheme }}>
      {/* Apply the theme to the children components */}
      <ThemeProvider theme={theme}>{props.children}</ThemeProvider>
    </SiteThemeContext.Provider>
  );
};

export default ThemeContextProvider;
