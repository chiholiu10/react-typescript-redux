export interface Media {
  channel: {
    name: string;
    image: string;
  },
  name: string;
  next: {
    name: string;
    time: string;
  };
}

export interface LiveTvTypes {
  liveTvData: Media[];
}

export interface LiveRadioTypes {
  liveRadioData: Media[];
}