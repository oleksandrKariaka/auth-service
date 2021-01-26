import axios from 'axios';
import { NextFunction } from 'express';

const authUrl = process.env.authServiceUrl || 'http://localhost:3000';

interface AuthResponse {
  user: any;
  accessToken: string;
}

export default async (req: any, res: any, next: NextFunction) => {
  const authHeader = req.headers.authorization;

  if (authHeader) {
    const token = authHeader.split(' ')[1];

    const response = await axios.get<AuthResponse>(`${authUrl}/api/token/verify${token}`);

    if (!response) {
      res.status(500).send({ message: 'Authentication failed' });
    }

    req.user = response.data.user;

    next();
  } else {
    res.sendStatus(401);
  }
}