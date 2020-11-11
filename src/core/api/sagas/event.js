import { all, put, takeLatest } from "redux-saga/effects";
import { ActionTypes } from "../constants/ActionTypes";
import sendEventGet from "../event/sendEventGet";


export function* getEventRequest({payload}) {
  try {
    setTimeout(() => {}, 1000);
    yield put ({
      type: ActionTypes.GET_EVENT_REQUEST_SUCCESS,
      payload: sendEventGet(payload)
    });
  }
  catch (err) {
    console.log(err);
    yield put ({
      type: ActionTypes.GET_EVENT_REQUEST_FAILURE
    });
  }
}

export default function* root() {
  yield all([
    takeLatest(ActionTypes.GET_EVENT_REQUEST, getEventRequest)
  ]);
}
