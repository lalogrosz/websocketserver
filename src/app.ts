// lib/app.ts
import * as bodyParser from 'body-parser';
import * as cors from 'cors';
import * as express from 'express';

import { Routes } from './routes/routes';


class App {

    public app: express.Application;
    public routesPrv: Routes = new Routes();
    public dbName: string = 'botonera';

    constructor() {
        this.app = express();
        this.config();
        this.routesPrv.routes(this.app);
    }

    private config(): void {
        // support application/json type post data
        this.app.use(bodyParser.json());

        //support application/x-www-form-urlencoded post data
        this.app.use(bodyParser.urlencoded({ extended: false }));
        
        this.app.use(cors());
    }
}

export default new App().app;