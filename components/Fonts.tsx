import { Global } from "@emotion/react";

const Fonts = () => (
  <Global
    styles={`
    /* latin */  
      @font-face {
          font-family: "Chapter-Bold";
          src: url("/fonts/Chapter-Bold.otf");
          font-style: bold;
          font-weight: 700;
          font-display: swap;
        }
      
      @font-face {
          font-family: "Chapter-Regular";
          src: url("/fonts/Chapter-Regular.otf");
          font-style: normal;
          font-weight: 400;
          font-display: swap;
        }
        @font-face {
            font-family: "Chapter-Light";
            src: url("/fonts/Chapter-Light.otf");
            font-style: light;
            font-weight: 300;
            font-display: swap;
          }
    `}
  />
);

export default Fonts;
