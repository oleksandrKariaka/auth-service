import express from 'express';
import bodyParser from 'body-parser';
import auth from './middlewares/auth';
import userRepo from '../db/repositories/User';

const app = express();

app.use(bodyParser.json());

app.post('/user', async (req, res) => {
  const newUser = req.body;

  await userRepo().save(newUser);

  res.send(201).send({ message: 'User has been created' });
});

app.get('/user/:id', auth, async (req, res) => {
  const id = req.params.id;
  const user = await userRepo().find({ where: id });

  if (!user)
    res.status(404).send({ message: 'User is not found in the database' });

  res.status(200).send({ user });
});

export default app;
