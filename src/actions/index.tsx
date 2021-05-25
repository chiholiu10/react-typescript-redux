export const types = {
  GET_DATA: "GET_DATA"
};

export const getData = (tvData: any, radioData: any, navbarData: any, footerData: any) => ({
  type: types.GET_DATA,
  tvData,
  radioData,
  navbarData,
  footerData
});
