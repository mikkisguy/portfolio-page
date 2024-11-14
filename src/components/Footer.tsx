import { useTranslation } from "react-i18next";
import styled from "styled-components";

const Footer = () => {
  const { t } = useTranslation();

  return (
    <FooterContainer>
      <FooterText>
        Mikko Larinen - 2024 {" - "}
        <a
          href="https://github.com/mikkisguy/portfolio-page"
          className="external-link"
          target="_blank"
          rel="noreferrer"
        >
          {t("sourceCode")}
        </a>
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
