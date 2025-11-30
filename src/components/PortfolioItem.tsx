import { useTranslation } from "react-i18next";
import styled from "styled-components";
import ItemImages from "./ItemImages";
import { SectionContainer, Tag, Title } from "./Styled";

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
          key={index}
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
    <SectionContainer>
      <ItemHeader>
        <Tag>
          {props.isHobbyProject
            ? t("portfolioItem.hobbyProject")
            : t("portfolioItem.workProject")}
        </Tag>
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
    </SectionContainer>
  );
};

export default PortfolioItem;

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
