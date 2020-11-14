import { all, fork } from "redux-saga/effects";

import event from "./event";

export default function* rootSaga() {
  yield all([fork(event)]);
}
