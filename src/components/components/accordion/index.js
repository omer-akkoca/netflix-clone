import React, { useState, createContext, useContext } from "react"
import { Container, Inner, Title, Item, Header, Body } from "./styles/accordion"

const ToggleContext = createContext()

export default function Accordion({children, ...rest}) {
    return (
        <Container {...rest}>
            <Inner>{children}</Inner>
        </Container>
    )
}

Accordion.Title = function AccordionTitle({children, ...rest}) {
    return <Title {...rest}>{children}</Title>
}

Accordion.Item = function AccordionItem({children, ...rest}) {
    const [toggleShow, setToggleShow] = useState(false)

    return (
        <ToggleContext.Provider value={{toggleShow,setToggleShow}}>
            <Item {...rest}>{children}</Item>
        </ToggleContext.Provider>
    )
}

Accordion.Header = function AccordionHeader({children, ...rest}) {
    const { toggleShow, setToggleShow } = useContext(ToggleContext)

    return (
        <Header 
            {...rest}
            onClick={()=>setToggleShow( (toggleShow) => !toggleShow)}
        >
            {children}
            {
                toggleShow
                ?   <img src="images/icons/close-slim.png" alt="Close"/>
                :   <img src="images/icons/add.png" alt="Open"/>
            }
        </Header>
    )
}

Accordion.Body = function AccordionBody({children, ...rest}) {
    const { toggleShow } = useContext(ToggleContext)

    return toggleShow ? <Body {...rest}>{children}</Body> : null
}