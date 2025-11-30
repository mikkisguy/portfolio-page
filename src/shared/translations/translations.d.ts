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

export type SkillsBreakdown = {
  category: string;
  skills: { area: string; level: string }[];
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
    links: string;
    hobbyProject: string;
    workProject: string;
  };
  portfolioItems: PortfolioItems;
  technicalSkillsExperience: string;
  technologyArea: string;
  proficiencyContext: string;
  skillsBreakdownTitle: { hidden: string; visible: string };
  summaryTags: string[];
  skillsBreakdown: SkillsBreakdown;
};
