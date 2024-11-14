export const IS_DEVELOPMENT = process.env.NODE_ENV === "development";

export const IS_UNDER_DEVELOPMENT = false;

export const TRANSLATIONS = {
  FI: "fi-FI",
  EN: "en",
};

type ItemsMeta = {
  isHobbyProject: boolean;
  imageSlug: string;
  tags: string[];
  links?: string[];
};

export const ITEMS_META: ItemsMeta[] = [
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
    links: ["https://buy.netvisor.fi"],
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
    links: [
      "https://preview.mikkis.fi",
      "https://github.com/mikkisguy/thru-time",
    ],
  },
  {
    isHobbyProject: true,
    imageSlug: "mikkisguy",
    tags: ["Adobe Photoshop", "Adobe Premiere", "DaVinci Resolve"],
    links: [
      "https://www.youtube.com/@MikkisGuy",
      "https://www.youtube.com/@MikkisGuyArkisto",
    ],
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
    links: ["https://www.youtube.com/@Peliruukku"],
  },
  {
    isHobbyProject: true,
    imageSlug: "discord-yhteiso",
    tags: ["Svelte", "TypeScript", "API", "PHP", "MariaDB", "Modular"],
  },
];
