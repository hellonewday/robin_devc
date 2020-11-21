import { put, call, takeEvery } from "redux-saga/effects";
import { fetchApiFilms, fetchApiFilm } from "../api/films";
import { FETCH_FILM, FETCH_FILMS } from "../actions/types";
import { receiveFilm, receiveFilms } from "../actions/films";
function* fetchSagaFilms() {
  try {
    const data = yield call(fetchApiFilms);
    yield put(receiveFilms(data));
  } catch (error) {
    console.log(error);
  }
}

function* fetchSagaFilm(action) {
  try {
    const film = yield call(fetchApiFilm, action.id);
    yield put(receiveFilm(film));
  } catch (error) {
    console.log(error);
  }
}

export function* watchFetchSagaFilms() {
  yield takeEvery(FETCH_FILMS, fetchSagaFilms);
}

export function* watchFetchSagaFilm() {
  yield takeEvery(FETCH_FILM, fetchSagaFilm);
}
