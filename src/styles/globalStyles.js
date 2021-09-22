import { normalize } from 'styled-normalize';
import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  ${normalize};

  *, *:before, *:after {
    box-sizing: border-box;
  }
  html, body {
    height: 100%;
    font-family: 'Nokora',Arial,sans-serif, 'Helvetica Neue', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    background-color: ${props => props.theme.colors.background};
    color: #fff;
    font-size: 16px;
    line-height: 1.5;

  .lhGYNd {
      flex: 1;
      color: #FFF;
      font-size: 79px;
      margin-top: 0;
  }

    .jZGwa {
      width: 100%;
      height: 200px;
  }

  .qCpbi {
    align-items: center;
    padding: 0rem 0;
  }

  .jVgHGc {
    padding: 4rem 0;
  }

  .hEHPcX {
    display: grid;
    grid-template-columns: auto auto auto;
    grid-gap: 10px;
    padding: 0rem 0;
    line-height: 1.5;
  }

  .hHbyWo {
    align-items: center;
    padding: 0rem 0;
  }
}`