import React from "react"
import * as ROUTES from "../constants/routes"
import { Navigate } from "react-router-dom"
import { useSelector } from "react-redux"

export const UserRoute = ({children}) =>{
    const user = useSelector(state => state.userReducer)
    return user ? children : <Navigate to={ROUTES.HOME}/>
}

export const GuestRoute = ({children}) =>{
    const user = useSelector(state => state.userReducer)
    return !(user) ? children : <Navigate to={ROUTES.BROWSE}/> 
}