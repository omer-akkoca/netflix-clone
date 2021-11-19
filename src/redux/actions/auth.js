import * as ACTIONS from "./actionTypes"
import { 
    signInWithEmailAndPassword,
    createUserWithEmailAndPassword, 
    updateProfile, 
    signOut
} from "firebase/auth"

export const login = (user) =>({
    type: ACTIONS.LOGIN,
    payload: user
})

export const signup = (user) =>({
    type: ACTIONS.SIGN_UP,
    payload: user
})

export const logout = () =>({
    type: ACTIONS.LOG_OUT
})

export const handleLogin = (db,mail,password)=>{
    return (dispatch) =>{
        return signInWithEmailAndPassword(db,mail,password)
        .then((result)=>{
            localStorage.setItem("authUser",JSON.stringify(result.user))
            dispatch(login(result.user))
        })
    }
}

export const handleSignup = (auth,user)=>{
    return (dispatch) =>{
        return createUserWithEmailAndPassword(auth,user.email,user.password)
        .then((result)=>{
            updateProfile(result.user, {
                displayName: user.name, 
                photoURL: Math.floor(Math.random() * 5) + 1
            })
            .then(()=>{
                localStorage.setItem("authUser",JSON.stringify(result.user))
                dispatch(signup(result.user))
            })
        })
    }
}

export const handleLogout = (db)=>{
    return (dispatch) =>{
        return signOut(db)
        .then(()=>{
            localStorage.removeItem("authUser")
            dispatch(logout())
        })
    }
}