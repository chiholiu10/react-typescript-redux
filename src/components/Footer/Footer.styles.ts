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
  width: 90%;
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
  font-size: 17px;
  line-height: 2.4rem;
  ${breakpoint.md`
    margin-bottom: 12px;
    font-size: 24px;
  `}
`;

export const FooterUnorderedList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  padding-bottom: 10px;
  ${breakpoint.md`
    display: block;
    flex: none;
  `}
`;

export const FooterListItems = styled.li`
  color: ${theme.colors.lightGrey};
  flex-direction: row;
  padding-right: 10px;
`;

export const Anchor = styled.a`
  font-size: 14px;
  line-height: 20px;
  ${breakpoint.md`
    line-height: 30px;
    font-size: 16px;
  `}
`;