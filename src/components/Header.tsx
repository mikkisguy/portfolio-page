import styled from "styled-components";
import DarkModeToggle from "./shared/DarkModeToggle";
import LanguageSwitcher from "./shared/LanguageSwitcher";
import { useTranslation } from "react-i18next";

const Header = () => {
  const { t } = useTranslation();

  return (
    <header>
      <PageOptions>
        <DarkModeToggle />
        <LanguageSwitcher />
      </PageOptions>
      <PageHeading>{t("header")}</PageHeading>
      <Tagline>{t("tagline")}</Tagline>
    </header>
  );
};

export default Header;

const PageOptions = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacing.s};
  justify-self: end;
  padding-top: ${({ theme }) => theme.spacing.xl};
  padding-bottom: ${({ theme }) => theme.spacing.xl};
`;

const PageHeading = styled.h1`
  color: ${({ theme }) => theme.colors.heading};
  font: ${({ theme }) => theme.fonts.h1};
  padding-top: ${({ theme }) => theme.spacing.xxxl};
  margin-bottom: ${({ theme }) => theme.spacing.xl};
  border-top: 1px solid ${({ theme }) => theme.colors.accent};
`;

const Tagline = styled.p`
  color: ${({ theme }) => theme.colors.bodyText};
  font: ${({ theme }) => theme.fonts.tagline};
  margin-top: ${({ theme }) => theme.spacing.xxl};
  padding-bottom: ${({ theme }) => theme.spacing.xxxl};
  border-bottom: 1px solid ${({ theme }) => theme.colors.accent};
`;
