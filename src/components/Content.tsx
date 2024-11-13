import { useTranslation } from "react-i18next";
import Divider from "./shared/Divider";
import PortfolioItem from "./shared/PortfolioItem";
import { ITEMS_META } from "../shared/constants";
import { PortfolioItems } from "../shared/translations/translations";

const Content = () => {
  const { t } = useTranslation();

  const portfolioItems = t("portfolioItems", {
    returnObjects: true,
  }) as PortfolioItems;

  return portfolioItems?.map((item, index) => (
    <>
      <PortfolioItem
        key={index}
        title={item.title}
        imageSlug={ITEMS_META[index].imageSlug}
        description={item.description}
        tags={ITEMS_META[index].tags}
        isHobbyProject={ITEMS_META[index].isHobbyProject}
      />
      <Divider />
    </>
  ));
};

export default Content;
