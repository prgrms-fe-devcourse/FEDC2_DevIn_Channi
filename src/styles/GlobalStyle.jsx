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

    input {
        font-family: 'Noto Sans KR', sans-serif;
    }

    button {
        font-family: 'Noto Sans KR', sans-serif;
    }
`;
