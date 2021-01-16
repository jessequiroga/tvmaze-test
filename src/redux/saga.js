import { put, takeLatest } from "redux-saga/effects";
import { all, fork } from "redux-saga/effects";
import axios from "axios";

import * as Api from "common/api";
import { isCompositeComponent } from "react-dom/test-utils";

// worker Saga: will be fired on SEARCH_SHOWS actions
function* searchShows(action) {
  try {
    const { payload } = action;
    const response = payload
      ? yield axios.get(`${Api.SEARCH_SHOW}${payload}`)
      : yield axios.get(`${Api.FETCH_SHOW}`);
    let data = response.data;
    if (payload) {
      data = data.map(item => item.show);
    }
    yield put({ type: "SEARCH_SHOWS_SUCCEEDED", payload: data });
  } catch (e) {
    yield put({ type: "SEARCH_SHOWS_FAILED", payload: e.message });
  }
}
/*
  Starts searchShowsSaga on each dispatched `SEARCH_SHOWS` action.
  Allows concurrent fetches of user.
*/
function* searchShowsSaga() {
  yield takeLatest("SEARCH_SHOWS", searchShows);
}

// worker Saga: will be fired on FETCH_SHOW_INFO actions
function* fetchShowInfo(action) {
  try {
    const { payload } = action;
    const response = yield axios.get(`${Api.FETCH_SHOW_INFO}${payload}`)
    let data = response.data;
    yield put({ type: "FETCH_SHOW_INFO_SUCCEEDED", payload: data });
  } catch (e) {
    yield put({ type: "FETCH_SHOW_INFO_FAILED", payload: e.message });
  }
}
/*
  Starts searchShowsSaga on each dispatched `SEARCH_SHOWS` action.
  Allows concurrent fetches of user.
*/
function* fetchShowInfoSaga() {
  yield takeLatest("FETCH_SHOW_INFO", fetchShowInfo);
}

// worker Saga: will be fired on FETCH_EPISODES actions
function* fetchEpisodes(action) {
  try {
    const { payload } = action;
    const response = yield axios.get(Api.fetch_episodes_url(payload));
    let data = response.data;
    yield put({ type: "FETCH_EPISODES_SUCCEEDED", payload: data });
  } catch (e) {
    alert(e.message);
    yield put({ type: "FETCH_EPISODES_FAILED", payload: e.message });
  }
}
/*
  Starts fetchEpisodesSaga on each dispatched `FETCH_EPISODES` action.
  Allows concurrent fetches of user.
*/
function* fetchEpisodesSaga() {
  yield takeLatest("FETCH_EPISODES", fetchEpisodes);
}

function* rootSaga() {
  yield all([
    fork(searchShowsSaga),
    fork(fetchShowInfoSaga),
    fork(fetchEpisodesSaga)
  ]);
}

export default rootSaga;
