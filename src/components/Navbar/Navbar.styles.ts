import styled from 'styled-components';
import theme from '../../styles/Themes';
import { breakpoint } from "../../styles/BreakPoint";

export const Nav = styled.nav`
  height: 70px;
  display: flex;
  align-items: center;
  position: fixed;
  z-index: 100;
  width: 100%;
  left: 0;
  right: 0;
  background-color: ${theme.colors.black};
  ${breakpoint.md`
    padding-top: 3rem;
    padding-bottom: 3rem;
    width: 90%;
    margin-left: auto;
    margin-right: auto;
  `}
`;

export const NavbarLogo = styled.img`
  width: 50px;
  margin-left: auto;
  margin-right: auto;
  ${breakpoint.md`
    width: 70px;
  `}
`;

export const NavHamburgerButton = styled.div<{ open: boolean; }>`
  position: absolute;
  left: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 2rem;
  height: 2rem;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
  z-index: 10;

  &:focus {
    outline: none;
  }

  div {
    width: 2rem;
    height: 0.25rem;
    background-color: ${({ open }) => open ? theme.colors.orange : theme.colors.white};
    border-radius: 10px;
    transition: all 0.3s linear;
    position: relative;
    transform-origin: 1px;

    :first-child {
      transform: ${({ open }) => open ? 'rotate(45deg)' : 'rotate(0)'};
    }

    :nth-child(2) {
      opacity: ${({ open }) => open ? '0' : '1'};
      transform: ${({ open }) => open ? 'translateX(20px)' : 'translateX(0)'};
    }

    :nth-child(3) {
      transform: ${({ open }) => open ? 'rotate(-45deg)' : 'rotate(0)'};
    }
  }
  ${breakpoint.md`
    display: none;
  `}
`;

export const NavSpan = styled.div`
`;

export const NavbarUnorderedList = styled.ul<{ open: boolean; }>`
  width: 100%;
  display: ${({ open }) => open ? 'inline-flex' : 'none'};
  opacity: ${({ open }) => open ? '1' : '0'};
  position: absolute;
  top: 70px;
  z-index: 100;
  background-color: ${theme.colors.black};
  flex-direction: column;
  ${breakpoint.md`
    display: flex;
    flex-direction: row;
    opacity: 1;
    top: 0;
    margin-left: 1.8rem;
    position: relative;
    align-items: center;
  `}
`;

export const NavbarListItem = styled.li`
  display: inline-flex;
  padding: 1rem 0;
  align-item: center;
  justify-content: center;
  ${breakpoint.md`
    display: flex;
    margin: 0 0.8rem 0 0.8rem;
    align-items: center;
    position: relative;
    font-size: 18px;
    &.active {
      border-bottom: 4px solid ${theme.colors.orange};
    }
    &:hover:not(:last-child) {
      &:after {
        content: "";
        position: absolute;
        bottom: -5px;
        left: 0;
        width: 100%;
        border-bottom: 4px solid ${theme.colors.orange};
      }
    }
    &:last-child {
      margin-left: auto;
      background-color: ${theme.colors.orange};
      padding: 10px 20px;
      border-radius: 6px;
      height: 46px;
      &:hover {
        @media not all and (pointer: coarse) {
          opacity: 0.7;
          cursor: pointer;
        }
      }
    }
  `}
`;

export const NavbarAnchor = styled.a`
  color: white;
`;