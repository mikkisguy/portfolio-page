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
        "Työskentelin ensisijaisesti React-palikoiden kehityksen parissa. Ylläpidin yhdessä muiden kanssa sisäistä komponenttikirjastoa sekä tiimissä toteutin mm. online-ostamisen kanavaa.",
    },
    {
      title: "Lahti-Huvilat / Hallitilaa.fi",
      description:
        "Hommiini kuului mm. nettisivujen ylläpito, myynti-ilmotusten laatiminen sekä yleinen IT-tuki.",
    },
    {
      title: "Mikkis.fi",
      description:
        "Jalokiveni ja ikuisuusprojektini, painotuksena responsiivisuus ja saavutettavuus.",
    },
    {
      title: "MikkisGuy",
      description:
        "Nimimerkkini jonka alla olen tehnyt videotuotantoa sekä livestriimausta. Graafinen ilme myös omaa käsialaa.",
    },
    {
      title: "Peliruukku",
      description:
        "Peliyhteisö johon liittyi nettisivut, videotuotanto sekä netin välityksellä erilaiset tapahtumat ja aktiviteetit. Tein videoita, koodiprojekteja sekä toimin järjestäjänä. Suunnittelin yhteisön graafisen ilmeen.",
    },
    {
      title: "Discord-yhteisön tilastot",
      description:
        "Tehty tilastosivu ja Discord-botti joka kerää sanamääriä sekä mm. logittaa kanavia. Tietoja sensuroitu yksityisyyden vuoksi.",
    },
  ],
};

export default english;
