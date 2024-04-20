import { connect } from 'http2';

const express = require('express');
const apiRoutes = require('./startup/routes');
const connectToDb = require('./config/dbConnection');

const app = express();
apiRoutes(app);

connectToDb();

const port = process.env.PORT || 3000;

const server = app.listen(port, () => {
  console.log(`Listening on port ${port}...`);
});
