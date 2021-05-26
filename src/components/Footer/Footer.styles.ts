import styled from 'styled-components';
import { breakpoint } from "../../styles/BreakPoint";
import theme from '../../styles/Themes';

export const FooterContainer = styled.footer`
  display: flex; 
  flex-direction: column;
  ${breakpoint.md`
    flex-direction: row;
  `}
  ${breakpoint.lg`
    div {
      &:nth-child(1) {
        width: 45%;
        ul {
          column-count: 3;
        }
      }
      &:nth-child(3) {
        ul {
          column-count: 2;
        }
      }
    }
  `}

`;

export const FooterColumn = styled.div`
  padding: 10px 0;
  ${breakpoint.md`
    flex: 0 0 25%;
`}
  ${breakpoint.lg`
    &:nth-child(1) {
      flex: 0 0 37%;
    }
    &:nth-child(2) {
      flex: 0 0 19%;
      padding-right: 10px;
    }
    &:nth-child(3) {
      flex: 0 0 30%;
    }
  `}
`;

export const FooterTitle = styled.h2`
  line-height: 2.4rem;
  font-size: 24px;
  margin-bottom: 12px;
`;

export const FooterUnorderedList = styled.ul`

`;


export const FooterListItems = styled.li`
  font-size: 16px;
  color: ${theme.colors.lightGrey};
  line-height: 30px;
`;

export const Anchor = styled.a`
  
`;