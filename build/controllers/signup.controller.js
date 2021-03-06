"use strict";
/* app/controllers/welcome.controller.ts */
Object.defineProperty(exports, "__esModule", { value: true });
// Import only what we need from express
var express_1 = require("express");
// Assign router to the express.Router() instance
var router = express_1.Router();
// The / here corresponds to the route that the SignUpController
// is mounted on in the server.ts file.
// In this case it's /signup
router.get('/', function (req, res) {
    // Reply with a hello world when no name param is provided
    res.send('Thank you for signing up!');
});
router.get('/:name', function (req, res) {
    // Extract the name from the request parameters
    var name = req.params.name;
    // Greet the given name
    res.send("Welcome, " + name);
});
// Export the express.Router() instance to be used by server.ts
exports.SignUpController = router;
