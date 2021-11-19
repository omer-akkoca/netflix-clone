import INITIALSTATE from "./initialState"
import * as ACTIONS from "../actions/actionTypes"

function seriesReducer(state=INITIALSTATE.series,action) {
    switch (action.type) {
        case ACTIONS.SERIES:
            return action.payload;
        default:
            return state;
    }
}

export default seriesReducer;