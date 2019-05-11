import { Request, Response } from 'express';
import websocket from '../websocket-server';


export class ApiController {    

    public refresh(req: Request, res: Response) {

        console.log('Llega al refresh');

        websocket.wss.clients.forEach(client => {
            client.send(JSON.stringify({
                action: 'refresh'
            }));
        });

        res.send('Joya');
    }

}