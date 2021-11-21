import { combineReducers } from "redux"
import userReducer from "./authReducer"
import filmsReducer from "./films"
import seriesReducer from "./series"

const rootReducer = combineReducers({
    userReducer,
    filmsReducer,
    seriesReducer
})

export default rootReducer;