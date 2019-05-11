import { ApiController } from './../controllers/api-controller';
import {Request, Response} from "express";


export class Routes {      
    
    public apiController: ApiController = new ApiController();

    public routes(app: any): void {          
        app.route('/')
        .get((req: Request, res: Response) => {            
            res.status(200).send({
                message: 'GET request successfulll!!!!'
            })
        })       
        // POST endpoint
        .post((req: Request, res: Response) => {   
        // Create new button         
            res.status(200).send({
                message: 'POST request successfulll!!!!'
            })
        });

        app.route('/filter-terms')
        .post(this.apiController.refresh)

    }
}