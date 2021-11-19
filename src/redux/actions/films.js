import * as ACTIONS from "./actionTypes"
import { collection, getDocs } from "firebase/firestore"

export const setFilms = (films) =>({
    type: ACTIONS.FILMS,
    payload: films
})

export const getFilms =  (db) =>{
    return async (dispatch)=>{
        let films = []
        const querySnapshot = await getDocs(collection(db, "films"))
        querySnapshot.forEach((doc) => {
            films.push({
                id: doc.id,
                ...doc.data()
            })
        })
        dispatch(setFilms(films))
    }
}