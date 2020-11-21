import { put, call, takeLatest } from "redux-saga/effects";
import { responseLogin, responseRegister } from "../actions/auth";
import { fetchLogin, fetchRegister } from "../api/users";
import { VALIDATE_USER, REGISTER_USER } from "../actions/types";
function* fetchSagaLogin(action) {
  try {
    const res = yield call(
      fetchLogin,
      action.data.username,
      action.data.password
    );
    yield put(responseLogin(res));
  } catch (error) {
    console.log(error);
  }
}

function* fetchSagaRegister(action) {
  try {
    const res = yield call(fetchRegister, action.data);
    yield put(responseRegister(res));
  } catch (error) {
    console.log(error);
  }
}

export function* watchFetchLogin() {
  yield takeLatest(VALIDATE_USER, fetchSagaLogin);
}

export function* watchFetchRegister() {
  yield takeLatest(REGISTER_USER, fetchSagaRegister);
}
