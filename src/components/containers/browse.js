import React, { useState, useEffect } from 'react'
import ProfileContainer from './profile'
import { Loading, Header } from "../components"
import { useSelector } from "react-redux"
import * as ROUTES from "../constants/routes"
import logo from "../../logo.svg"

function BrowseContainer({slides}) {

    const user = useSelector(state => state.userReducer)

    const [profile, setProfile] = useState({})
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        setTimeout(() => {
            setLoading(false)
        }, 3000);
    }, [profile])

    return profile.displayName 
        ?   (
                <>
                    {loading ? <Loading src={user.photoURL}/> : <Loading.ReleaseBody/>}
                    <Header src="joker1">
                        <Header.Frame>
                            <Header.Group>
                                <Header.Logo to={ROUTES.HOME} src={logo}/>
                                <Header.TextLink>Series</Header.TextLink>
                                <Header.TextLink>Films</Header.TextLink>
                            </Header.Group>
                            <Header.Group>
                                <Header.Profile>
                                    <Header.Picture src={user.photoURL}/>
                                    <Header.DropDown>
                                        <Header.Group>
                                            <Header.Picture src={user.photoURL}/>
                                            <Header.TextLink>{user.displayName}</Header.TextLink>
                                        </Header.Group>
                                    </Header.DropDown>
                                </Header.Profile>
                            </Header.Group>
                        </Header.Frame>
                        <Header.Feature>
                            <Header.FeatureCallOut>Watch Joker Now</Header.FeatureCallOut>
                            <Header.Text>
                                In Gotham City, mentally troubled comedian Arthur Fleck is disregarded and 
                                mistreated by society. He then embarks on a downward spiral of revolution and 
                                bloody crime. This path brings him face-to-face with his alter-ego: the Joker.
                            </Header.Text>
                        </Header.Feature>                    
                    </Header>
                </>
            ) 
        :   <ProfileContainer setProfile={setProfile}/>

}

export default BrowseContainer;