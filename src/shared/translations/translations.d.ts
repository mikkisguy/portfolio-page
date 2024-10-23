import "i18next";

declare module "i18next" {
  interface CustomTypeOptions {
    returnNull: false;
  }
}

export type TranslationResource = {
  changeLanguage: string;
};
