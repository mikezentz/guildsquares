const WebSocket = require("ws");
const wss = new WebSocket.Server({port: 5050});
const axios = require("axios");
const ip = require("ip");
const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const { AsyncRouter } = require("express-async-router")

let liveservers = [];

const getServers = async () => {
    while(true){
        const ports = ["3000", "8000", "8080", "5050"]
        const buildservers = []
        const ipAddress = ip.address();
        const subnet =
            ipAddress
                .split(".")
                .slice(0, 3)
                .join(".") + ".";

        for (i = 1; i < 255; i++) {
            for (port of ports) {
                const scannedServer = "http://" + subnet + i.toString() + ":" + port;
                try {
                    const response = await axios.get(scannedServer, {
                        timeout: 200
                    });

                    if (response.status == "200") {
                        console.log("Found open server: " + scannedServer);
                        buildservers.push(scannedServer);
                    }
                } catch (e) {}
            }

        }
        console.log(buildservers);
        console.log("Done");
        liveservers = buildservers
    }

};

const app = express()


app.use(cors())
app.use(express.json())
app.use(morgan("tiny"))

app.get('/', (req, res) => {
    res.send({liveservers})
})

const startServer = async (port = 1111, hostname = "localhost") => {
    app.listen(port, hostname, () => {
        console.log(`Listening at ${hostname}:${port}...`)
    })


}

startServer()
getServers()
