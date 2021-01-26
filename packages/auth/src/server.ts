import express from 'express';
import jwt from 'jsonwebtoken';

const accessToken = process.env.accessToken || 'someaccesstoken';
const refreshToken = process.env.refreshToken || 'somerefreshtoken';

const app = express();

app.get('/api/token/verify/:token', (req, res) => {
    const token = req.params['token'];

    if (!token) {
        return res.sendStatus(401);
    }

    jwt.verify(token, refreshToken, (err: any, user: any) => {
        if (err) {
            return res.sendStatus(403);
        }

        const authToken = jwt.sign({ username: user.username, role: user.role }, accessToken, { expiresIn: '20m' });

        res.json({
            authToken,
            user
        });
    });
});

export default app;
