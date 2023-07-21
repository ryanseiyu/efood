import { createGlobalStyle } from 'styled-components'

export const cores = {
  rosa: '#E66767',
  branco: '#FFFFFF',
  fundo: '#FFF8F2',
  button: '#FFEBD9'
}

export const GlobalCss = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: Roboto, sans-serif;
    list-style: none;
  }

  body {
    background-color: ${cores.rosa};
    color: ${cores.fundo};
    padding-top: 0;
  }

  .container {
    max-width: 1024px;
    width: 100%;
    margin: 0 auto;
  }
`
