import Divider from "./shared/Divider";
import PortfolioItem from "./shared/PortfolioItem";

const Content = () => {
  return (
    <>
      <PortfolioItem
        title="Peliruukku"
        description="Peliyhteisö lorem ipsum dolor sit amet"
        tags={["PHP", "MySQL", "video"]}
        isHobbyProject
      />
      <Divider />
    </>
  );
};

export default Content;
