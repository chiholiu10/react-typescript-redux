import styled from 'styled-components';
import theme from '../../styles/Themes';

export const LiveTvContainer = styled.section`
  padding-top: 130px;
  .swiper-button-prev,
  .swiper-button-next {
    opacity: 0;
    &:after {
      color: ${theme.colors.orange};
    }
    &:hover {
      opacity: 1;
    }
  }
`;

