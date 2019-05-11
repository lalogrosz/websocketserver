"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// lib/app.ts
const bodyParser = require("body-parser");
const cors = require("cors");
const express = require("express");
const routes_1 = require("./routes/routes");
class App {
    constructor() {
        this.routesPrv = new routes_1.Routes();
        this.dbName = 'botonera';
        this.app = express();
        this.config();
        this.routesPrv.routes(this.app);
    }
    config() {
        // support application/json type post data
        this.app.use(bodyParser.json());
        //support application/x-www-form-urlencoded post data
        this.app.use(bodyParser.urlencoded({ extended: false }));
        this.app.use(cors());
    }
}
exports.default = new App().app;
//# sourceMappingURL=app.js.map