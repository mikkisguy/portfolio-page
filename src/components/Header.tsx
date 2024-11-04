import styled from "styled-components";
import DarkModeToggle from "./shared/DarkModeToggle";
import LanguageSwitcher from "./shared/LanguageSwitcher";
import { useTranslation } from "react-i18next";
import mikko from "../assets/images/mikko.webp";
import Divider from "./shared/Divider";

const Header = () => {
  const { t } = useTranslation();

  return (
    <>
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
      <Divider />
    </>
  );
};

export default Header;

const PageOptions = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacing.s};
  justify-content: left;
  width: 100%;
  padding-top: ${({ theme }) => theme.spacing.xxl};
`;

const PageHeading = styled.div`
  display: flex;
  flex-direction: row;
  gap: ${({ theme }) => theme.spacing.xxl};
  padding-top: ${({ theme }) => theme.spacing.xxxl};
`;

const HeadingImage = styled.img`
  width: 150px;
  height: 150px;
`;

const HeadingTitle = styled.h1`
  color: ${({ theme }) => theme.colors.heading};
  font: ${({ theme }) => theme.fonts.h1};
  margin-bottom: ${({ theme }) => theme.spacing.xl};
  padding-top: ${({ theme }) => theme.spacing.l};
`;

const Tagline = styled.p`
  color: ${({ theme }) => theme.colors.bodyText};
  font: ${({ theme }) => theme.fonts.tagline};
  margin-top: ${({ theme }) => theme.spacing.xxl};
`;
