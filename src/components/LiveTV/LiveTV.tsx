import { FC, memo } from "react";
import { connect, ConnectedProps } from "react-redux";
import { LiveTvTypes } from '../../types/types';
import Slider from "react-slick";
import { LiveTvContainer, SliderSchedule, SliderTextBlock } from './LiveTV.styles';
import { SliderImage, SliderTitle, ComponentTitle, SlideBlock, SlideBackground, SlickContainer } from '../../styles/General.styles';

export const LiveTV: FC<LiveTVProps & LiveTvTypes> = ({ liveTvData }) => {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 320,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1
        }
      }
    ]
  };
  return (
    <LiveTvContainer>
      <ComponentTitle>Live TV</ComponentTitle>
      <SlickContainer>
        <Slider {...settings}>
          {liveTvData.map((tv: any, index: number) => (
            <SlideBlock key={index}>
              <SlideBackground />
              <SliderImage src={"slider/" + tv.channel.image} />
              <SliderTextBlock>
                <SliderTitle>{tv.channel.name}</SliderTitle>
                <SliderSchedule>Straks: {tv.next.time} - {tv.next.name}</SliderSchedule>
              </SliderTextBlock>
            </SlideBlock>
          ))}
        </Slider>
      </SlickContainer>
    </LiveTvContainer>
  );
};

const mapStateToProps = (state: any) => ({
  liveTvData: state.media.tvList
});

const connector = connect(mapStateToProps);
type LiveTVProps = ConnectedProps<typeof connector>;
export default connector((memo(LiveTV)));