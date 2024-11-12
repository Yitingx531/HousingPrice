/* eslint-disable @typescript-eslint/no-useless-constructor */
export class AuthError extends Error {
    constructor(message: string){
        super(message);
    }
}

export class NetworkError extends Error {
    constructor(message: string){
        super(message);
    }
}

export class APIError extends Error {
    constructor(
        message: string,
        public status: number,
        public code?: string
    ){
        super(message);
    }
}

export async function handleAPIResponse<T>(response: Response): Promise<T> {
    if (!response.ok) {
      if (response.status === 401) {
        throw new AuthError('Authentication failed');
      }
      if (response.status === 403) {
        throw new AuthError('Access denied');
      }
      if (response.status === 429) {
        throw new APIError('Too many requests', response.status);
      }
      
      // Try to get error message from response
      try {
        const errorData = await response.json();
        throw new APIError(
          errorData.message || 'An error occurred',
          response.status,
          errorData.code
        );
      } catch {
        throw new APIError(
          `HTTP error! status: ${response.status}`,
          response.status
        );
      }
    }
    
    return response.json();
  }