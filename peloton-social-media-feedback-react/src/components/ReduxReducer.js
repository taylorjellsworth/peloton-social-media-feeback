const initialState = {
  selectedProduct: "All",
  selectedSocialMedia: "",
  searchTerm: ""
};

export default (prevState = initialState, { type, payload }) => {
  switch (type) {
    case "SELECTED_SEARCH_REQUIREMENT":
      return {
        ...prevState,
        selectedProduct: payload.product,
        selectedSocialMedia: payload.socialMedia,
        searchTerm: payload.searchText
      };
    case "RESET":
      return { ...prevState, selectedProduct: "All" };
    default:
      return { ...prevState };
  }
};
