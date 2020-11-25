import { watchFetchSagaFilm, watchFetchSagaFilms, watchSearchSagaFilms } from "./films";
import { all } from "redux-saga/effects";
import { watchFetchLogin, watchFetchRegister } from "./users";
export default function* rootSagas() {
  return yield all([
    watchFetchSagaFilms(),
    watchFetchSagaFilm(),
    watchSearchSagaFilms(),
    watchFetchLogin(),
    watchFetchRegister(),
  ]);
}
