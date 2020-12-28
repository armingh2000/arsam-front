import { ActionTypes } from "../constants/ActionTypes";
import moment from 'moment';


const initialState = {
  event: {
    name: '',
     id: null,
     isProject: null,
     description: '',
     location: '',
     isPrivate: null,
     startDate: '',
     endDate: '',
     isLimitedMember: null,
     maximumNumberOfMembers: null,
     eventMembers: [],
     eventAdmins: [],
     tasks : [],
     selectedTask : undefined,
     images: [],
     creator: {
       email: '',
       phoneNumber: null
     },
     categories: [],
     requests: [],
     buyingTicketEnabled: null
  },
  ticketTypes: [],
  tickets: [],
  ticketStatus: 'idle',
  ticketTypeStatus: 'idle',
  status: 'idle',
  requestStatus: 'idle',
  adminContent: "event",
  membersStatus: 'success',
  //filters applied
  filter: {
    name: null,
    dateMin: null,
    dateMax: null,
    isPrivate: false,
    isProject: null,
    membersCountMin: null,
    membersCountMax: null,
    categories: null,
    pageNumber:1,
    pageSize:15
  },
  //Array of events which is returned byd back
  filteredEvents: [],
  shouldSendSearchRequest: true,
  loading:true,
  isButtonPressed:false
};

const event = ( state = initialState, {type, payload }) => {
  switch (type) {
    case ActionTypes.GET_EVENT_REQUEST:
      return {
        ...state,
        status: 'loading'
      };

    case ActionTypes.GET_EVENT_REQUEST_SUCCESS:
      return {
        ...state,
        event: payload.data,
        status: 'success'
      };

    case ActionTypes.GET_EVENT_REQUEST_FAILURE:
      return {
        ...state,
        status: 'error'
      };

    case ActionTypes.ADD_TASK:
            return {
                ...state,
                event: {
                  ...state.event,
                tasks : [...state.event.tasks, payload.task],
              }
            }
    case ActionTypes.REMOVE_TASK:
            return {
              ...state,
                event:{
                  ...state.event,
                  tasks : state.event.tasks.filter(({id}) => id != payload.id),
                  selectedTask : undefined
                }
            }
    case ActionTypes.EDIT_TASK:
            return {
              ...state,
                event:{
                  ...state.event,
                  tasks : state.event.tasks.map((task) => {
                    if(task.id == payload.id){
                        return {
                            ...task,
                            name : payload.name
                        }
                    } else {
                        return {
                            ...task
                        }
                    }
                }),
                selectedTask : {
                    ...state.event.selectedTask,
                    name : payload.name
                }
                }
            }
    case ActionTypes.CHANGE_STATUS:
            return {
              ...state,
                event:{
                  ...state.event,
                  tasks : state.event.tasks.map((task) => {
                    if(task.id == payload.id){
                        return {
                            ...task,
                            status : payload.status
                        }
                    } else {
                        return {
                            ...task
                        }
                    }
                }),
                selectedTask : {
                    ...state.event.selectedTask,
                    status : payload.status
                }
              }
            }
    case ActionTypes.ASSIGN_MEMBER:
            return {
              ...state,
                event:{
                  ...state.event,
                  tasks : state.event.tasks.map((task) => {
                    if(task.id == payload.id){
                        return {
                            ...task,
                            assignedMembers : [...task.assignedMembers, payload.memberId]
                        }
                    } else {
                        return {
                            ...task
                        }
                    }
                }),
                selectedTask : {
                    ...state.event.selectedTask,
                    assignedMembers : [ ...state.event.tasks.find((task) => {
                        return task.id == payload.id}).assignedMembers, payload.memberId]
                }
                }
            }
    case ActionTypes.SELECT_SUBTASK:
            return{
              ...state,
                event:{
                  ...state.event,
                  tasks : state.event.tasks,
                  selectedTask : state.event.tasks.find((task) => {
                    return task.id == payload.id})
                }
            }
    case ActionTypes.REMOVE_TASK_MEMBER:
            return{
              ...state,
                event:{
                  ...state.event,
                  tasks : state.event.tasks.map((task) => {
                    if(task.id == payload.id){
                        return{
                            ...task,
                            assignedMembers : task.assignedMembers.filter((memberId) => memberId != payload.memberId)
                        }
                    }else{
                        return{ ...task}
                    }
                }),
                selectedTask : {
                    ...state.event.selectedTask,
                    assignedMembers : state.event.selectedTask.assignedMembers.filter((memberId) => memberId != payload.memberId)
                }
                }
            }

    case ActionTypes.SET_ADMIN_CONTENT:
      return {
         ...state,
           adminContent: payload.content
       };

    case ActionTypes.SET_MEMBER_REQUEST:
      payload.olm();
      return {
        ...state,
        membersStatus: "loading"
      };

    case ActionTypes.SET_MEMBER_SUCCESS:
      payload.osm();
      return {
        ...state,
        event: {
          ...state.event,
          eventMembers: [...state.event.eventMembers, {email: payload.email}],
          eventAdmins: state.event.eventAdmins.filter((admin)=>{return admin.email != payload.email})
        },
        membersStatus: "success"
      };

    case ActionTypes.SET_MEMBER_FAILURE:
      payload.oem();
      return {
        ...state,
        membersStatus: "error"
      };

    case ActionTypes.SET_ADMIN_REQUEST:
      payload.olm();
      return {
        ...state,
        membersStatus: "loading"
      };

    case ActionTypes.SET_ADMIN_SUCCESS:
      payload.osm();
      return {
        ...state,
        event: {
          ...state.event,
          eventAdmins: [...state.event.eventAdmins, {email: payload.email}],
          eventMembers: state.event.eventMembers.filter((member)=>{return member.email != payload.email})
        },
        membersStatus: "success"
      };

    case ActionTypes.SET_ADMIN_FAILURE:
      payload.oem();
      return {
        ...state,
        membersStatus: "error"
      };

    case ActionTypes.KICK_MEMBER_REQUEST:
      payload.olm();
      return {
        ...state,
        membersStatus: "loading"
      }

    case ActionTypes.KICK_MEMBER_SUCCESS:
      payload.osm();
      return {
        ...state,
        event: {
          ...state.event,
          eventMembers: state.event.eventMembers.filter((member) => {return member.email !== payload.email}),
          eventAdmins: state.event.eventAdmins.filter((admin) => {return admin.email !== payload.email})
        },
        membersStatus: "success"
      }

    case ActionTypes.KICK_MEMBER_FAILURE:
      payload.oem();
      return {
        ...state,
        membersStatus: "error"
      }

    case ActionTypes.SET_FILTERING:
    console.log("filter and payload in SET_FILTERING:(event.js-reducers)");
    console.log(state.filter,payload);
      return{
        ...state,
        filter: {
          name: payload.name,
          dateMin: payload.dateMin,
          dateMax: payload.dateMax,
          isPrivate: payload.isPrivate,
          isProject: payload.isProject,
          membersCountMin: payload.membersCountMin,
          membersCountMax: payload.membersCountMax,
          categories: payload.categories,
          pageNumber:state.filter.pageNumber,
          pageSize:15
        }
      }

    case ActionTypes.GET_EVENTS_LIST:
    console.log("state in ActionTypes.GET_EVENTS_LIST:(event.js-reducers)",state);
    console.log("payload in ActionTypes.GET_EVENTS_LIST:(event.js-reducers)",payload);
    // console.log("...........................................",shouldAppend);

      return{
        ...state,
        filteredEvents: state.filteredEvents.concat(payload),
        shouldSendSearchRequest:true,
        loading:false
      }

    case ActionTypes.SEND_FILTER_REQUEST:
      return {
        ...state,
        shouldSendSearchRequest: false,
        loading:true
      }

    case ActionTypes.RESET_FILTERED_EVENTS:
    console.log("state in RESET_FILTERED_EVENTS:(event.js-reducers)",state);
    console.log("state.filter in Reset:(event.js-reducers)",state.filter);
      return {
        ...state,
        pageNumber:1,
        filter:{
          ...state.filter,
          pageNumber:1
        },
        filteredEvents: [],
        isButtonPressed:true
      }

    case ActionTypes.ADD_FILTER_PAGE_NUMBER:
      return {
        ...state,
        filter:{
          ...state.filter,
          pageNumber:state.filter.pageNumber+1
        }
      }

    case ActionTypes.SET_REQUEST_REQUEST:
      return {
        ...state,
        requestStatus: "loading"
      }

    case ActionTypes.SET_REQUEST_SUCCESS:
      return {
        ...state,
        requestStatus: "success",
        event: {
          ...state.event,
          requests: payload.data
        }
      }

    case ActionTypes.SET_REQUEST_FAILURE:
      return {
        ...state,
        requestStatus: "error"
      }

    case ActionTypes.ACCEPT_JOIN_REQUEST:
      payload.olm();
      return {
        ...state,
        joinStatus: "loading"
      }

    case ActionTypes.ACCEPT_JOIN_SUCCESS:
      payload.osm();
      return {
        ...state,
        joinStatus: "success",
        event: {
          ...state.event,
          requests: state.event.requests.filter((req) => {return req.user.email !== payload.email}),
          eventMembers: [...state.event.eventMembers, {email: payload.email}]
        }
      }

    case ActionTypes.ACCEPT_JOIN_FAILURE:
      payload.oem();
      return {
        ...state,
        joinStatus: "error"
      }

    case ActionTypes.REJECT_JOIN_REQUEST:
      payload.olm();
      return {
        ...state,
      }

    case ActionTypes.REJECT_JOIN_SUCCESS:
      payload.osm();
      return {
        ...state,
        event: {
          ...state.event,
          requests: state.event.requests.filter((req) => {return req.user.email !== payload.email})
        }
      }

    case ActionTypes.REJECT_JOIN_FAILURE:
      payload.oem();
      return {
        ...state,
      }

    case ActionTypes.GET_EVENT_TICKET_TYPE_REQUEST:
      return {
        ...state,
        ticketTypeStatus: "loading"
      }

    case ActionTypes.GET_EVENT_TICKET_TYPE_SUCCESS:
      return {
        ...state,
        ticketTypes: payload.data,
        ticketTypeStatus: "success"
      }

    case ActionTypes.GET_EVENT_TICKET_TYPE_FAILURE:
      return {
        ...state,
        ticketTypeStatus: "error"
      }

    case ActionTypes.UPDATE_TICKET_TYPE_REQUEST:
      payload.olm();
      return {
        ...state,
      }

    case ActionTypes.UPDATE_TICKET_TYPE_SUCCESS:
      payload.osm();
      return {
        ...state,
        ticketTypes: state.ticketTypes.map((ticket) => {
            // console.log(ticket, payload.data);
            return ticket.id === payload.data.id ? payload.data : ticket
        })
      }

    case ActionTypes.UPDATE_TICKET_TYPE_FAILURE:
      payload.oem();
      return {
        ...state,
      }

    case ActionTypes.ADD_TICKET_TYPE_REQUEST:
      payload.olm();
      return {
        ...state
      }

    case ActionTypes.ADD_TICKET_TYPE_SUCCESS:
      payload.osm();
      return {
        ...state,
        ticketTypes: state.ticketTypes.concat(payload.data)
      }

    case ActionTypes.ADD_TICKET_TYPE_FAILURE:
      payload.oem();
      return {
        ...state
      }

    case ActionTypes.DELETE_TICKET_TYPE_REQUEST:
      payload.olm();
      return {
        ...state
      }

    case ActionTypes.DELETE_TICKET_TYPE_SUCCESS:
      payload.osm();
      return {
        ...state,
        ticketTypes: state.ticketTypes.filter((ticket) => {return ticket.id !== payload.id})
      }

    case ActionTypes.DELETE_TICKET_TYPE_FAILURE:
      payload.oem();
      return {
        ...state
      }

    case ActionTypes.TOGGLE_TICKET_REQUEST:
      payload.olm();
      return {
        ...state
      }

    case ActionTypes.TOGGLE_TICKET_SUCCESS:
      payload.osm();
      return {
        ...state,
        event: {
          ...state.event,
          buyingTicketEnabled: ! state.event.buyingTicketEnabled
        }
      }

    case ActionTypes.TOGGLE_TICKET_FAILURE:
      payload.oem();
      return {
        ...state
      }

    case ActionTypes.GET_EVENT_TICKETS_REQUEST:
      return {
        ...state,
        ticketStatus: 'loading'
      }
    case ActionTypes.GET_EVENT_TICKETS_SUCCESS:
      return {
        ...state,
        ticketStatus: 'success',
        tickets: payload.data
      }
    case ActionTypes.GET_EVENT_TICKETS_FAILURE:
      return {
        ...state,
        ticketStatus: 'error'
      }

    case ActionTypes.CREATE_TICKET_REQUEST:
      payload.olm();
      return {
        ...state
      }

    case ActionTypes.CREATE_TICKET_SUCCESS:
      payload.osm();
      return {
        ...state
      }

    case ActionTypes.CREATE_TICKET_FAILURE:
      if(payload.result.response.status === 409) {
        payload.oem("Please insert your email!");
      }
      else {
        payload.oem("Error!");
      }
      return {
        ...state
      }

    default:
      return state;
    };
}

export default event;
