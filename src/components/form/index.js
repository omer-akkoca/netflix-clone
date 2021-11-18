import React from 'react'
import { Container, Base, Error, Title, Text, SmallText, Link, Input, Submit } from "./styles/form"

export default function Form({children, ...rest}) {
    return <Container {...rest}>{children}</Container>
}

Form.Base = function FormBase({children, ...rest}) {
    return <Base {...rest}>{children}</Base>
}

Form.Error = function FormError({children, ...rest}) {
    return <Error {...rest}>{children}</Error>
}

Form.Title = function FormTitle({children, ...rest}) {
    return <Title {...rest}>{children}</Title>
}

Form.Text = function FormText({children, ...rest}) {
    return <Text {...rest}>{children}</Text>
}

Form.SmallText = function FormSmallText({children, ...rest}) {
    return <SmallText {...rest}>{children}</SmallText>
}

Form.Link = function FormLink({children, ...rest}) {
    return <Link {...rest}>{children}</Link>
}

Form.Input = function FormInput({...rest}) {
    return <Input {...rest}/>
}

Form.Submit = function FormSubmit({children, ...rest}) {
    return <Submit {...rest}>{children}</Submit>
}