import uuid from 'react-uuid';
//Add
export const addTask = ({eventId, title, status , members = ['Mellii', 'Allii'], id, taskMembers = []} = {}) => 
    ({
        type : 'ADD_TASK',
        
        task : {
            id ,
            eventId, 
            title,
            status,
            members,
            taskMembers
        }
    })

//Remove
export const removeSubTask = ({id} = {}) => 
   ( {
        type : 'REMOVE_TASK',
        id
    })

//Edit
export const editTask = (id, title) => ({
    type : 'EDIT_TASK',
    id,
    title
})

//Change status
export const changeStatus = ({id, status}) => ({
    type : 'CHANGE_STATUS',
    id, 
    status 
})

export const assignMember = (id, memberId) => ({
    type : 'ASSIGN_MEMBER',
    id,
    memberId
})

export const selectSubTask = (id) => ({
    type : 'SELECT_SUBTASK',
    id
})

export const removeTaskMember = (memberId, id) => ({
    type : 'REMOVE_TASK_MEMBER',
    memberId,
    id
})
