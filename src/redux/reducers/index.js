import { actionTypes } from '../actions/actionTypes'

const initialState = {
    tasks: [
        { id: 1, title: 'title', content: 'content', checked: true },
        { id: 2, title: 'title', content: 'content', checked: false },
        { id: 3, title: 'title', content: 'content', checked: false },
        { id: 4, title: 'title', content: 'content', checked: false },
        { id: 5, title: 'title', content: 'content', checked: false }
    ]
}

function taskReducer(state = initialState, action) {
    switch (action.type) { 
        case actionTypes.Switch_Task:
            const tasks = state.tasks.map((task) => {
                if (task.id === action.id) {
                    return Object.assign({}, task, {
                        checked: !task.checked,
                    })
                } else {
                    return  task
                } 
                    
            })
            console.log(tasks)
            return {tasks: tasks}
        default:
            return state
    }
}

export default taskReducer
