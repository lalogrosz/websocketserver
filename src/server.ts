

import app from './app';
import websocket from './websocket-server';

websocket.createServer(app);

app.listen(8000, () => {
    console.log('HTTP Server started');
})