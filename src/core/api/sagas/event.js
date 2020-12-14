import { all, put, takeLatest } from "redux-saga/effects";
import { ActionTypes } from "../constants/ActionTypes";
import sendEventGet from "../event/sendEventGet";
import {
  sendMemberPatch,
  sendAdminPatch,
  sendKickDelete,
  sendRequestGet,
  sendAcceptPatch,
  sendRejectPatch,
  sendEventTicketTypeGet,
  sendEditTicketPut,
  sendAddTypePost,
  sendTypeDelete,
  sendTogglePut
} from "../../admin/adminRequests";
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
    yield put({
      type : 'SET_FILTERING',
      payload: payload
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

export function* sendRequestRequest({payload}) {
  try {
    setTimeout(() => {}, 1000);
    yield put ({
      type: ActionTypes.SET_REQUEST_SUCCESS,
      payload: yield sendRequestGet(payload)
    })
  }
  catch(err) {
    yield put ({
      type: ActionTypes.SET_REQUEST_FAILURE,
      payload: err
    })
  }
}

export function* sendAcceptRequest({payload}) {
  try {
    setTimeout(() => {}, 1000);
    yield put ({
      type: ActionTypes.ACCEPT_JOIN_SUCCESS,
      payload,
      result: yield sendAcceptPatch(payload)
    })
  }
  catch (err) {
    yield put ({
      type: ActionTypes.ACCEPT_JOIN_FAILURE,
      payload
    })
  }
}

export function* sendRejectRequest ({payload}) {
  try {
    setTimeout(() => {}, 1000);
    yield put ({
      type: ActionTypes.REJECT_JOIN_SUCCESS,
      payload,
      result: yield sendRejectPatch(payload)
    })
  }
  catch (err) {
    yield put ({
      type: ActionTypes.REJECT_JOIN_FAILURE,
      payload
    })
  }
}

export function* sendEventTicketTypeRequest ({payload}) {
  try {
    yield put ({
      type: ActionTypes.GET_EVENT_TICKET_TYPE_SUCCESS,
      payload: yield sendEventTicketTypeGet(payload)
    })
  }
  catch (err) {
    yield put ({
      type: ActionTypes.GET_EVENT_TICKET_TYPE_FAILURE
    })
  }
}

export function* sendUpdateTicketTypeRequest ({payload}) {
  try {
    yield put ({
      type: ActionTypes.UPDATE_TICKET_TYPE_SUCCESS,
      payload: yield sendEditTicketPut(payload)
    })
  }
  catch (err) {
    yield put ({
      type: ActionTypes.UPDATE_TICKET_TYPE_FAILURE,
      payload: err
    })
  }
}

export function* sendAddTicketTypeRequest ({payload}) {
  try {
    yield put ({
      type: ActionTypes.ADD_TICKET_TYPE_SUCCESS,
      payload: yield sendAddTypePost(payload)
    })
  }
  catch (err) {
    yield put ({
      type: ActionTypes.ADD_TICKET_TYPE_FAILURE,
      payload: err
    })
  }
}

export function* sendDeleteTicketTypeRequest ({payload}) {
  try {
    yield put ({
      type: ActionTypes.DELETE_TICKET_TYPE_SUCCESS,
      payload,
      result: yield sendTypeDelete(payload.id)
    })
  }
  catch (err) {
    yield put ({
      type: ActionTypes.DELETE_TICKET_TYPE_FAILURE,
      payload: err
    })
  }
}

export function* sendToggleRequest ({payload}) {
  try {
    yield put ({
      type: ActionTypes.TOGGLE_TICKET_SUCCESS,
      payload: yield sendTogglePut(payload)
    })
  }
  catch (err) {
    yield put ({
      type: ActionTypes.TOGGLE_TICKET_FAILURE,
      payload: err
    })
  }
}

export default function* root() {
  yield all([
    takeLatest(ActionTypes.GET_EVENT_REQUEST, getEventRequest),
    takeLatest(ActionTypes.SET_MEMBER_REQUEST, sendMemberRequest),
    takeLatest(ActionTypes.SET_ADMIN_REQUEST, sendAdminRequest),
    takeLatest(ActionTypes.KICK_MEMBER_REQUEST, sendAdminKick),
    takeLatest(ActionTypes.GET_EVENT_REQUEST, getEventRequest),
    takeLatest('Send_Filter_Request', sendFilterRequest),
    takeLatest(ActionTypes.SET_REQUEST_REQUEST, sendRequestRequest),
    takeLatest(ActionTypes.ACCEPT_JOIN_REQUEST, sendAcceptRequest),
    takeLatest(ActionTypes.REJECT_JOIN_REQUEST, sendRejectRequest),
    takeLatest(ActionTypes.GET_EVENT_TICKET_TYPE_REQUEST, sendEventTicketTypeRequest),
    takeLatest(ActionTypes.UPDATE_TICKET_TYPE_REQUEST, sendUpdateTicketTypeRequest),
    takeLatest(ActionTypes.ADD_TICKET_TYPE_REQUEST, sendAddTicketTypeRequest),
    takeLatest(ActionTypes.DELETE_TICKET_TYPE_REQUEST, sendDeleteTicketTypeRequest),
    takeLatest(ActionTypes.TOGGLE_TICKET_REQUEST, sendToggleRequest),

  ]);
}
