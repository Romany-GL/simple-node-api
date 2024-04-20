import { Request, Response } from 'express';

const express = require('express');
const router = express.Router();

router.get('/', (req: Request, res: Response) => {
  res.send('Hello from users route');
});

module.exports = router;
