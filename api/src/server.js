const WebSocket = require("ws");
const wss = new WebSocket.Server({port: 5050});
const axios = require("axios");
const ip = require("ip");
const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const { AsyncRouter } = require("express-async-router")

// const response = await axios.get("https://jsonplaceholder.typicode.com/posts")

let liveservers = [];

const getServers = async () => {
    while(true){
        let buildservers = []
        const ipAddress = ip.address();
        const subnet =
            ipAddress
                .split(".")
                .slice(0, 3)
                .join(".") + ".";

        for (i = 1; i < 254; i++) {
            const scannedServer = "http://" + subnet + i.toString();
            try {
                const response = await axios.get(scannedServer + ":3000", {
                    timeout: 200
                });

                if (response.status == "200") {
                    console.log(scannedServer + ":3000");
                    buildservers.push(scannedServer + ":3000");
                }
            } catch (e) {}
            try {
                const response = await axios.get(scannedServer + ":8000", {
                    timeout: 200
                });

                if (response.status == "200") {
                    console.log(scannedServer + ":8000");
                    buildservers.push(scannedServer + ":8000");
                }
            } catch (e) {}
            try {
                const response = await axios.get(scannedServer + ":8080", {
                    timeout: 200
                });

                if (response.status == "200") {
                    console.log(scannedServer + ":8080");
                    buildservers.push(scannedServer + ":8080");
                }
            } catch (e) {}
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
