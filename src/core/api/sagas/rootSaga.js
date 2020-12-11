import { all, fork } from "redux-saga/effects";

import event from "./event";
import profile from "./profile"
export default function* rootSaga() {
  yield all([fork(event),
  fork(profile)]);
}
