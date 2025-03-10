import "styled-components";

type TransitionStyles = {
  linear: string;
};

type SpacingStyles = {
  none: string;
  xxs: string;
  xs: string;
  s: string;
  l: string;
  xl: string;
  xxl: string;
  xxxl: string;
};

type FontStyles = {
  h1: string;
  h2: string;
  tagline: string;
  body: string;
  meta: string;
};

export type ColorStyles = {
  themeIcon: string;
  background: string;
  backgroundSecondary: string;
  backgroundImageViewer: string;
  heading: string;
  bodyText: string;
  bodyTextSecondary: string;
  border: string;
  accent: string;
  shadow: string;
  linkText: string;
  linkUnderline: string;
};

export type Breakpoints = {
  wide: string;
  narrow: string;
  small: string;
};

declare module "styled-components" {
  export interface DefaultTheme {
    spacing: SpacingStyles;
    transition: TransitionStyles;
    fonts: FontStyles;
    bp: Breakpoints;
    colors: ColorStyles;
  }
}

export type Themes = {
  light: ColorStyles;
  dark: ColorStyles;
};

export type BaseStyles = {
  spacing: SpacingStyles;
  transition: TransitionStyles;
  fonts: FontStyles;
  bp: Breakpoints;
};

export type ThemeContext = {
  currentTheme: ColorStyles;
  setCurrentTheme: (currentTheme: ColorStyles) => void;
};
