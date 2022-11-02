import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const GlobalStyle = createGlobalStyle`
    html,body {
        ${reset};
        font-family: 'Pretendard' sans-serif ;
    }
    div {
        box-sizing: border-box;
    }
`;

export default GlobalStyle;
