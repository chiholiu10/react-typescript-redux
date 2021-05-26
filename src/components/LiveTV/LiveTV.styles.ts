import styled from 'styled-components';
import { breakpoint } from "../../styles/BreakPoint";

export const LiveTvContainer = styled.section`
  padding-top: 130px;
`;

export const SliderSchedule = styled.span`
  display: inline-flex;
  font-size: 14px;
  font-weight: normal;te
`;

export const SliderTextBlock = styled.div`
  h3 {
    position: relative;
    margin-top: 5px;
  }
  ${breakpoint.md`
    // safari bug so text-shadow px is low
    text-shadow: 0 0px 1px rgb(0 0 0 / 10%);
    position: absolute;
    bottom: 0;
    left: 20px;
    h3 {
      margin-bottom: -6px;
    }
  `}
  ${breakpoint.lg`
    bottom: 8px;
  `}
`;