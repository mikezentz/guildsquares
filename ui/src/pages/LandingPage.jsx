import React, {useGlobal, useEffect} from 'reactn'
import Gallery from '../components/Gallery'
import client from '../api/client'
import styled from 'styled-components'

const Body = styled.div`
    height: 100vh;
    width: 100vw;
    background: linear-gradient(135deg, rgb(32, 186, 230),rgb(110, 6, 173));
`

const LandingPage = () => {

    const  { 1: setImages } = useGlobal("images")
    const [ countdown, setCountdown ] = useGlobal("countdown")

    const getImages = async () => {
        const { data } = await client.get('/')

        setImages(data)
    }

    const timer = () => {
        setCountdown(countdown - 1)
        console.log(countdown)
        if(countdown === 0) {
            setCountdown(30)
            // getImages()
        }
    }

    useEffect(() => {
        setCountdown(30)
        setInterval(timer, 1000)
      }, [])

    return (
        <Body>
            <Gallery />
            <button onClick={() => setCountdown(29)}>Change</button>
        </Body>
    )
}

export default LandingPage