import { FC, memo } from "react";
import { connect, ConnectedProps } from "react-redux";
import { LiveTvTypes } from '../../types/types';
import Slider from "react-slick";
import { LiveTvContainer } from './LiveTV.styles';
import { SliderImage, SliderTitle, ComponentTitle, SlideBlock, SlideBackground } from '../../styles/General.styles';

export const LiveTV: FC<LiveTVProps & LiveTvTypes> = ({ liveTvData }) => {
  let settings = {
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
      <Slider {...settings}>
        {liveTvData.map((tv: any, index: number) => (
          <SlideBlock key={index}>
            <SlideBackground />
            <SliderImage src={"slider/" + tv.channel.image} />
            <SliderTitle>{tv.channel.name}</SliderTitle>

          </SlideBlock>
        ))}
      </Slider>
    </LiveTvContainer>
  );
};

const mapStateToProps = (state: any) => ({
  liveTvData: state.media.tvList
});

const connector = connect(mapStateToProps);
type LiveTVProps = ConnectedProps<typeof connector>;
export default connector((memo(LiveTV)));