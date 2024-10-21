//Base response model
export interface ApiResponse<T> {
  result: T | null;
  status: number;
  error: string | null;
}