import React, {useGlobal} from 'reactn'
import styled from 'styled-components'
import Screen from './Screen'

const ScrollingDiv = styled.div`
    display: flex;
    overflow: hidden;
`

const ScrollBar = () => {
    const { 0: screenList } = useGlobal('screenList')
    const localurl = `//${window.location.host.split(":")[0]}:1111`

    return (
        <ScrollingDiv>
            {screenList.liveservers ? screenList.liveservers.filter((server) => server !== localurl).map((server) => (<Screen key={server} Server={server}></Screen>) ) : ''}
        </ScrollingDiv>
    )
}

export default ScrollBar