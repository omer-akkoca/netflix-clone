import React, { useState, useEffect, useContext } from 'react'
import ProfileContainer from './profile'
import FooterContainer from "../containers/footer"
import logo from "../../logo.svg"
import * as ROUTES from "../constants/routes"
import Fuse from "fuse.js"
import { Loading, Header, Card, Player } from "../components"
import { useSelector, useDispatch } from "react-redux"
import { FirebaseContext } from '../context/firebaseContext'
import { handleLogout } from "../../redux/actions/auth"

function BrowseContainer({slides}) {

    const { auth } = useContext(FirebaseContext)

    const dispatch = useDispatch()
    const user = useSelector(state => state.userReducer)

    const [category, setCategory] = useState('series')
    const [profile, setProfile] = useState({})
    const [loading, setLoading] = useState(true)
    const [searchTerm, setSearchTerm] = useState("")
    const [slideRows, setSlideRows] = useState([])

    useEffect(() => {
        setTimeout(() => {
            setLoading(false)
        }, 1500);
    }, [profile])

    useEffect(() => {
        setSlideRows(slides[category])
    }, [category,slides])

    useEffect(() => {
        const fuse = new Fuse(slideRows,{
            keys: ['data.description','data.title','data.genre']
        })
        const result = fuse.search(searchTerm).map(({item}) => item)
        if (slideRows.length > 0 && searchTerm.length > 3 && result.length > 0) {
            setSlideRows(result)
        }else{
            setSlideRows(slides[category])
        }
    }, [searchTerm])

    return profile.displayName 
        ?   (
                <>
                    {loading ? <Loading src={user.photoURL}/> : <Loading.ReleaseBody/>}
                    <Header src="joker1">
                        <Header.Frame>
                            <Header.Group>
                                <Header.Logo to={ROUTES.HOME} src={logo}/>
                                <Header.TextLink 
                                    active={category === "series" ? "true" : "false"}
                                    onClick={()=>setCategory("series")}    
                                >Series</Header.TextLink>
                                <Header.TextLink 
                                    active={category === "films" ? "true" : "false"}
                                    onClick={()=>setCategory("films")}    
                                >Films</Header.TextLink>
                            </Header.Group>
                            <Header.Group>
                                <Header.Search
                                    searchTerm={searchTerm}
                                    setSearchTerm={setSearchTerm}
                                />
                                <Header.Profile>
                                    <Header.Picture src={user.photoURL}/>
                                    <Header.DropDown>
                                        <Header.Group>
                                            <Header.Picture src={user.photoURL}/>
                                            <Header.TextLink>{user.displayName}</Header.TextLink>
                                        </Header.Group>
                                        <Header.Group>
                                            <Header.TextLink
                                                onClick={()=>dispatch(handleLogout(auth))}
                                            >Log Out</Header.TextLink>
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
                            <Header.PlayButton>Play</Header.PlayButton>
                        </Header.Feature>                    
                    </Header>
                    <Card.Group>
                        {
                            slideRows.map((slideItem)=>(
                                <Card key={`${category}-${slideItem.title.toLowerCase()}`}>
                                    <Card.Title>{slideItem.title}</Card.Title>
                                    <Card.Entities>
                                        {
                                            slideItem.data.map((item) => (
                                                <Card.Item key={item.id} item={item}>
                                                    <Card.Image src={`/images/${category}/${item.genre}/${item.slug}/small.jpg`}/>
                                                    <Card.Meta>
                                                        <Card.SubTitle>{item.title}</Card.SubTitle>
                                                        <Card.Text>{item.description}</Card.Text>
                                                    </Card.Meta>
                                                </Card.Item>
                                            ))
                                        }
                                    </Card.Entities>
                                    <Card.Feature category={category}>
                                        <Player>
                                            <Player.Button/>
                                            <Player.Video src="/videos/bunny.mp4"/>
                                        </Player>
                                    </Card.Feature>
                                </Card>
                            ))
                        }
                    </Card.Group>
                    <FooterContainer/>
                </>
            ) 
        :   <ProfileContainer setProfile={setProfile}/>

}

export default BrowseContainer;