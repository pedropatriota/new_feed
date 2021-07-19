import { createGlobalStyle } from "styled-components"


export const GlobalStyle = createGlobalStyle`

* {
  margin: 0;
  padding: 0;
  outline: 0;
  box-sizing: border-box;
}

*:focus {
  outline: 0;
}

#root{
  transition: scale(1.0);
  transform-origin:0 0;
}

html, body, #root {
  height: 100vh;
  width: 100vw;
  background: #fff;
  overflow-x: hidden;

  body {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    
  }

  body, input, button, textarea {
    font: 14px  -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;  
  }

  input:-internal-autofill-selected {
    background-color: transparent !important;
  }

  a {
    text-decoration: none;

  }

  ul {
    list-style: none;
  }

  button {
    cursor: pointer;
  }
}
  `