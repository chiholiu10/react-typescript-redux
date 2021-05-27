import styled from 'styled-components';
import { breakpoint } from "../../styles/BreakPoint";
import theme from '../../styles/Themes';

export const LiveRadioContainer = styled.section`
  .slick-prev,
  .slick-next {
    margin-top: -25px;
  }
`;

export const SliderBlock = styled.div`
  position: relative;
  span {
    width: 40px;
    height: 40px;
    top: 20px;
    left: calc(50% - (40px / 2));
    top: calc(50% - (40px) / 2);
  }
`;

export const SliderLogo = styled.div`
  position: absolute;
  width: 50px;
  left: 5px;
  top: 5px;
`;

export const SliderSchedule = styled.span`
  display: inline-flex;
  font-size: 14px;
  font-weight: 500;
  color: ${theme.colors.lightGrey};
`;

export const SliderContent = styled.div`
  padding-top: 10px;
  h3 {
    position: relative;
    margin-top: -5px;
  }
  ${breakpoint.md`
    h3 {
      margin-bottom: -7.5px;
    }
  `}
`;

export const Logo = styled.img`
    width: 100%;
`;
