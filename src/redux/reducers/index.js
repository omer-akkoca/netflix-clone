import { combineReducers } from "redux"
import userReducer from "./authReducer"
import slidesReducer from "./slidesReducer"
import filmsReducer from "./films"
import seriesReducer from "./series"

const rootReducer = combineReducers({
    userReducer,
    slidesReducer,
    filmsReducer,
    seriesReducer
})

export default rootReducer;