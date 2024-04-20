import { exit } from 'process';
require('dotenv').config();

const mongoose = require('mongoose');

const DbUserName = process.env.DB_USER_NAME;
const DbPassword = process.env.DB_PASSWORD;
const DbName = process.env.DB_APP_NAME;

const DBURL = `mongodb+srv://${DbUserName}:${DbPassword}@gh-actions.ykviicv.mongodb.net/?retryWrites=true&w=majority&appName=${DbName}`;

const connectToDb = async () => {
  try {
    await mongoose.connect(DBURL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('Connected to MongoDB...');
  } catch (error) {
    console.error('Could not connect to MongoDB...', error);
    exit(1);
  }
};

module.exports = connectToDb;
