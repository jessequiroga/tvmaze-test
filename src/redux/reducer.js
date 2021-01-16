import * as actionTypes from "./actionTypes";

// Initial State
const initalStates = {
  showList: [], // show list
  episodes: [], // episode list
  currentShow: null // current selected show information
};

const reducer = (state = initalStates, action) => {
  const { payload, type } = action;

  switch (type) {
    case actionTypes.SEARCH_SHOWS_SUCCEEDED:
      return {
        ...state,
        showList: payload
      };
      case actionTypes.FETCH_SHOW_INFO_SUCCEEDED:
        return {
          ...state,
          currentShow: payload
        };
      case actionTypes.FETCH_EPISODES_SUCCEEDED:
      return {
        ...state,
        episodes: payload
      };
    default:
      return {
        ...state
      };
  }
};

export default reducer;
