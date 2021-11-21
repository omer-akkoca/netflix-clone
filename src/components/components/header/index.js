import React from "react"
import { Link as ReactRouterLink } from "react-router-dom"
import { 
    Container, 
    Background, 
    Logo, 
    ButtonLink, 
    Feature, 
    Text, 
    FeatureCallOut, 
    Link, 
    Group, 
    Picture,
    Profile,
    DropDown
} from "./styles/header"

export default function Header({ bg = true, children, ...rest }) {
    return bg ? <Background {...rest}>{children}</Background> : children
}

Header.Frame = function HeaderFrame({children, ...rest}) {
    return <Container {...rest}>{children}</Container>
}

Header.Group = function HeaderGroup({children, ...rest}) {
    return <Group {...rest}>{children}</Group>
}

Header.Logo = function HeaderLogo({to, ...rest}) {
    return(
        <ReactRouterLink to={to}>
            <Logo {...rest}/>
        </ReactRouterLink>
    )
}

Header.ButtonLink = function HeaderButtonLink({children, ...rest}) {
    return <ButtonLink {...rest}>{children}</ButtonLink>
}

Header.DropDown = function HeaderDropDown({children, ...rest}) {
    return <DropDown {...rest}>{children}</DropDown>
}

Header.Feature = function HeaderFeature({children, ...rest}) {
    return <Feature {...rest}>{children}</Feature>
}

Header.Text = function HeaderText({children, ...rest}) {
    return <Text {...rest}>{children}</Text>
}

Header.FeatureCallOut = function HeaderFeatureCallOut({children, ...rest}) {
    return <FeatureCallOut {...rest}>{children}</FeatureCallOut>
}

Header.TextLink = function HeaderTextLink({children, ...rest}) {
    return <Link {...rest}>{children}</Link>
}

Header.Picture = function HeaderPicture({src, ...rest}) {
    return <Picture {...rest} src={`/images/users/${src}.png`}/>
}

Header.Profile = function HeaderProfile({children, ...rest}) {
    return <Profile {...rest}>{children}</Profile>
}