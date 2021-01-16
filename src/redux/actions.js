import * as actionTypes from './actionTypes';

// Search show action
export const searchShows = (keyword) => ({
  type: actionTypes.SEARCH_SHOWS,
  payload: keyword,
});
// The action for get the current show information
export const fetchShowInfo = (id) => ({
  type: actionTypes.FETCH_SHOW_INFO,
  payload: id,
});
// The action for fetch episode list for specific show
export const fetchEpisodes = (id) => ({
  type: actionTypes.FETCH_EPISODES,
  payload: id,
});