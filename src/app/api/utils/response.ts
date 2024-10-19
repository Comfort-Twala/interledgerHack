// lib/sendResponse.ts
import { NextResponse } from "next/server";
import { ApiResponse } from "./apiResponse";

export const sendResponse = <T>(
  statusCode: number,
  data: ApiResponse<T>
) => {
  return NextResponse.json(data, { status: statusCode });
};
