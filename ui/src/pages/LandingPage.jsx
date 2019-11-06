import React, {useGlobal, useState, useEffect} from 'reactn'
import Gallery from '../components/Gallery'
import client from '../api/client'
import styled from 'styled-components'

const Body = styled.div`
    height: 100vh;
    width: 100vw;
    background: linear-gradient(135deg, rgb(32, 186, 230),rgb(110, 6, 173));
`

const Container = styled.div`
    display: grid;
    grid-template-columns: repeat(${props => props.digit}, auto);
    grid-template-rows: repeat(${props => props.digit}, auto);
`

const LandingPage = () => {
    const [ digit, setDigit ] = useState(4)
    const [ frames, setFrames] = useState([])
    const Height = 984
    const Width = 1824

    const getFrames = async () => {
        const { data } = await client.get('/')

        setFrames(data.liveservers)
        setDigit(Math.floor(Math.sqrt(data.liveservers.length)))
    }

    useEffect(() => {
        setInterval(() => {
            getFrames()
        }, 5000)
    }, [])

    return (
        <Body>
            <Container digit={digit}>
                {frames ? frames.map(frame => (<iframe title={frame.toString()} src={frame} height={Height/digit + "px"} width={Width/digit + "px"}></iframe>)) : 'Loading...'}
            </Container>
        </Body>
    )
}

export default LandingPage