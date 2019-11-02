import React from 'react'
import styled from 'styled-components'

const Frame = styled.iframe`
    height: ${props => props.Height || '450px'};
    width: ${props => props.Width || '800px'};
`

const Screen = () => {

    return (
        <Frame></Frame>
    )
}

export default Screen