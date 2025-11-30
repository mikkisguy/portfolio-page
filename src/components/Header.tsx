import styled from "styled-components";
import { useTranslation } from "react-i18next";
import mikko from "../assets/images/mikko.webp";
import DarkModeToggle from "./DarkModeToggle";
import LanguageSwitcher from "./LanguageSwitcher";

const Header = () => {
  const { t } = useTranslation();

  return (
    <header>
      <Top>
        <PageOptions>
          <DarkModeToggle />
          <LanguageSwitcher />
        </PageOptions>
        <div>
          <JumpLink href="#skills-section">
            {t("skillsBreakdownLink")} <span>↓</span>
          </JumpLink>
        </div>
      </Top>
      <PageHeading>
        <HeadingImage src={mikko} alt="Mikko Larinen" />
        <HeadingTitle>{t("header")}</HeadingTitle>
      </PageHeading>
      <Tagline>{t("tagline")}</Tagline>
    </header>
  );
};

export default Header;

const Top = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacing.s};
  justify-content: space-between;
  width: 100%;
  padding-top: ${({ theme }) => theme.spacing.xxl};

  @media only screen and (max-width: ${({ theme }) => theme.bp.narrow}) {
    flex-direction: column;
    text-align: center;
  }
`;

const PageOptions = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacing.s};

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

  @media only screen and (max-width: ${({ theme }) => theme.bp.small}) {
    padding-left: ${({ theme }) => theme.spacing.xxxl};
    padding-right: ${({ theme }) => theme.spacing.xxxl};
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

const JumpLink = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.6rem 1.3rem;

  border: 4px double transparent;
  background-color: ${({ theme }) => theme.colors.backgroundSecondary};
  border-radius: 3rem;

  font: ${({ theme }) => theme.fonts.body};
  color: ${({ theme }) => theme.colors.bodyText};
  text-decoration: none;
  transition: all 0.2s ease-in-out;

  &:hover {
    border: 4px double ${({ theme }) => theme.colors.accent};
  }
`;
