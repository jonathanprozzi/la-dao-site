import { Global } from "@emotion/react";

const Fonts = () => (
  <Global
    styles={`

      @font-face {
          font-family: "Chapter-Regular";
          src: url("/fonts/Chapter/Chapter-Regular.otf");
          font-style: normal;
          font-weight: 400;
          font-display: swap;
        }

    `}
  />
);

export default Fonts;
