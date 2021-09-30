import { takeLatest, call, put } from "redux-saga/effects";
import { loading, setDataFailure, setDataSuccess } from "../actions";
import axios from "axios";

function* dataSaga(action) {
  yield put(loading());
  try {
    const data = yield call(getData);
    console.log(data);
    yield put(setDataSuccess(data.data.data));
  } catch (err) {
    console.log(err);
    yield put(setDataFailure(err));
  }
}

function getData() {
  return axios.get("https://covidnigeria.herokuapp.com/api");
}

export function* watchDataSaga() {
  yield takeLatest("GET-DATA", dataSaga);
}