import React, {useGlobal} from 'reactn'
import styled from 'styled-components'

const Frame = styled.iframe`
    height: ${props => props.Height || '450px'};
    width: ${props => props.Width || '800px'};
`

const Screen = (props) => {
    const { 1: setMainScreen } = useGlobal('mainScreen')

    const changeDisplay = () => {

    }

    return (
        <Frame src={props.Server} onClick={changeDisplay}></Frame>
    )
}

export default Screen