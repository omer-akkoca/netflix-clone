import React, { useState, useContext, createContext } from 'react'
import ReactDOM from 'react-dom'
import { Container, Button, Overlay, Inner, Close } from "./styles/player"

export const PlayerContext = createContext()

export default function Player({children,...rest}) {
    const [showPlayer, setShowPlayer] = useState(false)

    return(
        <PlayerContext.Provider value={{showPlayer,setShowPlayer}}>
            <Container {...rest}>{children}</Container>
        </PlayerContext.Provider>
    )
}

Player.Video = function PlayerVideo({src,children,...rest}) {
    const { showPlayer, setShowPlayer } = useContext(PlayerContext)
    return showPlayer ? ReactDOM.createPortal(
        <Overlay {...rest} onClick={()=>setShowPlayer(false)}>
            <Inner>
                <video id="netflix-player" controls>
                    <source src={src} type="video/mp4"/>
                </video>
                <Close/>
            </Inner>
        </Overlay>,
        document.body
    ) : null
}

Player.Button = function PlayerButton({...rest}) {
    const { setShowPlayer } = useContext(PlayerContext)
    return <Button {...rest} onClick={()=>setShowPlayer(showPlayer => !showPlayer)}>Play</Button>
}