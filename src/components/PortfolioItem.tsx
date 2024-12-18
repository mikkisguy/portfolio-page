import { useTranslation } from "react-i18next";
import styled from "styled-components";
import ItemImages from "./ItemImages";

export type PortfolioItemProps = {
  isHobbyProject?: boolean;
  title: string;
  imageSlug: string;
  description: string;
  tags: string[];
  links?: string[];
};

const PortfolioItem = (props: PortfolioItemProps) => {
  const { t } = useTranslation();

  const getLinkElements = (links: string[]) => {
    return links.map((link, index) => (
      <>
        <a
          key={link}
          href={link}
          className="external-link"
          target="_blank"
          rel="noreferrer"
        >
          {link.replace(/^https?:\/\/(www\.)?/, "")}
        </a>
        {index < links.length - 1 && ", "}
      </>
    ));
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
      <ItemImages imageSlug={props.imageSlug} title={props.title} />
      <Description>{props.description}</Description>
      <Meta>
        {t("portfolioItem.tags")}: {props.tags.join(", ")}
      </Meta>
      {props.links && (
        <Meta>
          {t("portfolioItem.links")}: {getLinkElements(props.links)}
        </Meta>
      )}
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

  @media only screen and (max-width: ${({ theme }) => theme.bp.narrow}) {
    flex-wrap: wrap;
    justify-content: center;
  }
`;

const CategoryTag = styled.span`
  font: ${({ theme }) => theme.fonts.meta};
  color: ${({ theme }) => theme.colors.bodyTextSecondary};
  border: 3px solid;
  border-color: ${({ theme }) => theme.colors.border};
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

  @media only screen and (max-width: ${({ theme }) => theme.bp.narrow}) {
    text-align: center;
  }
`;

const Description = styled.p`
  font: ${({ theme }) => theme.fonts.body};
  color: ${({ theme }) => theme.colors.bodyText};
  padding-bottom: ${({ theme }) => theme.spacing.xxl};
  border-bottom: 1px solid;
  border-color: ${({ theme }) => theme.colors.border};
`;

const Meta = styled.p`
  font: ${({ theme }) => theme.fonts.meta};
  color: ${({ theme }) => theme.colors.bodyTextSecondary};
  padding-top: ${({ theme }) => theme.spacing.l};
`;
