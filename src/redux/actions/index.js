import {actionTypes} from './actionTypes'
export function switchTask(id) {
    return ({
        type: actionTypes.Switch_Task,
        id
    })
}
export function getTasksRequest() {
    return {
        type: actionTypes.Get_Tasks_Request
    }
}
export function getTasksSuccess(json) {
    return {
        type: actionTypes.Get_Tasks_Success,
        tasks: json,
        recievedAt: Date.now()
    }
}

export function getTasksFailure(error) {
    return {
        type: actionTypes.Get_Tasks_Failure,
        error,
    }
}



