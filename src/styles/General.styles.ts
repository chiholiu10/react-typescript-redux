import styled, { css, DefaultTheme } from 'styled-components';
import { breakpoint } from "./BreakPoint";
import theme from './Themes';

export const SliderTitle = styled.h3`
  font-size: 16px;
  height: auto;
  font-weight: ${theme.fontWeights.extraBold};
  position: absolute;
  bottom: 0;
  text-overflow:ellipsis;
`;

export const SliderImageContainer = styled.div`
`;

export const SlickContainer = styled.div`
  .slick-prev {
    z-index: 10;
    opacity: 0;
    transition: .3s;
    &:before {
      display: none;
    }
    &:after {    
      font-size: 50px;
      position: relative;
      z-index: 100;
      font-family: "Font Awesome 5 Pro";
      content: '\f104';
      margin-left: 50px;
      font-weight: 300;
      color: ${theme.colors.orange};
    }
    &:hover {
      opacity: 1;
    }
  }
  .slick-next {
    opacity: 0;
    transition: .3s;
    &:before {
      display: none;
    }
    &:after {
      font-size: 50px;
      z-index: 1;
      margin-left: -50px;
      font-family: "Font Awesome 5 Pro";
      content: '\f105';
      font-weight: 300;
      color: ${theme.colors.orange};
    }
    &:hover {
      opacity: 1;
    }
  }
`;

export const SliderImage = styled.img`
  width: 100%;
  border-radius: 0.15rem;
  transition: transform .2s;
`;

export const ComponentTitle = styled.h2`
  font-size: 21px;
  padding-bottom: 1rem;
  font-weight: 700;
`;

export const themeStyles = ({ theme }: { theme: DefaultTheme; }) => css`
  body, 
  html {
    font-family: NPOSans-Regular
    font-weight: normal;
    section, 
    section {
      width: 90%;
      margin-left: auto;
      margin-right: auto;
      padding: 30px 0;
    }
    footer {
      padding: 30px 0 0;
      width: 90%;
      margin-left: auto;
      margin-right: auto;
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
        padding: 100px 0 50px;
      }
    `}
  }
  body,
  p,
  footer li a {
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
  transition: .2s;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  transition-delay: 0.25s;
  &:hover {
    span {
      @media not all and (pointer: coarse) {
        opacity: 1;
      }
    }
  }
`;

export const SlideBackground = styled.span`
  opacity: 0;
  background-image: url("https://www.npostart.nl/images/asset_player_play.svg");
  background-repeat: no-repeat;
  background-color: rgba(0,0,0,.5);
  width: 60px;
  height: 60px;
  background-position: 50%;
  border-bottom-left-radius 50%;
  border-bottom-right-radius 50%;
  border-top-left-radius 50%;
  border-top-right-radius 50%;
  position: absolute;
  left: calc(50% - (60px / 2));
  top: calc(50% - (60px / 2));
`;
