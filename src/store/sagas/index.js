import { watchDataSaga } from "./dataSaga";

import { all, fork } from "redux-saga/effects";

export default function* rootSaga() {
  yield all([fork(watchDataSaga)]);
}