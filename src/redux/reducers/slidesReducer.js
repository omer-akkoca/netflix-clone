import INITIALSTATE from "./initialState"
import * as ACTIONS from "../actions/actionTypes"

function slidesReducer(state=INITIALSTATE.slides,action) {
    switch (action.type) {
        case ACTIONS.SET_SLIDES:
            return action.payload;
        default:
            return state;
    }
}

export default slidesReducer;