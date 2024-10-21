//Base response for all responses
import { NextResponse } from 'next/server';
import { ApiResponse } from './apiResponse';

export function sendResponse<T>(
  result: T | null,
  status: number,
  error: string | null
): NextResponse<ApiResponse<T>> {
  const apiResponse: ApiResponse<T> = { result, status, error };
  return NextResponse.json(apiResponse, { status });
}