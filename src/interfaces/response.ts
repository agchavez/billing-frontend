export interface LoginResponse {
    user:  User;
    token: string;
}

export interface User {
    id:         number;
    first_name: string;
    last_name:  string;
}