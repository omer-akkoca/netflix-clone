import React from "react"
import * as ROUTES from "../constants/routes"
import { Navigate } from "react-router-dom"

export const UserRoute = ({user, children}) =>{
    return user ? children : <Navigate to={ROUTES.HOME}/>
}

export const GuestRoute = ({user, children}) =>{
    return !(user) ? children : <Navigate to={ROUTES.BROWSE}/> 
}