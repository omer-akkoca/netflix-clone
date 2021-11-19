import React, { useContext, useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { handleLogout } from '../../redux/actions/auth';
import { getFilms } from '../../redux/actions/films';
import { getSeries } from "../../redux/actions/series"
import { getSlides } from '../../redux/actions/slides';
import { FirebaseContext } from '../context/firebaseContext';

const Browse = () =>{

    const {auth,firestoreDB} = useContext(FirebaseContext)
    
    const dispatch = useDispatch()

    const films = useSelector(state => state.filmsReducer)
    const series = useSelector(state => state.seriesReducer)
    const slides = useSelector(state => state.slidesReducer)

    useEffect(() => {
        dispatch(getFilms(firestoreDB))
        dispatch(getSeries(firestoreDB))
        dispatch(getSlides(films,series))
    }, [dispatch,firestoreDB])

    return (
        <h1 onClick={()=>dispatch(handleLogout(auth))}>
           This is Browse Page 
        </h1>
    )
}

export default Browse;