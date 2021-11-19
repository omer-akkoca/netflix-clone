import INITIALSTATE from "./initialState"
import * as ACTIONS from "../actions/actionTypes"

function userReducer(state= INITIALSTATE.user, action) {
    switch (action.type) {
        case ACTIONS.LOGIN:
            return action.payload;
        case ACTIONS.SIGN_UP:
            return action.payload;
        case ACTIONS.LOG_OUT:
            return null;
        default:
            return state;
    }
}

export default userReducer;