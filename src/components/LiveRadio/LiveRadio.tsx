import { FC, memo } from "react";
import { connect, ConnectedProps } from "react-redux";
import { LiveRadioTypes } from '../../types/types';
import Slider from "react-slick";
import { LiveRadioContainer, SliderLogo, SliderSchedule, SliderContent, SliderBlock } from './LiveRadio.styles';
import { SliderImage, SliderTitle, ComponentTitle, SlideBlock, SlideBackground } from '../../styles/General.styles';

export const LiveRadio: FC<LiveRadioProps & LiveRadioTypes> = ({ liveRadioData }) => {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 1
        }
      },
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
    <LiveRadioContainer>
      <ComponentTitle>Live Radio</ComponentTitle>
      <Slider {...settings}>
        {liveRadioData.map((tv: any, index: number) => (
          <SlideBlock key={index}>
            <SliderBlock>
              <SlideBackground />
              <SliderImage src={"cards/" + tv.image} alt={tv.name} />
              <SliderLogo src={"cards/" + tv.channel.image} alt={tv.channel.name} />
            </SliderBlock>
            <SliderContent>
              <SliderTitle>{tv.name}</SliderTitle>
              <SliderSchedule>{tv.next.time} - {tv.next.name}</SliderSchedule>
            </SliderContent>
          </SlideBlock>
        ))}
      </Slider>
    </LiveRadioContainer >
  );
};

const mapStateToProps = (state: any) => ({
  liveRadioData: state.media.radioList
});

const connector = connect(mapStateToProps);
type LiveRadioProps = ConnectedProps<typeof connector>;
export default connector((memo(LiveRadio)));


