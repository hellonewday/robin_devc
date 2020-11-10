import { put, call, takeLatest } from "redux-saga/effects";
import {fetchApi} from "../api/films";
import { FETCH_FILMS } from "../actions/types";
import { receiveFilms } from "../actions/films";
function* fetchSagaFilms() {
  try {
    const data = yield call(fetchApi);
    yield put(receiveFilms(data));
  } catch (error) {
    console.log(error);
  }
}

export default function* watchFetchSagaFilms() {
  yield takeLatest(FETCH_FILMS, fetchSagaFilms);
}
