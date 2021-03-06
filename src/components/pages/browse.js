import React, { useContext, useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getFilms } from '../../redux/actions/films';
import { getSeries } from "../../redux/actions/series"
import BrowseContainer from '../containers/browse';
import { FirebaseContext } from '../context/firebaseContext';
import selectionFilter from '../utils/selectionFilter';

const Browse = () =>{

    const { firestoreDB } = useContext(FirebaseContext)

    const dispatch = useDispatch()

    const films = useSelector(state => state.filmsReducer)
    const series = useSelector(state => state.seriesReducer)

    const slides = selectionFilter({films,series})

    useEffect(() => {
        dispatch(getFilms(firestoreDB))
        dispatch(getSeries(firestoreDB))
    }, [dispatch,firestoreDB])

    return (
        <>
            <BrowseContainer slides={slides}/>
        </>
    )
}

export default Browse;