export const IS_DEVELOPMENT = process.env.NODE_ENV === "development";

export const TRANSLATIONS = {
  FI: "fi-FI",
  EN: "en",
};

export const ITEMS_META: {
  isHobbyProject: boolean;
  imageSlug: string;
  tags: string[];
}[] = [
  {
    isHobbyProject: false,
    imageSlug: "netvisor",
    tags: [
      "React",
      "TypeScript",
      "C#",
      "Playwright",
      "End-To-End Testing",
      "DevOps",
    ],
  },
  {
    isHobbyProject: false,
    imageSlug: "lahtihuvilat-hallitilaafi",
    tags: ["HTML/CSS", "FTP", "CPanel", "Microsoft Windows"],
  },
  {
    isHobbyProject: true,
    imageSlug: "mikkisfi",
    tags: ["React", "Express", "TypeScript", "PostgreSQL", "nginx", "Linux"],
  },
  {
    isHobbyProject: true,
    imageSlug: "mikkisguy",
    tags: ["Adobe Photoshop", "Adobe Premiere", "DaVinci Resolve"],
  },
  {
    isHobbyProject: true,
    imageSlug: "peliruukku",
    tags: [
      "PHP",
      "MySQL",
      "Adobe Photoshop",
      "Adobe Premiere",
      "DaVinci Resolve",
    ],
  },
  {
    isHobbyProject: true,
    imageSlug: "discord-yhteiso",
    tags: ["Svelte", "TypeScript", "API", "PHP", "MariaDB", "Modular"],
  },
];
