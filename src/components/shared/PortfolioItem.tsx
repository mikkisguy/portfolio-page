import { useTranslation } from "react-i18next";
import styled from "styled-components";
import PORTFOLIO_IMAGES from "../../shared/portfolioImages";

type PortfolioItemProps = {
  isHobbyProject?: boolean;
  title: string;
  imageSlug: string;
  description: string;
  tags: string[];
};

const PortfolioItem = (props: PortfolioItemProps) => {
  const { t } = useTranslation();

  const getImageElement = (index: number) => {
    // Example: peliruukku-1-thumb
    const thumbImageName = `${props.imageSlug}-${index}-thumb`;
    // Example: Peliruukku image 1
    const imageAltText = `${props.title} ${t("portfolioItem.image")} ${index}`;

    return (
      <img
        key={index}
        src={PORTFOLIO_IMAGES[thumbImageName]}
        alt={imageAltText}
      />
    );
  };

  return (
    <div>
      <ItemHeader>
        <CategoryTag>
          {props.isHobbyProject
            ? t("portfolioItem.hobbyProject")
            : t("portfolioItem.workProject")}
        </CategoryTag>
        <Title>{props.title}</Title>
      </ItemHeader>
      <ImagesContainer>
        {[1, 2, 3].map((index) => getImageElement(index))}
      </ImagesContainer>
      <Description>{props.description}</Description>
      <Tags>
        {t("portfolioItem.tags")}: {props.tags.join(", ")}
      </Tags>
    </div>
  );
};

export default PortfolioItem;

const ItemHeader = styled.div`
  display: flex;
  flex-direction: row;
  gap: ${({ theme }) => theme.spacing.l};
  margin-bottom: ${({ theme }) => theme.spacing.xxs};
`;

const CategoryTag = styled.span`
  font: ${({ theme }) => theme.fonts.meta};
  color: ${({ theme }) => theme.colors.bodyTextSecondary};
  background-color: ${({ theme }) => theme.colors.backgroundTertiary};
  padding: ${({ theme }) => `${theme.spacing.xs} ${theme.spacing.l}`};
  max-height: 2rem;
  border-radius: 3rem;
  margin-top: ${({ theme }) => theme.spacing.l};
`;

const Title = styled.h2`
  font: ${({ theme }) => theme.fonts.h2};
  color: ${({ theme }) => theme.colors.heading};
  margin-top: 0;
  margin-bottom: ${({ theme }) => theme.spacing.xl};
`;

const ImagesContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 10px;
  margin-bottom: ${({ theme }) => theme.spacing.xxs};
`;

const Description = styled.p`
  font: ${({ theme }) => theme.fonts.body};
  color: ${({ theme }) => theme.colors.bodyText};
  padding: ${({ theme }) => theme.spacing.l} 0;
`;

const Tags = styled.p`
  font: ${({ theme }) => theme.fonts.meta};
  color: ${({ theme }) => theme.colors.bodyTextSecondary};
`;
