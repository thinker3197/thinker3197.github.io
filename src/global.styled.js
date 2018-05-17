import { css, injectGlobal } from "styled-components";

const selectionMixin = css`
  color: #ffffff;
  background: #7684ff;
`;

injectGlobal`
  * {
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  body {
    margin: 0;
    padding: 0;
  }

  ::selection {
    ${selectionMixin}
  }

  ::-moz-selection {
    ${selectionMixin}
  }

  #portfolio {
    height: 100vh;
    width: 100vw;
    overflow-x: hidden;
  }
`;
