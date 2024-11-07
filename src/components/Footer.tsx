import { useTranslation } from "react-i18next";
import styled from "styled-components";

const Footer = () => {
  const { t } = useTranslation();

  return (
    <FooterContainer>
      <FooterText>
        Mikko Larinen - 2024 {" - "}
        <SourceCodeLink href="https://github.com/mikkisguy/portfolio-page">
          {t("sourceCode")}
        </SourceCodeLink>
      </FooterText>
    </FooterContainer>
  );
};

export default Footer;

const FooterContainer = styled.div`
  padding-bottom: ${({ theme }) => theme.spacing.xxxl};
`;

const FooterText = styled.p`
  font: ${({ theme }) => theme.fonts.meta};
  color: ${({ theme }) => theme.colors.bodyTextSecondary};
  text-align: center;
`;

const SourceCodeLink = styled.a`
  color: ${({ theme }) => theme.colors.bodyTextSecondary};

  &:hover,
  &:focus {
    text-decoration: none;
  }
`;
