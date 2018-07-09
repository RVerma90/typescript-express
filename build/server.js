"use strict";
/* app/server.ts */
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// Import everything from express and assign it to the express variable
require('dotenv').config();
var express_1 = __importDefault(require("express"));
// Import SignUpController from controllers entry point
var controllers_1 = require("./controllers");
// Create a new express application instance
var app = express_1.default();
// The port the express app will listen on
var port = 3000;
// Mount the SignUpController at the /signp route
app.use('/signup', controllers_1.SignUpController);
// Serve the application at the given port
app.listen(port, function () {
    // Success callback
    console.log("Listening at http://localhost:" + port + "/");
});
