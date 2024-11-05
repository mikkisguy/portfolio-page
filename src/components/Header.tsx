import styled from "styled-components";
import DarkModeToggle from "./shared/DarkModeToggle";
import LanguageSwitcher from "./shared/LanguageSwitcher";
import { useTranslation } from "react-i18next";
import mikko from "../assets/images/mikko.webp";

const Header = () => {
  const { t } = useTranslation();

  return (
    <header>
      <PageOptions>
        <DarkModeToggle />
        <LanguageSwitcher />
      </PageOptions>
      <PageHeading>
        <HeadingImage src={mikko} />
        <HeadingTitle>{t("header")}</HeadingTitle>
      </PageHeading>
      <Tagline>{t("tagline")}</Tagline>
    </header>
  );
};

export default Header;

const PageOptions = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacing.s};
  justify-content: left;
  width: 100%;
  padding-top: ${({ theme }) => theme.spacing.xxl};

  @media only screen and (max-width: ${({ theme }) => theme.bp.narrow}) {
    justify-content: center;
  }
`;

const PageHeading = styled.div`
  display: flex;
  flex-direction: row;
  gap: ${({ theme }) => theme.spacing.xxl};
  padding-top: ${({ theme }) => theme.spacing.xxxl};

  @media only screen and (max-width: ${({ theme }) => theme.bp.narrow}) {
    flex-direction: column;
    align-items: center;
  }
`;

const HeadingImage = styled.img`
  max-height: 180px;
`;

const HeadingTitle = styled.h1`
  color: ${({ theme }) => theme.colors.heading};
  font: ${({ theme }) => theme.fonts.h1};
  margin-bottom: ${({ theme }) => theme.spacing.xl};
  padding-top: ${({ theme }) => theme.spacing.xl};

  @media only screen and (max-width: ${({ theme }) => theme.bp.narrow}) {
    text-align: center;
  }
`;

const Tagline = styled.p`
  color: ${({ theme }) => theme.colors.bodyText};
  font: ${({ theme }) => theme.fonts.tagline};
  margin-top: ${({ theme }) => theme.spacing.xxl};

  @media only screen and (max-width: ${({ theme }) => theme.bp.narrow}) {
    text-align: center;
  }
`;
