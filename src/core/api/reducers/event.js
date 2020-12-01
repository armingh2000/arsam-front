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
     tasks : [],
     selectedTask : undefined,
     images: [],
     creator: {
       email: '',
       phoneNumber: null
     },
     categories: [],
     status: 'idle'
  },

  //filters applied
  filter: {
    name: null,
    dateMin: null,
    dateMax: null,
    isPravate: null,
    isProject: null,
    membersCountMin: null,
    membersCountMax: null,
    categories: null
  },
  //Array of events which is returned byd back
  filteredEvents: [
    {
      name:"e1",
      id:1,
      startDate:moment(),
      endDate:moment(),
      creator:{
        email:"s1@gmail.com"
      },
      categories:[1,2,8],
      images:[
        "https://thumbor.forbes.com/thumbor/fit-in/416x416/filters%3Aformat%28jpg%29/https%3A%2F%2Fspecials-images.forbesimg.com%2Fimageserve%2F5f4ebe0c87612dab4f12a597%2F0x0.jpg%3Fbackground%3D000000%26cropX1%3D292%26cropX2%3D3684%26cropY1%3D592%26cropY2%3D3987"
        ,
        "https://media.wired.com/photos/5e6c06e613205e0008da2461/125:94/w_2124,h_1597,c_limit/Biz-billgates-950211062.jpg"
      ]
    }
    ,
    {
      name:"e2",
      id:2,
      startDate:moment(),
      endDate:moment(),
      creator:{
        email:"s2@gmail.com"
      },
      categories:[1,4],
      images:[
        "https://image.cnbcfm.com/api/v1/image/105322791-1531301768595gettyimages-467620670.jpg?v=1573853788&w=1400&h=950"
        ]
    }
    ,
    {
      name:"e3",
      id:3,
      startDate:moment(),
      endDate:moment(),
      creator:{
        email:"s3@gmail.com"
      },
      categories:[1,4,16,32],
      images:[
        "https://www2.eecs.berkeley.edu/Faculty/Photos/Fullsize/abbeel.jpg"
        ,
        "https://www.cifar.ca/images/default-source/bios/lmb_pieterabbeel.png?sfvrsn=36567462_2"
      ]
    }
    ,
    {
      name:"e4",
      id:4,
      startDate:moment(),
      endDate:moment(),
      creator:{
        email:"s4@gmail.com"
      },
      categories:[1,2,8,16,32,64],
      images:[
        "https://thehouse.fund/assets/images/content/profile/pieter_abbeel.png"
      ]
    }
    ,
    {
      name:"e5",
      id:5,
      startDate:moment(),
      endDate:moment(),
      creator:{
        email:"s1@gmail.com"
      },
      categories:[1,2,8],
      images:[
        "https://thumbor.forbes.com/thumbor/fit-in/416x416/filters%3Aformat%28jpg%29/https%3A%2F%2Fspecials-images.forbesimg.com%2Fimageserve%2F5f4ebe0c87612dab4f12a597%2F0x0.jpg%3Fbackground%3D000000%26cropX1%3D292%26cropX2%3D3684%26cropY1%3D592%26cropY2%3D3987"
        ,
        "https://media.wired.com/photos/5e6c06e613205e0008da2461/125:94/w_2124,h_1597,c_limit/Biz-billgates-950211062.jpg"
      ]
    }
    ,
    {
      name:"e6",
      id:6,
      startDate:moment(),
      endDate:moment(),
      creator:{
        email:"s6@gmail.com"
      },
      categories:[1,2,8],
      images:[
        "https://thumbor.forbes.com/thumbor/fit-in/416x416/filters%3Aformat%28jpg%29/https%3A%2F%2Fspecials-images.forbesimg.com%2Fimageserve%2F5f4ebe0c87612dab4f12a597%2F0x0.jpg%3Fbackground%3D000000%26cropX1%3D292%26cropX2%3D3684%26cropY1%3D592%26cropY2%3D3987"
        ,
        "https://media.wired.com/photos/5e6c06e613205e0008da2461/125:94/w_2124,h_1597,c_limit/Biz-billgates-950211062.jpg"
      ]
    }
    ,
    {
      name:"e7",
      id:7,
      startDate:moment(),
      endDate:moment(),
      creator:{
        email:"s1@gmail.com"
      },
      categories:[1,2,8],
      images:[
        "https://thumbor.forbes.com/thumbor/fit-in/416x416/filters%3Aformat%28jpg%29/https%3A%2F%2Fspecials-images.forbesimg.com%2Fimageserve%2F5f4ebe0c87612dab4f12a597%2F0x0.jpg%3Fbackground%3D000000%26cropX1%3D292%26cropX2%3D3684%26cropY1%3D592%26cropY2%3D3987"
        ,
        "https://media.wired.com/photos/5e6c06e613205e0008da2461/125:94/w_2124,h_1597,c_limit/Biz-billgates-950211062.jpg"
      ]
    }
    ,
    {
      name:"e8",
      id:1104,
      startDate:moment(),
      endDate:moment(),
      creator:{
        email:"s1@gmail.com"
      },
      categories:[1,2,8],
      images:[
        "https://thumbor.forbes.com/thumbor/fit-in/416x416/filters%3Aformat%28jpg%29/https%3A%2F%2Fspecials-images.forbesimg.com%2Fimageserve%2F5f4ebe0c87612dab4f12a597%2F0x0.jpg%3Fbackground%3D000000%26cropX1%3D292%26cropX2%3D3684%26cropY1%3D592%26cropY2%3D3987"
        ,
        "https://media.wired.com/photos/5e6c06e613205e0008da2461/125:94/w_2124,h_1597,c_limit/Biz-billgates-950211062.jpg"
      ]
    }

  ]
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
      }

    case ActionTypes.GET_EVENT_REQUEST_FAILURE:
      return {
        ...state,
        status: 'error'
      };

    case 'ADD_TASK':
            return {
                event: {
                  ...state.event,
                tasks : [...state.event.tasks, payload.task = {
                  ...payload.task
                }],
                status : 'success'
              }
            }
    case 'REMOVE_TASK':
            return {
                event:{
                  ...state.event,
                  tasks : state.event.tasks.filter(({id}) => id !== payload.id),
                  selectedTask : undefined
                }
            }
    case 'EDIT_TASK':
            return {
                event:{
                  ...state.event,
                  tasks : state.event.tasks.map((task) => {
                    if(task.id === payload.id){
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
                event:{
                  ...state.event,
                  tasks : state.event.tasks.map((task) => {
                    if(task.id === payload.id){
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
                event:{
                  ...state.event,
                  tasks : state.event.tasks.map((task) => {
                    if(task.id === payload.id){
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
                event:{
                  ...state.event,
                  tasks : state.event.tasks,
                  selectedTask : state.event.tasks.find((task) => {
                    return task.id == payload.id})
                }
            }
    case 'REMOVE_TASK_MEMBER':
            return{
                event:{
                  ...state.event,
                  tasks : state.event.tasks.map((task) => {
                    if(task.id == payload.id){
                        return{
                            ...task,
                            assignedMembers : task.assignedMembers.filter((memberId) => memberId !== payload.memberId)
                        }
                    }else{
                        return{ ...task}
                    }
                }),
                selectedTask : {
                    ...state.event.selectedTask,
                    assignedMembers : state.event.selectedTask.assignedMembers.filter((memberId) => memberId !== payload.memberId)
                }
                }
            }
    case 'SET_FILTERING':
      return{
        ...state,
        filter: payload
      }

    case 'GET_EVENTS_LIST':
      return{
        ...state,
        filteredEvents: payload
      }

    default:
      return state;
    };
}

export default event;
