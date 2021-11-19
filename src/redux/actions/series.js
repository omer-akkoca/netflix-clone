import * as ACTIONS from "./actionTypes"
import { collection, getDocs } from "firebase/firestore"

export const setSeries = (series) =>({
    type: ACTIONS.SERIES,
    payload: series
})

export const getSeries = (db) =>{
    return async (dispatch)=>{
        let series = []
        const querySnapshot = await getDocs(collection(db, "series"))
        querySnapshot.forEach((doc) => {
            series.push({
                id: doc.id,
                ...doc.data()
            })
        })
        dispatch(setSeries(series))
    }
}