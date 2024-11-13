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
import mikkisfi1Thumb from "../assets/images/items/mikkisfi-1-thumb.webp";
import mikkisfi2Thumb from "../assets/images/items/mikkisfi-2-thumb.webp";
import mikkisfi3Thumb from "../assets/images/items/mikkisfi-3-thumb.webp";
import mikkisfi1 from "../assets/images/items/mikkisfi-1.webp";
import mikkisfi2 from "../assets/images/items/mikkisfi-2.webp";
import mikkisfi3 from "../assets/images/items/mikkisfi-3.webp";
import mikkisguy1Thumb from "../assets/images/items/mikkisguy-1-thumb.webp";
import mikkisguy2Thumb from "../assets/images/items/mikkisguy-2-thumb.webp";
import mikkisguy3Thumb from "../assets/images/items/mikkisguy-3-thumb.webp";
import mikkisguy1 from "../assets/images/items/mikkisguy-1.webp";
import mikkisguy2 from "../assets/images/items/mikkisguy-2.webp";
import mikkisguy3 from "../assets/images/items/mikkisguy-3.webp";
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
  "mikkisfi-1-thumb": mikkisfi1Thumb,
  "mikkisfi-2-thumb": mikkisfi2Thumb,
  "mikkisfi-3-thumb": mikkisfi3Thumb,
  "mikkisfi-1": mikkisfi1,
  "mikkisfi-2": mikkisfi2,
  "mikkisfi-3": mikkisfi3,
  "mikkisguy-1-thumb": mikkisguy1Thumb,
  "mikkisguy-2-thumb": mikkisguy2Thumb,
  "mikkisguy-3-thumb": mikkisguy3Thumb,
  "mikkisguy-1": mikkisguy1,
  "mikkisguy-2": mikkisguy2,
  "mikkisguy-3": mikkisguy3,
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
