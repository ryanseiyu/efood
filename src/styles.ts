import { createGlobalStyle, styled } from 'styled-components'

export const cores = {
  rosa: '#E66767',
  branco: '#FFFFFF',
  fundo: '#FFF8F2',
  button: '#FFEBD9',
  cinza: '#D3D3D3'
}

export const breakpoints = {
  desktop: '1024px',
  tablet: '768px',
  mobile: '480px'
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
    width: 100%;
  }

  .container {
    max-width: 1024px;
    width: 100%;
    margin: 0 auto;

    @media (max-width: ${breakpoints.desktop}) {
      width: 80%;
    }
  }

  #root {
    @media (max-width: ${breakpoints.desktop}) {
      width: fit-content;
    }
  }
`
