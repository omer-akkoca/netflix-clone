import React, { useContext, useState } from 'react'
import HeaderContainer from '../containers/header';
import FooterContainer from '../containers/footer';
import { Form } from '../components'
import * as ROUTES from "../constants/routes"
import { useNavigate } from 'react-router-dom';
import { FirebaseContext } from '../context/firebaseContext'
import { useDispatch } from 'react-redux';
import { handleSignup } from '../../redux/actions/auth';

const Signup = () =>{

    const { auth } = useContext(FirebaseContext)
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [error, setError] = useState("")

    const isValid = email === "" || password === "" || name === ""

    const handleSubmit = (e) =>{
        e.preventDefault()

        const newUser = {name, email, password}

        dispatch(handleSignup(auth,newUser))
        .then(() =>{
            navigate(ROUTES.BROWSE)
        })
        .catch((err)=>{
            setName("")
            setPassword("")
            setEmail("")
            setError(err.message)
        })
    }

    return (
        <>
            <HeaderContainer>
                <Form>
                    <Form.Title>Sign Up</Form.Title>
                    <Form.Base onSubmit={(e)=> handleSubmit(e)}>
                        {error && <Form.Error>{error}</Form.Error>}
                        <Form.Input
                            placeholder="Name"
                            value={name}
                            onChange={(e)=>setName(e.target.value)}
                        />
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
                        <Form.Submit disabled={isValid} type="submit">Sign Up</Form.Submit>
                    </Form.Base>
                    <Form.Text>
                        Already a user? <Form.Link to={ROUTES.LOGIN}>Login now.</Form.Link>
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

export default Signup;