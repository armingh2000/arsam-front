import { ActionTypes } from "../constants/ActionTypes";

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
  },
  status: 'idle',
  adminContent: "event",
  membersStatus: 'success'
};

const event = ( state = initialState, {type, payload }) => {
  console.log("herher", payload);
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

    case 'ADD_TASK':
            return {
                ...state,
                event: {
                  ...state.event,
                tasks : [...state.event.tasks, payload.task],
              }
            }
    case 'REMOVE_TASK':
            return {
              ...state,
                event:{
                  ...state.event,
                  tasks : state.event.tasks.filter(({id}) => id != payload.id),
                  selectedTask : undefined
                }
            }
    case 'EDIT_TASK':
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
    case 'CHANGE_STATUS':
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
    case 'ASSIGN_MEMBER':
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
    case 'SELECT_SUBTASK':
            return{
              ...state,
                event:{
                  ...state.event,
                  tasks : state.event.tasks,
                  selectedTask : state.event.tasks.find((task) => {
                    return task.id == payload.id})
                }
            }
    case 'REMOVE_TASK_MEMBER':
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

    default:
      return state;
    };
}

export default event;
