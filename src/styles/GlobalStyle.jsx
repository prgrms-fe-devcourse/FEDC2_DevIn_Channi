import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

export const GlobalStyle = createGlobalStyle`
    ${reset};

    * { 
        box-sizing: border-box;
    }

    body {
        font-family: 'Noto Sans KR', sans-serif;
    }
    
    input:-webkit-autofill,
    input:-webkit-autofill:hover, 
    input:-webkit-autofill:focus, 
    input:-webkit-autofill:active  {
    -webkit-box-shadow: 0 0 0 30px white inset;
    }

    input, textarea, button {
        font-family: 'Noto Sans KR', sans-serif;
    }

    .visually-hidden {
        clip: rect(0 0 0 0);
        clip-path: inset(50%);
        height: 1px;
        overflow: hidden;
        position: absolute;
        white-space: nowrap;
        width: 1px;
    }
`;
