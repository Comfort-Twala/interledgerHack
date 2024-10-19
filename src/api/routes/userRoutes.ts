import { NextApiRequest, NextApiResponse } from 'next';
import { addUser, getUser, modifyUser, removeUser } from '../controllers/userController';

const userRoutes = (req: NextApiRequest, res: NextApiResponse) => {
  switch (req.method) {
    case 'POST':
      return addUser(req, res);
    case 'GET':
      return req.query.id ? getUser(req, res) : res.status(400).json({ error: 'ID is required' });
    case 'PUT':
      return modifyUser(req, res);
    case 'DELETE':
      return removeUser(req, res);
    default:
      res.setHeader('Allow', ['POST', 'GET', 'PUT', 'DELETE']);
      res.status(405).end(`Method ${req.method} Not Allowed`);
  }
};

export default userRoutes;

