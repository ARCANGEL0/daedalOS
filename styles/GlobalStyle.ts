import * as styled from "styled-components";

const GlobalStyle = styled.createGlobalStyle`
  *,
  *::before,
  *::after {
    border: 0;
    box-sizing: border-box;
    cursor: default;
    font-variant-numeric: tabular-nums;
    margin: 0;
    outline: 0;
    padding: 0;
    -webkit-tap-highlight-color: transparent;
    text-rendering: optimizeLegibility;
    -webkit-touch-callout: none;
    user-select: none;
  }

  body,
  html {
    font-family: ${({ theme }) => theme.formats.systemFont};
  }

  body {
    height: 100%;
    overflow: hidden;
    position: fixed;
    text-size-adjust: none;
  }

:root {
  --sb-track-color: rgba(10, 10, 10, 0.4); /* Match the article background */
  --sb-thumb-color: rgba(50, 50, 50, 0.6); /* Color for the scrollbar thumb */
  --sb-size: 5px; /* Size of the scrollbar */
}

*::-webkit-scrollbar {
  width: var(--sb-size) !important; /* Width of the vertical scrollbar */
  height: var(--sb-size) !important; /* Height of the horizontal scrollbar */
}

*::-webkit-scrollbar-track {
  background: var(--sb-track-color) !important; /* Background color of the scrollbar track */
  border-radius: 8px !important; /* Rounded corners for the track */
}

*::-webkit-scrollbar-thumb {
  background: var(--sb-thumb-color) !important; /* Color of the scrollbar thumb */
  border-radius: 4px !important; /* Rounded corners for the thumb */
}

*::-webkit-scrollbar-thumb:hover {
  background: rgba(60, 60, 60, 0.8) !important; /* Darken on hover */
}

/* Hide default scrollbar buttons for both vertical and horizontal scrollbars */
*::-webkit-scrollbar-button:vertical {
  display: none !important; /* Hides the vertical scrollbar buttons */
    background: transparent !important; 

}
*::-webkit-scrollbar-button {
  display: none !important;
    background: transparent !important; 
    /* Hides the vertical scrollbar buttons */
}
*::-webkit-scrollbar-button:horizontal {
  display: none !important; /* Hides the horizontal scrollbar buttons */
    background: transparent !important; 

}
*::-webkit-scrollbar-corner {
  display: none !important; /* Hides the horizontal scrollbar buttons */
    background: transparent !important; 

}
@supports not (selector(::-webkit-scrollbar)) {
  * {
    scrollbar-color: var(--sb-thumb-color) var(--sb-track-color) !important; /* For Firefox */
    scrollbar-width: thin !important; /* Thin scrollbar for Firefox */
  }
}

  html {
    background-color: ${({ theme }) => theme.colors.background};
    /* stylelint-disable value-no-vendor-prefix */
    height: -webkit-fill-available;
    height: -moz-available;
    /* stylelint-enable value-no-vendor-prefix */

    &::before,
    &::after {
      background-blend-mode: var(--background-blend-mode);
      background-position: center;
      content: "";
      height: 100%;
      position: absolute;
      transition: opacity 1.25s ease-in-out;
      width: 100%;
      z-index: -1;
    }

    &::before {
      background: var(--before-background);
      opacity: var(--before-background-opacity);
    }

    &::after {
      background: var(--after-background);
      opacity: var(--after-background-opacity);
    }
  }

  input::selection,
  textarea::selection {
    background-color: rgb(0, 120, 215);
    color: #fff;
  }

  input,
  textarea {
    cursor: text;
    user-select: text;
  }

  picture > img {
    display: block;
  }

  ol,
  ul {
    list-style: none;
  }
`;

export default GlobalStyle;
