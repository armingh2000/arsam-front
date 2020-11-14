import axios from "axios";

const sendRequest = (props) => {
    return axios(props)
}

const sendCreateTask = (props) => {
    return sendRequest({
        ...props,
        method : "post"
    })
}

const sendCreateTaskPost = (data) => {
    return sendCreateTask({
        url : "https://localhost:44373/api/task/create",
        data : data,
        headers : {
            'Authorization' : `Bearer ${localStorage.getItem('userToken')}`
        }
    })
}
const sendEditTask = (props) => {
    return sendRequest({
        ...props,
        method : "put"
    })
}

const sendEditTaskGet = (data) => {
    return sendEditTask({
        url : `https://localhost:44373/api/task/update?id=${data.Id.toString()}`,
        data : {
            Name : data.Name,
            Status : data.Status,
            EventId : data.EventId,
            Order : data.Order
        },
        headers : {
            'Authorization' : `Bearer ${localStorage.getItem('userToken')}`
        }

    })
}

const sendDeleteTask = (props) => {
    return sendRequest({
        ...props,
        method : "delete"
    })
}
const sendDeleteTaskDelete = (Id) => {
    return sendDeleteTask({
        url : `https://localhost:44373/api/task/delete?id=${Id.toString()}`,
        data : {
            Id : Id
        },
        headers : {
            'Authorization' : `Bearer ${localStorage.getItem('userToken')}`
        }
    })
}
const sendAssignMembersTask = (props) => {
    return sendRequest({
        ...props,
        method : "put"
    })
}

const sendAssignMembersTaskPut = (data) => {
    return sendAssignMembersTask({
        url : `https://localhost:44373/api/task/AssignMember?id=${data.Id}&memberEmail=${data.MemberId}`,
        data : data,
        headers : {
            'Authorization' : `Bearer ${localStorage.getItem('userToken')}`
        }
    })
}

const sendDeleteMember = (props) => {
    return sendRequest({
        ...props,
        method : "delete"
    })
}

const sendDeleteMemberDelete = (data) => {
    return sendDeleteMember({
        url : `https://localhost:44373/api/task/DeleteAssignedMember?id=${data.Id}&memberEmail=${data.MemberId}`,
        data : data,
        headers : {
            'Authorization' : `Bearer ${localStorage.getItem('userToken')}`
        }
    })
}
export {sendCreateTaskPost, sendEditTaskGet, sendDeleteTaskDelete, sendAssignMembersTaskPut, sendDeleteMemberDelete}