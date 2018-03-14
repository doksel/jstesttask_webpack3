const initialState = {
    task: "some task",
    project: "some project",
    timeSpent: "some timeSpent"
}

export default function userInfo (state = initialState, action){
    switch(action.type){
        case "SET_TIMESPENT":
            return{state, timeSpent: action.payload}
        default:
            return state
    }
}