import "i18next";

declare module "i18next" {
  interface CustomTypeOptions {
    returnNull: false;
  }
}

export type PortfolioItems = {
  title: string;
  description: string;
}[];

export type TranslationResource = {
  underDevelopment: string;
  changeLanguage: string;
  changeTheme: string;
  darkMode: string;
  header: string;
  tagline: string;
  sourceCode: string;
  portfolioItem: {
    image: string;
    tags: string;
    hobbyProject: string;
    workProject: string;
  };
  portfolioItems: PortfolioItems;
};
