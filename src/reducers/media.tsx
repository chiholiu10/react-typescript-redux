import { types } from "../actions";

const initialState = {
  dataLoaded: false,
  tvList: [],
  radioList: [],
  navbarList: [],
  footerList: []
};

export const media = (state = initialState, action: any) => {
  switch (action.type) {
    case types.GET_DATA: {
      return {
        ...state,
        tvList: action.tvData,
        radioList: action.radioData,
        navbarList: action.navbarData,
        footerList: action.footerData,
        dataLoaded: true
      };
    }

    default:
      return state;
  }
};

export default media;