import { TranslationResource } from "./translations";

const finnish: TranslationResource = {
  underDevelopment: "Sivu on kehityksen alla!",
  changeLanguage: "Switch to english",
  changeTheme: "Vaihda sivun teemaa",
  darkMode: "Tumma teema",
  header: "Helou! Olen Mikko Larinen, hauska tutustua.",
  tagline:
    "Teen web-kehitystä ja videoeditointia. Tykkään hioa visuaalista puolta sekä sukeltaa syvemmälle konepellin alle.",
  sourceCode: "Lähdekoodi",
  portfolioItem: {
    image: "kuva",
    tags: "Avainsanat",
    links: "Linkit",
    hobbyProject: "Harrastus",
    workProject: "Työ",
  },
  portfolioItems: [
    {
      title: "Netvisor",
      description:
        "Työskentelin ensisijaisesti React-komponenttien kehityksen parissa. Ylläpidin yhdessä muiden kehittäjien kanssa sisäistä komponenttikirjastoa sekä tiimin kanssa toteutin mm. Netvisorin ostamista verkosta.",
    },
    {
      title: "Lahti-Huvilat / Hallitilaa.fi",
      description:
        "Hommiini kuului mm. nettisivujen ylläpito, myynti-ilmotusten laatiminen sekä yleinen IT-tuki. Tein myös sivut hallitilan vuokraustoiminnalle. Siihen kuuluu yhteydenottolomake sekä hallinta jossa vuokrauksien tilaa voi muuttaa.",
    },
    {
      title: "Mikkis.fi",
      description:
        "Jalokiveni ja ikuisuusprojektini, painotuksena design, responsiivisuus ja saavutettavuus. Myös verkkoliikenteen tasaamiseen ja turvallisuuteen kiinnitetään huomiota, isäntäjärjestelmää myöten.",
    },
    {
      title: "Discord-yhteisön tilastot",
      description:
        "Tehty tilastosivu ja Discord-botti joka kerää sanamääriä sekä mm. logittaa kanavia. Dataa havainnollistettu erilaisten kaavioiden avulla. Tietoja sensuroitu yksityisyyden vuoksi.",
    },
    {
      title: "MikkisGuy",
      description:
        "Nimimerkkini jonka alla olen tehnyt peleihin ja elämääni liittyvää videotuotantoa sekä livestriimausta. Suunnittelu, grafiikka ja muut osat tehty itse.",
    },
    {
      title: "Peliruukku",
      description:
        "Peliyhteisö johon liittyi tekemäni nettisivut hallintoineen, videotuotanto sekä netin välityksellä erilaiset tapahtumat ja aktiviteetit. Toiminnassa 2012-2024.",
    },
  ],
  technicalSkillsExperience: "Tekniset taidot ja kokemus",
  technologyArea: "Teknologia / Alue",
  proficiencyContext: "Pätevyys",
  skillsBreakdownLink: "Siirry teknisiin taitoihin ja kokemukseen",
  summaryTags: [
    "React & TypeScript",
    "Netvisor kokemus",
    "Full Stack (Node/PHP)",
    "Playwright E2E",
    "Figma / UX",
    "Äidinkieli suomi",
  ],
  skillsBreakdown: [
    {
      category: "Frontend",
      skills: [
        {
          area: "React",
          level: "Ammatillinen pätevyys (hooks, context, mukautetut kirjastot)",
        },
        {
          area: "TypeScript",
          level: "Pätevä (rajapinnat, tyypit, turvallisuus)",
        },
        {
          area: "CSS & UI",
          level: "Edistynyt (Flexbox, Grid, Styled Components)",
        },
      ],
    },
    {
      category: "Full Stack ja Backend",
      skills: [
        {
          area: "Node.js",
          level: "Käytännön osaaminen (Express, API-toteutus)",
        },
        { area: "PHP", level: "Keskitaso / ylläpitäjä (Legacy-tuki)" },
        { area: "SQL / Tietokanta", level: "Keskitaso (MariaDB, MySQL)" },
      ],
    },
    {
      category: "Laadunvarmistus ja operatiiviset taidot",
      skills: [
        { area: "Testaus", level: "Keskitaso (Playwright E2E, Postman)" },
        {
          area: "DevOps",
          level: "Käytännön osaaminen (Docker, CI/CD-toiminnot)",
        },
        {
          area: "Git / työnkulku",
          level: "Ammattimainen rutiini (koodin tarkistukset, haarat)",
        },
        {
          area: "AI-tehostettu työnkulku",
          level: "Taitava (Copilot, nopea prototyyppien luominen)",
        },
      ],
    },
    {
      category: "Suunnittelu ja pehmeät taidot",
      skills: [
        { area: "UI/UX", level: "Suunnittelija-kehittäjä-hybridi (Figma)" },
        { area: "Kieli", level: "Äidinkieli suomi, sujuva englanti" },
        {
          area: "Työskentelytapa",
          level: "Itsenäinen ja oma-aloitteinen vastuunkantaja",
        },
      ],
    },
  ],
};

export default finnish;
