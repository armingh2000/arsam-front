import { all, put, takeLatest } from "redux-saga/effects";
import { ActionTypes } from "../constants/ActionTypes";
import sendEventGet from "../event/sendEventGet";
import {sendMemberPatch, sendAdminPatch} from "../../admin/adminRequests";


export function* getEventRequest({payload}) {
  try {
    setTimeout(() => {}, 1000);
    yield put ({
      type: ActionTypes.GET_EVENT_REQUEST_SUCCESS,
      payload: yield sendEventGet(payload)
    });
  }
  catch (err) {
    console.log(err);
    yield put ({
      type: ActionTypes.GET_EVENT_REQUEST_FAILURE
    });
  }
}

export function* sendMemberRequest({payload}) {
  try {
    setTimeout(() => {}, 1000);
    yield put ({
      type: ActionTypes.SET_MEMBER_SUCCESS,
      payload: yield sendMemberPatch(payload)
    });
  }
  catch (err) {
    console.log(err);
    yield put ({
      type: ActionTypes.SET_MEMBER_FAILURE
    });
  }
}

export function* sendAdminRequest({payload}) {
  try {
    setTimeout(() => {}, 1000);
    yield put ({
      type: ActionTypes.SET_ADMIN_SUCCESS,
      payload: yield sendAdminPatch(payload)
    });
  }
  catch (err) {
    console.log(err);
    yield put ({
      type: ActionTypes.SET_ADMIN_FAILURE
    });
  }
}


export default function* root() {
  yield all([
    takeLatest(ActionTypes.GET_EVENT_REQUEST, getEventRequest),
    takeLatest(ActionTypes.SET_MEMBER_REQUEST, sendMemberRequest),
    takeLatest(ActionTypes.SET_ADMIN_REQUEST, sendAdminRequest),
  ]);
}
