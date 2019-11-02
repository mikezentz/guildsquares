import React, {useGlobal} from 'reactn'
import styled from 'styled-components'
import Screen from './Screen'

const ScrollingDiv = styled.div`
    display: flex;
    overflow: hidden;
`

const ScrollBar = () => {
    const { 0: screenList } = useGlobal('screenList')
    const django = screenList.django
    const vue = screenList.vue
    const react = screenList.react

    return (
        <ScrollingDiv>
            { django.length > 0 ? django.map((screen) => (<Screen Display={screen}></Screen>)) : ''}
            { vue.length > 0 ? vue.map((screen) => (<Screen Display={screen}></Screen>)) : ''}
            { react.length > 0 ? react.filter((screen) => screen.ip !== window.location.host.split(":")[0]).map((screen) => (<Screen Display={screen}></Screen>)) : ''}
        </ScrollingDiv>
    )
}

export default ScrollBar