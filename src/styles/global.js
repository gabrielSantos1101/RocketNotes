import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
:root {
    font-family: Inter, system-ui, Avenir, Helvetica, Arial, sans-serif;
    line-height: 1.5;
    font-weight: 400;
  
    color-scheme: light dark;
    color: rgba(255, 255, 255, 0.87);
    background-color: #242424;
  
    font-synthesis: none;
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    -webkit-text-size-adjust: 100%;
  }

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    
}

body {
    width: 100vw;
    height: 100vh;
    
    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_800};
    color: #f1f1f1;
}

a {
    text-decoration: none;
    color: inherit;
}

button, a {
    cursor: pointer;
    transition: filter 0.2s;
}

button:hover, a:hover {
    filter: brightness(0.9);
}
`
