import { createGlobalStyle } from 'styled-components';

import { barStyle } from '../../assets/styles/scroll';
import { CustomToastStyle } from '../reactToastify/customStyle';

export const GlobalStyle = createGlobalStyle`
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}
html {
  font-size:62.5%;
}
body {
  margin: 0;
  font-size: 1.6rem;
  ${barStyle()}
}
button {
  border: none;
  background-color: transparent;
  cursor: pointer;
  &:disabled {
    cursor: default;
  }
}

li {
    list-style: none;
}

a {
    text-decoration: none;
    color: ${({ theme }) => theme.colors.black}
}
a, button  {
  outline:none;
}
    input,textarea {
        outline: none;
        caret-color: ${({ theme }) => theme.colors.primary[600]};
        ::placeholder {
            color: ${({ theme }) => theme.colors.gray[600]};
        }
    }
${CustomToastStyle}
`;

export const ScrollFix = createGlobalStyle`
  html {
    overflow: hidden;
  }
`;
export default ScrollFix;
