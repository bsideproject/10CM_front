import { colors } from 'constants/colors';
import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const GlobalStyle = createGlobalStyle`
    ${reset};
    html,body {
        font-family: 'Pretendard' sans-serif ;
        color: ${colors.NEUTRAl_800};
    }
    * {
        box-sizing: border-box;
    }
    a {
        text-decoration: none;
        color:${colors.BLUE_BASE};
        a:visited {
            color:${colors.BLUE_BASE};
        }
    }
    hr { 
        margin: 0;
    }
    button {
        padding: 0;
        border: 0;
        outline: 0;
        margin: 0;
    }
`;

export default GlobalStyle;
