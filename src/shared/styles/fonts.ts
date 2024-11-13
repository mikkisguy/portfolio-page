import { css } from "styled-components";
import SourceCodeProBold from "../../assets/fonts/SourceCodePro-Bold.woff2";
import DMSansRegular from "../../assets/fonts/DMSans-Regular.woff2";
import DMSansBold from "../../assets/fonts/DMSans-Bold.woff2";

const fonts = css`
  /*
    Downloaded from Google Fonts
    https://fonts.google.com/

    Converted with Transfonter
    https://transfonter.org/
 */

  @font-face {
    font-family: "Source Code Pro Bold";
    src: url("${SourceCodeProBold}") format("woff2");
    font-weight: bold;
    font-style: normal;
    font-display: swap;
  }

  @font-face {
    font-family: "DM Sans";
    src: url("${DMSansRegular}") format("woff2");
    font-weight: normal;
    font-style: normal;
    font-display: swap;
  }

  @font-face {
    font-family: "DM Sans Bold";
    src: url("${DMSansBold}") format("woff2");
    font-weight: bold;
    font-style: normal;
    font-display: swap;
  }
`;

export default fonts;
