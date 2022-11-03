import { colors } from 'constants/colors';
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
    a {
        text-decoration: none;
        color:${colors.BLUE_BASE};
        a:visited {
            color:${colors.BLUE_BASE};
        }
    }
`;

export default GlobalStyle;
