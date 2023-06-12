export type Role = 1 | 2 | 3;

export interface User {
  username: string;
  password: string;
}

export interface UserResponse {
  first_name: string;
  last_name: string;
  phone: string;
  email: string;
  username: string;
  message: string;
  accessToken: string;
  id: string;
  role: Role;
}
