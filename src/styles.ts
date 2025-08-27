import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    list-style: none;
    color: ${({ theme }) => theme.text};
    font-family: "Roboto", sans-serif;
  }

  body {
    background-color: ${({ theme }) => theme.bg_black};
  }

  main {
    background-color: ${({ theme }) => theme.bg_gray};
  }

  .container {
    max-width: 1024px;
    width: 100%;
    margin: 0 auto;
  }

  .Title {
    margin-bottom: 32px;
  }
`

export default GlobalStyles
