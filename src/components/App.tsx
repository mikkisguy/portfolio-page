import styled from "styled-components";
import GlobalStyle from "../shared/styles/globalStyle";
import ThemeContextProvider from "./ThemeContextProvider";
import Header from "./Header";
import { useTranslation } from "react-i18next";

const App = () => {
  const { t } = useTranslation();

  return (
    <ThemeContextProvider>
      <GlobalStyle />
      <PageOuterContainer>
        <UnderDevelopment>{t("underDevelopment")}</UnderDevelopment>
        <PageContainer>
          <Header />
        </PageContainer>
      </PageOuterContainer>
    </ThemeContextProvider>
  );
};

export default App;

const PageOuterContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  width: 100%;
`;

const PageContainer = styled.div`
  place-self: center;
  width: 60%;
  flex: 1;

  @media only screen and (max-width: ${({ theme }) => theme.bp.small}) {
    width: 100%;
    padding: 0 ${({ theme }) => theme.spacing.xxxl};
  }
`;

const UnderDevelopment = styled.div`
  font: ${({ theme }) => theme.fonts.body};
  background-color: ${({ theme }) => theme.colors.backgroundSecondary};
  color: ${({ theme }) => theme.colors.bodyText};
  padding: ${({ theme }) => `${theme.spacing.l} ${theme.spacing.xxl}`};
  width: 100%;
  text-align: center;
`;
