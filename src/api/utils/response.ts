import { NextApiResponse } from "next";
import { ApiResponse } from "./apiResponse";

export const sendResponse = <T>(res: NextApiResponse, statusCode: number, data: ApiResponse<T>
) => {
  res.status(statusCode).json(data);
};