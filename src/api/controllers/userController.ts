import { NextApiRequest, NextApiResponse } from 'next';
import { createUser, getUserById, updateUser, deleteUser } from '../services/userService';
import { sendResponse } from '../utils/response';

export const addUser = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const user = await createUser(req.body);
    sendResponse(res, 201, { result: user });
  } catch (error: unknown) {
    const errorMessage = error instanceof Error ? error.message : 'An unknown error occurred.';
    sendResponse(res, 400, { error: errorMessage });
  }
};

export const getUser = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const { id } = req.query;
    const user = await getUserById(Number(id));
    sendResponse(res, 200, { result: user });
  } catch (error: unknown) {
    const errorMessage = error instanceof Error ? error.message : 'An unknown error occurred.';
    sendResponse(res, 404, { error: errorMessage });
  }
};

export const modifyUser = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const { id } = req.query;
    const updatedUser = await updateUser(Number(id), req.body);
    sendResponse(res, 200, { result: updatedUser });
  } catch (error: unknown) {
    const errorMessage = error instanceof Error ? error.message : 'An unknown error occurred.';
    sendResponse(res, 400, { error: errorMessage });
  }
};

export const removeUser = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const { id } = req.query;
    await deleteUser(Number(id));
    sendResponse(res, 204, { result: null });
  } catch (error: unknown) {
    const errorMessage = error instanceof Error ? error.message : 'An unknown error occurred.';
    sendResponse(res, 400, { error: errorMessage });
  }
};
