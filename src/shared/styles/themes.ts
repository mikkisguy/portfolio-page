import { BaseStyles, Themes } from "./styled";

export const base: BaseStyles = {
  spacing: {
    none: "0",
    xxs: "0.2rem",
    xs: "0.4rem",
    s: "0.6rem",
    l: "0.8rem",
    xl: "1.6rem",
    xxl: "2.4rem",
    xxxl: "3.2rem",
  },
  transition: {
    linear: "all 0.20s linear",
  },
  fonts: {
    h1: "3.5rem/1 'Source Code Pro Bold', monospace",
    h2: "2rem/1.8 'DM Sans Bold', sans-serif",
    tagline: "1.3rem/1.8 'DM Sans Bold', sans-serif",
    body: "1.2rem/1.8 'DM Sans', sans-serif",
    bodyBold: "1.2rem/1.8 'DM Sans Bold', sans-serif",
    meta: "1rem/1.3 'DM Sans', sans-serif",
  },
  bp: {
    wide: "1920px",
    narrow: "1500px",
    small: "900px",
  },
};

export const themes: Themes = {
  light: {
    themeIcon: "#e2a54c",
    background: "#ebecf0",
    backgroundSecondary: "#fff",
    backgroundTertiary: "#dadbdd",
    heading: "#000",
    bodyText: "#0b0c10",
    bodyTextSecondary: "#1f2833",
    accent: "#c1b8b1",
    shadow: "#b2b2b2",
    linkText: "#116466",
    linkUnderline: "#707070",
  },
  dark: {
    themeIcon: "#858585",
    background: "#1f2833",
    backgroundSecondary: "#12181e",
    backgroundTertiary: "#2a3645",
    heading: "#d9b08c",
    bodyText: "#cecece",
    bodyTextSecondary: "#b2b2b2",
    accent: "#494441",
    shadow: "#0b0c10",
    linkText: "#4db3ac",
    linkUnderline: "#3f928e",
  },
};
