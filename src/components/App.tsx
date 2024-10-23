import GlobalStyle from "../shared/styles/globalStyle";
import DarkModeToggle from "./shared/DarkModeToggle";
import LanguageSwitcher from "./shared/LanguageSwitcher";
import ThemeContextProvider from "./ThemeContextProvider";

const App = () => {
  return (
    <ThemeContextProvider>
      <GlobalStyle />
      <DarkModeToggle />
      <LanguageSwitcher />
    </ThemeContextProvider>
  );
};

export default App;
