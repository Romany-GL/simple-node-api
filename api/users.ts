import { Request, Response } from 'express';
import User from '../Models/userModel';

const express = require('express');
const router = express.Router();

router.get('/', async (req: Request, res: Response) => {
  const users = await User.find();
  res.send(users);
});

router.post('/', async (req: Request, res: Response) => {
  const { fname, lname, email, password } = req.body;
  if (!fname || !lname || !email || !password) {
    return res.status(400).send('Missing required fields');
  }
  const newUser = new User({
    fname,
    lname,
    email,
    password,
  });
  try {
    const savedUser = await newUser.save();
    res.send(savedUser);
  } catch (error) {
    res.status(400);
    res.send(error);
  }
});

module.exports = router;
