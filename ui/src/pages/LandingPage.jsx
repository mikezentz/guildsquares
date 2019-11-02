import React, {useGlobal} from 'reactn'
import WebSocket from 'ws'
import styled from 'styled-components'

import ScollBar from '../components/ScrollBar'
import ScrollBar from '../components/ScrollBar'

const Body = styled.div`
    height: 100vh;
    width: 100%;
    background: linear-gradient(90deg, rgba(6, 6, 6, 0.01) 0%, rgba(6, 6, 6, 0.01) 1%,rgba(131, 131, 131, 0.01) 1%, rgba(131, 131, 131, 0.01) 14%,rgba(250, 250, 250, 0.01) 14%, rgba(250, 250, 250, 0.01) 26%,rgba(30, 30, 30, 0.01) 26%, rgba(30, 30, 30, 0.01) 62%,rgba(117, 117, 117, 0.01) 62%, rgba(117, 117, 117, 0.01) 66%,rgba(248, 248, 248, 0.01) 66%, rgba(248, 248, 248, 0.01) 76%,rgba(39, 39, 39, 0.01) 76%, rgba(39, 39, 39, 0.01) 100%),linear-gradient(90deg, rgba(57, 57, 57, 0.06) 0%, rgba(57, 57, 57, 0.06) 4%,rgba(227, 227, 227, 0.06) 4%, rgba(227, 227, 227, 0.06) 26%,rgba(67, 67, 67, 0.06) 26%, rgba(67, 67, 67, 0.06) 27%,rgba(126, 126, 126, 0.06) 27%, rgba(126, 126, 126, 0.06) 39%,rgba(103, 103, 103, 0.06) 39%, rgba(103, 103, 103, 0.06) 72%,rgba(16, 16, 16, 0.06) 72%, rgba(16, 16, 16, 0.06) 76%,rgba(21, 21, 21, 0.06) 76%, rgba(21, 21, 21, 0.06) 88%,rgba(69, 69, 69, 0.06) 88%, rgba(69, 69, 69, 0.06) 100%),linear-gradient(90deg, rgba(156, 156, 156, 0.05) 0%, rgba(156, 156, 156, 0.05) 12%,rgba(54, 54, 54, 0.05) 12%, rgba(54, 54, 54, 0.05) 48%,rgba(169, 169, 169, 0.05) 48%, rgba(169, 169, 169, 0.05) 59%,rgba(104, 104, 104, 0.05) 59%, rgba(104, 104, 104, 0.05) 62%,rgba(165, 165, 165, 0.05) 62%, rgba(165, 165, 165, 0.05) 68%,rgba(124, 124, 124, 0.05) 68%, rgba(124, 124, 124, 0.05) 77%,rgba(189, 189, 189, 0.05) 77%, rgba(189, 189, 189, 0.05) 85%,rgba(173, 173, 173, 0.05) 85%, rgba(173, 173, 173, 0.05) 100%),linear-gradient(90deg, rgba(182, 182, 182, 0.07) 0%, rgba(182, 182, 182, 0.07) 22%,rgba(122, 122, 122, 0.07) 22%, rgba(122, 122, 122, 0.07) 28%,rgba(62, 62, 62, 0.07) 28%, rgba(62, 62, 62, 0.07) 44%,rgba(89, 89, 89, 0.07) 44%, rgba(89, 89, 89, 0.07) 61%,rgba(110, 110, 110, 0.07) 61%, rgba(110, 110, 110, 0.07) 83%,rgba(185, 185, 185, 0.07) 83%, rgba(185, 185, 185, 0.07) 86%,rgba(192, 192, 192, 0.07) 86%, rgba(192, 192, 192, 0.07) 100%),linear-gradient(90deg, rgba(8, 8, 8, 0.06) 0%, rgba(8, 8, 8, 0.06) 54%,rgba(48, 48, 48, 0.06) 54%, rgba(48, 48, 48, 0.06) 57%,rgba(245, 245, 245, 0.06) 57%, rgba(245, 245, 245, 0.06) 86%,rgba(12, 12, 12, 0.06) 86%, rgba(12, 12, 12, 0.06) 94%,rgba(225, 225, 225, 0.06) 94%, rgba(225, 225, 225, 0.06) 100%),linear-gradient(90deg, rgb(53, 169, 225) 0%,rgb(1, 145, 219) 80%,rgb(26, 221, 247) 100%);
`

const LandingPage = () => {
    const [ screenList, setScreenList ] = useGlobal('screenList')

    const tempList = [{
        ip: '192.168.1.205',
        port: '8000'
    }]

    setScreenList(tempList)

    return (
        <Body>
            <ScrollBar />
        </Body>
    )
}

export default LandingPage