import { all, put, takeLatest } from "redux-saga/effects";
import { ActionTypes } from "../constants/ActionTypes";
import sendEventGet from "../event/sendEventGet";
import {sendMemberPatch, sendAdminPatch, sendKickDelete} from "../../admin/adminRequests";
import { sendFilterPost } from "../Filter/sendFilter";


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
      result: yield sendMemberPatch(payload),
      payload
    });
  }
  catch (err) {
    console.log(err);
    yield put ({
      type: ActionTypes.SET_MEMBER_FAILURE,
      payload
    });
  }
}

export function* sendAdminRequest({payload}) {
  try {
    setTimeout(() => {}, 1000);
    yield put ({
      type: ActionTypes.SET_ADMIN_SUCCESS,
      result: yield sendAdminPatch(payload),
      payload
    });
  }
  catch (err) {
    console.log(err);
    yield put ({
      type: ActionTypes.SET_ADMIN_FAILURE,
      payload
    });
  }
}

export function* sendAdminKick({payload}) {
  try {
    setTimeout(() => {}, 1000);
    yield put ({
      type: ActionTypes.KICK_MEMBER_SUCCESS,
      result: yield sendKickDelete(payload),
      payload
    });
  }
  catch (err) {
    console.log(err);
    yield put ({
      type: ActionTypes.KICK_MEMBER_FAILURE,
      payload
    });
  }
}


export function* sendFilterRequest({payload}){
  try{
    // setTimeout(() => {}, 1000);
    const data =  yield sendFilterPost(payload);
    console.log("payload in sendFilterRequest");
    console.log(payload);
    var newPageNumber=(payload.shouldAddPageNumber?payload.filters.PageNumber+1:payload.filters.PageNumber);
    console.log("newPageNumber:",newPageNumber);
    yield put({
      type : 'SET_FILTERING',
      payload: {
      name: payload.Name,
      dateMin: payload.DateMin,
      dateMax: payload.DateMax,
      isPrivate: payload.IsPrivate,
      isProject: payload.IsProject,
      membersCountMin: payload.MembersCountMin,
      membersCountMax: payload.MembersCountMax,
      categories: payload.Categories,
      pageNumber:(newPageNumber),
      pageSize:15
      }
    });
    yield put({
      type : 'GET_EVENTS_LIST',
      payload: data.data
    });
  }
  catch(err){
    console.log(err)
  }
}

export default function* root() {
  yield all([
    takeLatest(ActionTypes.GET_EVENT_REQUEST, getEventRequest),
    takeLatest(ActionTypes.SET_MEMBER_REQUEST, sendMemberRequest),
    takeLatest(ActionTypes.SET_ADMIN_REQUEST, sendAdminRequest),
    takeLatest(ActionTypes.KICK_MEMBER_REQUEST, sendAdminKick),
    takeLatest(ActionTypes.GET_EVENT_REQUEST, getEventRequest),
    takeLatest('Send_Filter_Request', sendFilterRequest)

  ]);
}
