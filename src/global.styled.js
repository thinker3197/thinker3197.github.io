import { injectGlobal } from "styled-components";
// import Charter from './fonts/Charter.ttf';

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

  #portfolio {
    height: 100vh;
    width: 100vw;
    overflow-x: hidden;
  }
`;
