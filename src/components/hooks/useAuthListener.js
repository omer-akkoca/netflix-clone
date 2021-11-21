import { useEffect, useContext, useState } from 'react'
import { onAuthStateChanged } from "firebase/auth"
import { FirebaseContext } from '../context/firebaseContext'

export default function useAuthListener() {

    console.log("use aut listener worked")

    const { auth } = useContext(FirebaseContext)

    const [user, setUser] = useState(JSON.parse(localStorage.getItem("authUser")))

    useEffect(() => {
        const listener = onAuthStateChanged(auth, (authUser) => {
            if (authUser) {
                localStorage.setItem('authUser', JSON.stringify(authUser))
                setUser(authUser)
            } else {
                localStorage.removeItem('authUser')
                setUser(null)
            }
        })
        return () => listener();
    }, [auth])

    return { user }
}