"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const api_controller_1 = require("./../controllers/api-controller");
class Routes {
    constructor() {
        this.apiController = new api_controller_1.ApiController();
    }
    routes(app) {
        app.route('/')
            .get((req, res) => {
            res.status(200).send({
                message: 'GET request successfulll!!!!'
            });
        })
            // POST endpoint
            .post((req, res) => {
            // Create new button         
            res.status(200).send({
                message: 'POST request successfulll!!!!'
            });
        });
        app.route('/filter-terms')
            .post(this.apiController.refresh);
    }
}
exports.Routes = Routes;
//# sourceMappingURL=routes.js.map