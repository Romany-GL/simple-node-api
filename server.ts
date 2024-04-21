const express = require('express');
const apiRoutes = require('./startup/routes');
const connectToDb = require('./config/dbConnection');
const cors = require('cors');

const app = express();
app.use(cors());
//init Middleware to use the body parser
app.use(express.json({ extended: false }));
apiRoutes(app);

connectToDb();

const port = process.env.PORT || 5000;

const server = app.listen(port, () => {
  console.log(`Listening on port ${port}...`);
});
