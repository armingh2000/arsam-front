//Add
export const addTask = ({eventId, name, status, id, assignedMembers=[]}) => 
    ({
        type : 'ADD_TASK',
        payload : {
            
        task : {
            id ,
            eventId, 
            name,
            status,
            assignedMembers
        }
        }
    })

//Remove
export const removeSubTask = (id) => 
   ( {
        type : 'REMOVE_TASK',
        payload : id
    })

//Edit
export const editTask = (id, name) => ({
    type : 'EDIT_TASK',
    payload:{
        id,
        name
    }
})

//Change status
export const changeStatus = ({id, status}) => ({
    type : 'CHANGE_STATUS',
    payload: {
        id : id, 
        status : status
    } 
})

export const assignMember = (id, memberId) => ({
    type : 'ASSIGN_MEMBER',
    payload : {
        id,
        memberId
    }
})

export const selectSubTask = (id) => ({
    type : 'SELECT_SUBTASK',
    payload : {
        id
    }
})

export const removeTaskMember = (memberId, id) => ({
    type : 'REMOVE_TASK_MEMBER',
    payload : {memberId,
        id}
})
