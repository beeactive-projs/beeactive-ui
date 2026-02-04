import { User } from '../user/user.model';

export interface AuthResponse {
  accessToken: string;
  refreshToken: string;
  expiresIn: number;
  user: User;
  roles: string[];
  permissions: string[];
}
