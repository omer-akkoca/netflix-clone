import React, { useContext, useState } from 'react'
import HeaderContainer from '../containers/header'
import FooterContainer from '../containers/footer'
import { Form } from '../components'
import * as ROUTES from "../constants/routes"
import { useNavigate } from 'react-router-dom'
import { FirebaseContext } from '../context/firebaseContext'
import { useDispatch } from "react-redux"
import { handleLogin } from '../../redux/actions/auth'

const Login = () =>{

    const { auth } = useContext(FirebaseContext)
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [error, setError] = useState("")

    const isValid = email === "" || password === ""

    const handleSubmit = (e) =>{
        e.preventDefault()
        
        dispatch(handleLogin(auth, email, password))
        .then(()=>{
            navigate(ROUTES.BROWSE)
        })
        .catch((error)=>{
            setEmail("")
            setPassword("")
            setError(error.message)
        })
    }

    return (
        <>
            <HeaderContainer>
                <Form>
                    <Form.Title>Sign In</Form.Title>
                    <Form.Base onSubmit={(e)=> handleSubmit(e)}>
                        {error && <Form.Error>{error}</Form.Error>}
                        <Form.Input
                            placeholder="Email Adress"
                            value={email}
                            onChange={(e)=>setEmail(e.target.value)}
                        />
                        <Form.Input
                            type="password"
                            placeholder="Password"
                            value={password}
                            onChange={(e)=>setPassword(e.target.value)}
                        />
                        <Form.Submit disabled={isValid} type="submit">Sign In</Form.Submit>
                    </Form.Base>
                    <Form.Text>
                        New to Netflix? <Form.Link to={ROUTES.SIGN_UP}>Sign up now.</Form.Link>
                    </Form.Text>
                    <Form.SmallText>
                        This page is protected by Google reCAPTCHA to ensure you're not a bot. Learn more.
                    </Form.SmallText>
                </Form>
            </HeaderContainer>
            <FooterContainer/>
        </>
    )
}

export default Login;