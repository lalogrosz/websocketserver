"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = require("./app");
const websocket_server_1 = require("./websocket-server");
websocket_server_1.default.createServer(app_1.default);
app_1.default.listen(8000, () => {
    console.log('HTTP Server started');
});
//# sourceMappingURL=server.js.map