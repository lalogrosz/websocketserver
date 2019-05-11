"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const websocket_server_1 = require("../websocket-server");
class ApiController {
    refresh(req, res) {
        console.log('Llega al refresh');
        websocket_server_1.default.wss.clients.forEach(client => {
            client.send(JSON.stringify({
                action: 'refresh'
            }));
        });
        res.send('Joya');
    }
}
exports.ApiController = ApiController;
//# sourceMappingURL=api-controller.js.map