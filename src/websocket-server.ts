import * as http from 'http';
import * as WebSocket from 'ws';

class WebsocketServer {

    public wss: WebSocket.Server;

    constructor() {
        console.log('Websocket Server Instanced');
    }

    createServer(app: Express.Application) {
        //initialize a simple http server
        const server = http.createServer(app);

        //initialize the WebSocket server instance
        this.wss = new WebSocket.Server({ server });

        this.wss.on('connection', (ws: WebSocket) => {

            //connection is up, let's add a simple simple event
            ws.on('message', (message: string) => {

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

export default new WebsocketServer();