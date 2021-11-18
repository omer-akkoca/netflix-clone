import { useState, useEffect, useContext } from "react"
import { onAuthStateChanged } from "firebase/auth"
import { FirebaseContext } from "../context/firebaseContext"

export default function useAuthListener(){

    const { auth } = useContext(FirebaseContext)

    const [user, setUser] = useState(JSON.parse(localStorage.getItem("authUser")))

    useEffect(() => {
        const listener = onAuthStateChanged(auth, (firebaseUser) => {
            if (firebaseUser) {
                localStorage.setItem("authUser",JSON.stringify(firebaseUser))
                setUser(firebaseUser)
            } else {
                localStorage.removeItem("authUser")
                setUser(null)
            }
        })
        return () => listener()
    }, [auth])

    return { user };
}