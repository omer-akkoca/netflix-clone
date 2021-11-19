import * as ACTIONS from "./actionTypes"
import selectionFilter from "../../components/utils/selectionFilter";

export function setSlides(movies) {
    return({
        type: ACTIONS.SET_SLIDES,
        payload: movies
    })
}

export function getSlides(films,series) {
    return (dispatch)=>{
        console.log("getSlides",films)
        const movies = selectionFilter({films,series})
        dispatch(setSlides(movies))
    }
}