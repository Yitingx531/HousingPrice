export interface AuthResponse {
    message?: string;
    user: {
        id: string;
        email: string
    }
}