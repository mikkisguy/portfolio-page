import { createGlobalStyle } from "styled-components";
import cssReset from "./cssReset";
import fonts from "./fonts";

const GlobalStyle = createGlobalStyle`
    ${fonts}
    ${cssReset}

    body {
        background-color: ${({ theme }) => theme.colors.background};

        & .external-link {
            color: ${({ theme }) => theme.colors.bodyTextSecondary};
            text-decoration-style: dotted;
            text-decoration-color: ${({ theme }) => theme.colors.linkUnderline};
            text-decoration-thickness: 1.5px;
            text-underline-offset: ${({ theme }) => theme.spacing.xxs};

            &:hover,
            &:focus {
                text-decoration: none;
            }
        }
    }

`;

export default GlobalStyle;
