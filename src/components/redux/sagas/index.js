import watchFetchSagaFilms from "./films";
import { all } from "redux-saga/effects";
export default function* rootSagas() {
  return yield all([watchFetchSagaFilms()]);
}
