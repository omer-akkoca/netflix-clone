import React from 'react'
import { Picture, Spinner, LockBody, ReleaseBody } from './styles/loading'

export default function Loading({src,...rest}) {
    return(
        <Spinner {...rest}>
            <LockBody/>
            <Picture src={`/images/users/${src}.png`}/>
        </Spinner>
    )
}

Loading.ReleaseBody = function LoadingReleaseBody() {
    return <ReleaseBody/>
}