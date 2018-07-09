/* app/server.ts */

// Import everything from express and assign it to the express variable
require('dotenv').config();

import express from 'express';

// Import SignUpController from controllers entry point
import {SignUpController } from './controllers';

// Create a new express application instance
const app: express.Application = express();
// The port the express app will listen on
const port: number =  3000;

// Mount the SignUpController at the /signp route
app.use('/signup', SignUpController);

// Serve the application at the given port
app.listen(port, () => {
    // Success callback
    console.log(`Listening at http://localhost:${port}/`);
});