import {
  faCircle,
  faMoon,
  faSun,
  IconDefinition,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ChangeEvent, useContext } from "react";
import styled from "styled-components";
import { useTranslation } from "react-i18next";
import { ThemeContext, ColorStyles } from "../shared/styles/styled";
import { themes } from "../shared/styles/themes";
import { useDarkMode } from "../shared/useDarkMode";
import { SiteThemeContext } from "./ThemeContextProvider";

type AwesomeIconType = React.ComponentType<{
  icon: IconDefinition;
  className?: string;
}>;

/**
 * A Dark Mode Toggle component that allows users to switch between light and dark themes.
 * It uses the SiteThemeContext to manage the current theme and stores it in local storage.
 *
 * @return {React.JSX.Element} The Dark Mode Toggle component
 */
const DarkModeToggle = () => {
  const { t } = useTranslation();
  const { setCurrentTheme } = useContext(SiteThemeContext) as ThemeContext;

  /**
   * Handles the change event of the dark mode toggle input.
   * Sets the current theme and stores it in local storage.
   *
   * @param {ChangeEvent<HTMLInputElement>} e - The change event object
   * @returns {void}
   */
  const handleChange = (e: ChangeEvent<HTMLInputElement>): void => {
    /**
     * Returns the theme object based on the checked state of the input.
     *
     * @return {ColorStyles} The theme object
     */
    const getTheme = (): ColorStyles =>
      e.target.checked ? themes.dark : themes.light;

    // Set the current theme
    setCurrentTheme(getTheme());
    // Store the current theme in local storage
    localStorage.setItem("current_theme", JSON.stringify(getTheme()));
  };

  return (
    <ToggleForm title={t("changeTheme")}>
      <ToggleCheckbox
        checked={useDarkMode()}
        onChange={handleChange}
        type="checkbox"
        id="darkmode-toggle"
        role="switch"
      />
      <ToggleLabel htmlFor="darkmode-toggle">
        <Toggle>
          <ToggleIcon
            icon={useDarkMode() ? faMoon : faSun}
            className={`${useDarkMode() && "dark-mode"}`}
          />
          <ToggleButton
            icon={faCircle}
            className={`${useDarkMode() && "dark-mode"}`}
          />
          <LabelText>{t("darkMode")}</LabelText>
        </Toggle>
      </ToggleLabel>
    </ToggleForm>
  );
};

export default DarkModeToggle;

const Toggle = styled.div`
  background-color: ${({ theme }) => theme.colors.backgroundSecondary};
  box-shadow: ${({ theme }) => theme.colors.shadow} 0 0 0.3rem 0 inset;
  border-radius: 3rem;
  height: 2rem;
  transition: background-color 0.25s;
  width: 4.5rem;
  font-size: 1.2rem;

  &:hover {
    outline: 2px solid ${({ theme }) => theme.colors.accent}80;
  }
`;

const ToggleForm = styled.form`
  &:focus-within ${Toggle} {
    outline: 2px solid ${({ theme }) => theme.colors.accent}80;
  }
`;

const ToggleCheckbox = styled.input`
  opacity: 0;
  position: absolute;
  left: -999vw;
`;

const ToggleLabel = styled.label`
  cursor: pointer;
`;

const ToggleIcon = styled(FontAwesomeIcon as AwesomeIconType)`
  color: ${({ theme }) => theme.colors.themeIcon};
  transition: transform 0.25s;
  padding: ${({ theme }) => theme.spacing.xs};
  opacity: 0.5;

  &.dark-mode {
    transform: translate(2.7rem, 0);
  }
`;

const ToggleButton = styled(FontAwesomeIcon as AwesomeIconType)`
  transform: translate(0.3em, 0);
  color: ${({ theme }) => theme.colors.themeIcon};
  transition: transform 0.25s;
  padding: ${({ theme }) => theme.spacing.xs};

  &.dark-mode {
    transform: translate(-1.7rem, 0);
  }
`;

const LabelText = styled.span`
  font: ${({ theme }) => theme.fonts.meta};
  opacity: 0;
  position: absolute;
  left: -999vw;
`;
