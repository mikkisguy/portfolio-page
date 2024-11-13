import netvisor1Thumb from "../assets/images/items/netvisor-1-thumb.webp";
import netvisor2Thumb from "../assets/images/items/netvisor-2-thumb.webp";
import netvisor3Thumb from "../assets/images/items/netvisor-3-thumb.webp";
import netvisor1 from "../assets/images/items/netvisor-1.webp";
import netvisor2 from "../assets/images/items/netvisor-2.webp";
import netvisor3 from "../assets/images/items/netvisor-3.webp";
import lahtihuvilat1Thumb from "../assets/images/items/lahtihuvilat-hallitilaafi-1-thumb.webp";
import lahtihuvilat2Thumb from "../assets/images/items/lahtihuvilat-hallitilaafi-2-thumb.webp";
import lahtihuvilat3Thumb from "../assets/images/items/lahtihuvilat-hallitilaafi-3-thumb.webp";
import lahtihuvilat1 from "../assets/images/items/lahtihuvilat-hallitilaafi-1.webp";
import lahtihuvilat2 from "../assets/images/items/lahtihuvilat-hallitilaafi-2.webp";
import lahtihuvilat3 from "../assets/images/items/lahtihuvilat-hallitilaafi-3.webp";
import peliruukku1Thumb from "../assets/images/items/peliruukku-1-thumb.webp";
import peliruukku2Thumb from "../assets/images/items/peliruukku-2-thumb.webp";
import peliruukku3Thumb from "../assets/images/items/peliruukku-3-thumb.webp";
import peliruukku1 from "../assets/images/items/peliruukku-1.webp";
import peliruukku2 from "../assets/images/items/peliruukku-2.webp";
import peliruukku3 from "../assets/images/items/peliruukku-3.webp";

type Images = {
  [key: string]: string;
};

const portfolioImages: Images = {
  "netvisor-1-thumb": netvisor1Thumb,
  "netvisor-2-thumb": netvisor2Thumb,
  "netvisor-3-thumb": netvisor3Thumb,
  "netvisor-1": netvisor1,
  "netvisor-2": netvisor2,
  "netvisor-3": netvisor3,
  "lahtihuvilat-hallitilaafi-1-thumb": lahtihuvilat1Thumb,
  "lahtihuvilat-hallitilaafi-2-thumb": lahtihuvilat2Thumb,
  "lahtihuvilat-hallitilaafi-3-thumb": lahtihuvilat3Thumb,
  "lahtihuvilat-hallitilaafi-1": lahtihuvilat1,
  "lahtihuvilat-hallitilaafi-2": lahtihuvilat2,
  "lahtihuvilat-hallitilaafi-3": lahtihuvilat3,
  "peliruukku-1-thumb": peliruukku1Thumb,
  "peliruukku-2-thumb": peliruukku2Thumb,
  "peliruukku-3-thumb": peliruukku3Thumb,
  "peliruukku-1": peliruukku1,
  "peliruukku-2": peliruukku2,
  "peliruukku-3": peliruukku3,
};

const getPortfolioImage = (
  imageSlug: string,
  imageIndex: number,
  isThumb: boolean
): string => {
  if (isThumb) {
    return portfolioImages[`${imageSlug}-${imageIndex}-thumb`];
  }

  return portfolioImages[`${imageSlug}-${imageIndex}`];
};

export default getPortfolioImage;
