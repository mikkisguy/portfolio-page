export const IS_DEVELOPMENT = process.env.NODE_ENV === "development";

export const TRANSLATIONS = {
  FI: "fi-FI",
  EN: "en",
};

export const ITEMS_META: { tags: string[]; isHobbyProject: boolean }[] = [
  {
    tags: ["React", "TypeScript", "C#", "DevOps", "Playwright", "End-To-End"],
    isHobbyProject: false,
  },
  {
    tags: ["HTML/CSS", "FTP", "CPanel", "Microsoft Windows"],
    isHobbyProject: false,
  },
  {
    tags: ["React", "Express", "TypeScript", "PostgreSQL", "nginx"],
    isHobbyProject: true,
  },
  {
    tags: ["Adobe Photoshop", "Adobe Premiere", "DaVinci Resolve"],
    isHobbyProject: true,
  },
  {
    tags: [
      "PHP",
      "MySQL",
      "Adobe Photoshop",
      "Adobe Premiere",
      "DaVinci Resolve",
    ],
    isHobbyProject: true,
  },
  {
    tags: ["Svelte", "TypeScript", "API", "PHP", "MariaDB"],
    isHobbyProject: true,
  },
];
