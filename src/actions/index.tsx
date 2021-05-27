import { LiveTvTypes, LiveRadioTypes, NavbarTypes, FooterTypes } from '../types/types';

export const types = {
  GET_DATA: "GET_DATA"
};

export const getData = (tvData: LiveTvTypes, radioData: LiveRadioTypes, navbarData: NavbarTypes, footerData: FooterTypes) => ({
  type: types.GET_DATA,
  tvData,
  radioData,
  navbarData,
  footerData
});
