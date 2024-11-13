import { TranslationResource } from "./translations";

const english: TranslationResource = {
  underDevelopment: "Page is under development!",
  changeLanguage: "Vaihda suomen kielelle",
  changeTheme: "Switch page theme",
  darkMode: "Dark mode",
  header: "Helou! I'm Mikko Larinen, nice to meet you.",
  tagline:
    "I do web development and video editing. I like to hone the visual side and dive deeper under the hood.",
  sourceCode: "Source code",
  portfolioItem: {
    image: "image",
    tags: "Tags",
    hobbyProject: "Hobby",
    workProject: "Work",
  },
  portfolioItems: [
    {
      title: "Netvisor",
      description:
        "I worked primarily on the development of React components. For example, I maintained the internal component library alongside other developers and implemented the purchase channel for Netvisor with our team.",
    },
    {
      title: "Lahti-Huvilat / Hallitilaa.fi",
      description:
        "My work included maintaining the company website, preparing sales announcements and general IT support.",
    },
    {
      title: "Mikkis.fi",
      description:
        "Personal forever project, focused on design, responsiveness and accessibility. I also work on optimizing network traffic and ensuring security, including the parent system.",
    },
    {
      title: "MikkisGuy",
      description:
        "My username for video production and livestreaming which are focused on gaming and my life. Planning, graphics and other parts are done by me.",
    },
    {
      title: "Peliruukku",
      description:
        "A gaming community where I worked on the website with admin panel, video production, livestreaming and various events and activities via the internet. Active from 2012 to 2024.",
    },
    {
      title: "Discord community stats",
      description:
        "I made a statistics page and a Discord bot that collects word counts, logs text channels and various other things. Data is shown using various charts. Parts of the information is redacted for privacy reasons.",
    },
  ],
};

export default english;
