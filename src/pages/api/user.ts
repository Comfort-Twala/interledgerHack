import { NextApiRequest, NextApiResponse } from 'next';
import userRoutes from '../../api/routes/userRoutes';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  return userRoutes(req, res);
}