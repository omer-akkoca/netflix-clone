import React from "react"
import { Container, Row, Column, Link, Title, Text, Break } from "./styles/footer"

export default function Footer({children, ...rest}){
    return <Container {...rest}>{children}</Container>
}

Footer.Row = function FooterRow({children, ...rest}) {
    return <Row {...rest}>{children}</Row>
}

Footer.Column = function FooterColumn({children, ...rest}) {
    return <Column {...rest}>{children}</Column>
}

Footer.Link = function FooterLink({children, ...rest}) {
    return <Link {...rest}>{children}</Link>
}

Footer.Title = function FooterTitle({children, ...rest}) {
    return <Title {...rest}>{children}</Title>
}

Footer.Text = function FooterText({children, ...rest}) {
    return <Text {...rest}>{children}</Text>
}

Footer.Break = function FooterBreak() {
    return <Break/>
}