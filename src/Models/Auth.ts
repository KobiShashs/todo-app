export interface LoginResponse {
    token: string;
    email: string;
}

export interface CredentialsRequest {
    email: string;
    password: string;
}

export interface User{
    token: string;
    email: string;
}