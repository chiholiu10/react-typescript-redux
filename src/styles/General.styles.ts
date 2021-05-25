import styled, { css, DefaultTheme } from 'styled-components';
import { breakpoint } from "./BreakPoint";
import theme from './Themes';

export const SliderTitle = styled.h3`
  font-size: 16px;
  height: auto;
  font-weight: ${theme.fontWeights.extraBold};
  position: absolute;
  bottom: 0;
`;

export const SliderImageContainer = styled.div`
`;

export const SliderImage = styled.img`
  width: 100%;
  border-radius: 0.15rem;
  transition: transform .2s;
`;

export const ComponentTitle = styled.h2`
  font-size: 21px;
  padding-bottom: 2rem;
`;

export const themeStyles = ({ theme }: { theme: DefaultTheme; }) => css`
  body, 
  html {
    section, 
    section h2 {
      padding-left: 20px;
      padding-right: 20px;
    }
    footer {
      padding: 30px 20px 0;
    }
    color: ${theme.colors.white};
    ${breakpoint.md`
      font: normal 16px/23px NPOSans-Regular
      nav,
      section {
        padding: 50px;
      }
      section h2 {
        padding: 0;
      }
      .Slider-button-prev,
      .Slider-button-next {
        opacity: 0;
        &:after {
          color: ${theme.colors.orange};
        }
        @media not all and (pointer: coarse) {
          &:hover {
            opacity: 1;
          }
        }
      }
    `}
    ${breakpoint.lg`
      footer {
        padding: 100px 50px 50px;
      }
    `}
  }
  body,
  p,
  footer li a {
    font-family: NPOSans-Regular
    font-weight: normal;
    font-size: 16px;
    ${breakpoint.md`
      font-weight: normal;
      font-size: 18px;
    `}
    ${breakpoint.lg`
      font-weight: normal;
      font-size: 18px;
    `}
    ${breakpoint.xl`
      font-weight: normal;
      font-size: 26px; 
  `}
  }
`;

export const SlideBlock = styled.div`
  padding: 3px;
  transition: .3s;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  transition-delay: 0.25s;
  &:hover span {
    @media not all and (pointer: coarse) {
      opacity: 1;
    }
  }
`;

export const SlideBackground = styled.span`
  opacity: 0;
  background-image: url("https://www.npostart.nl/images/asset_player_play.svg");
  background-repeat: no-repeat;
  width: 60px;
  height: 60px;
  background-position: 50%;
  border-bottom-left-radius 50%;
  border-bottom-right-radius 50%;
  border-top-left-radius 50%;
  border-top-right-radius 50%;
  background-color: grey;
  position: absolute;
  left: calc(50% - (60px / 2));
  top: calc(50% - (60px / 2));
`;
