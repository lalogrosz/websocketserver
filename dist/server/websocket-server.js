"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const http = require("http");
const WebSocket = require("ws");
class WebsocketServer {
    constructor() {
        console.log('Websocket Server Instanced');
    }
    createServer(app) {
        //initialize a simple http server
        const server = http.createServer(app);
        //initialize the WebSocket server instance
        this.wss = new WebSocket.Server({ server });
        this.wss.on('connection', (ws) => {
            //connection is up, let's add a simple simple event
            ws.on('message', (message) => {
                //log the received message and send it back to the client
                console.log('received: %s', message);
                ws.send(`Hello, you sent -> ${message}`);
            });
            //send immediatly a feedback to the incoming connection    
            ws.send('Hi there, I am a WebSocket server');
        });
        //start our server
        server.listen(process.env.PORT || 8999, () => {
            console.log(`WebSocket Server started on port :)`, server.address());
        });
    }
}
exports.default = new WebsocketServer();
//# sourceMappingURL=websocket-server.js.map