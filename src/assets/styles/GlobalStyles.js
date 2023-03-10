import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset'; // style-reset 패키지

const GlobalStyles = createGlobalStyle`
    ${reset}
    a{
        text-decoration: none;
        color: inherit;
    }
    *{
        box-sizing: border-box;
    }
    ul,dl,dt,dd,li{
      list-style: none;
    }
    html,body{
        /* font-family: '', sans-serif; */
        margin:0 auto;
    }
    img {
        max-width: 100%;
    }
`;

export default GlobalStyles;
