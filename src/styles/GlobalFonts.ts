import { createGlobalStyle } from 'styled-components';

export const GlobalFonts = createGlobalStyle`
  @font-face {
    font-family: "NPOSans-Regular";
    src: url(https://assetscdn.npostart.nl/static/font/NPOSans-Regular.woff2) format("woff2"),url(https://assetscdn.npostart.nl/static/font/NPOSans-Regular.woff) format("woff"),url(https://assetscdn.npostart.nl/static/font/NPOSans-Regular.ttf) format("truetype");
    font-style: normal
  }
  
@font-face {
  font-family: "NPOSans-Bold";
  src: url(https://assetscdn.npostart.nl/static/font/NPOSans-Bold.woff2) format("woff2"),
  url(https://assetscdn.npostart.nl/static/font/NPOSans-Bold.woff) format("woff"),
  font-weight: 700;
}

@font-face{
  font-family: "npo-icons";
  src:url(https://assetscdn.npostart.nl/static/font/npo-icons.woff2) format("woff2"),url(https://assetscdn.npostart.nl/static/font/npo-icons.woff) format("woff"),
  url(https://assetscdn.npostart.nl/static/font/npo-icons.ttf) format("truetype");font-style:normal
}

  `;