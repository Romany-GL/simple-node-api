"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const routes = (app) => {
    app.use('/api/users', require('../api/users'));
};
module.exports = routes;
