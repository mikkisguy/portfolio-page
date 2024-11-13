import { useTranslation } from "react-i18next";
import styled from "styled-components";
import getPortfolioImage from "../../shared/portfolioImages";

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
    // Example: Peliruukku image 1
    const imageAltText = `${props.title} ${t("portfolioItem.image")} ${index}`;

    return (
      <img
        key={index}
        src={getPortfolioImage(props.imageSlug, index, true)}
        alt={imageAltText}
      />
    );
  };

  return (
    <ItemContainer>
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
    </ItemContainer>
  );
};

export default PortfolioItem;

const ItemContainer = styled.div`
  background-color: ${({ theme }) => theme.colors.backgroundSecondary};
  padding: ${({ theme }) => `${theme.spacing.xl} ${theme.spacing.xxl}`};
  box-shadow: ${({ theme }) => theme.colors.shadow} 0 0 0.3rem 0 inset;
  border-radius: 3rem;
`;

const ItemHeader = styled.div`
  display: flex;
  flex-direction: row;
  gap: ${({ theme }) => theme.spacing.l};
  margin-bottom: ${({ theme }) => theme.spacing.xxs};
`;

const CategoryTag = styled.span`
  font: ${({ theme }) => theme.fonts.meta};
  color: ${({ theme }) => theme.colors.bodyTextSecondary};
  border: 3px solid;
  border-color: ${({ theme }) => theme.colors.backgroundTertiary};
  padding: ${({ theme }) => `${theme.spacing.xxs} ${theme.spacing.s}`};
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
  gap: ${({ theme }) => theme.spacing.xl};
  margin-bottom: ${({ theme }) => theme.spacing.xxl};

  & img {
    border-radius: 1rem;
    border: 3px solid;
    border-color: ${({ theme }) => theme.colors.backgroundTertiary};
    opacity: 0.9;
    transition: opacity 0.25s;

    &:hover {
      opacity: 1;
    }
  }
`;

const Description = styled.p`
  font: ${({ theme }) => theme.fonts.body};
  color: ${({ theme }) => theme.colors.bodyText};
  padding-bottom: ${({ theme }) => theme.spacing.xxl};
  border-bottom: 1px solid ${({ theme }) => theme.colors.backgroundTertiary};
`;

const Tags = styled.p`
  font: ${({ theme }) => theme.fonts.meta};
  color: ${({ theme }) => theme.colors.bodyTextSecondary};
  padding-top: ${({ theme }) => theme.spacing.l};
`;
