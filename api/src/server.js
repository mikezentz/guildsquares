const WebSocket = require("ws")
const wss = new WebSocket.Server({port: 5050})
const axios = require("axios")
const ip = require("ip")

// const response = await axios.get("https://jsonplaceholder.typicode.com/posts")
const ipAddress = ip.address()

const subnet = ipAddress.split(".").slice(0,3).join(".") + "."
const liveServers = []

const main = async () => {

    for (i = 254; i > 1; i--) {

        const scannedServer = "http://" + subnet + i.toString() + ":8000"
        console.log(scannedServer)
        try {
            const response = await axios.get(scannedServer)

            if(response.status=="200"){
                console.log(response.data)
                liveservers.push(scannedServer)

            }
        } catch (e) {

        }



    }
    console.log(liveservers)
}

main()
