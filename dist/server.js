"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require('express');
const apiRoutes = require('./startup/routes');
const app = express();
apiRoutes(app);
const port = process.env.PORT || 3000;
const server = app.listen(port, () => {
    console.log(`Listening on port ${port}...`);
});
