import React, { useGlobal } from 'react'
import styled from 'styled-components'
import Screen from './Screen'



const MainPanel = () => {

    const { 0: mainScreen } = useGlobal('mainScreen')

    return (
        <Screen src={mainScreen ? mainScreen : ''}></Screen>
    )
}

export default MainPanel