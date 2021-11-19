import INITIALSTATE from "./initialState"
import * as ACTIONS from "../actions/actionTypes"

function filmsReducer(state=INITIALSTATE.films,action) {
    switch (action.type) {
        case ACTIONS.FILMS:
            return action.payload;
        default:
            return state;
    }
}

export default filmsReducer;