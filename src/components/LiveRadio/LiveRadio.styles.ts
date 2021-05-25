import styled from 'styled-components';
import theme from '../../styles/Themes';

export const LiveRadioContainer = styled.section`
  .Slider-button-prev,
  .Slider-button-next {
    margin-top: -50px;
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

export const SliderLogo = styled.img`
  position: absolute;
  width: 50px;
  left: 5px;
  top: 5px;
`;

export const SliderSchedule = styled.span`
  display: inline-flex;
  font-size: 14px;
  font-weight: normal;
`;

export const SliderContent = styled.div`
  padding-top: 10px;
  h3 {
    position: relative;
  }
`;