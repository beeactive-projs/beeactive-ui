/**
 * User Model
 */
export interface User {
  id: string;
  email: string;
  firstName: string;
  lastName: string;
  phone?: string;
  avatarUrl?: string;
  isActive: boolean;
  isEmailVerified: boolean;
  roles: string[]; // Array of role names: ["TRAINER", "CLIENT"]
  permissions: string[]; // Array of permission names: ["clients.create", "sessions.read"]
  createdAt: string;
  updatedAt: string;
}

/**
 * Create User DTO
 */
export interface CreateUserDto {
  email: string;
  password: string;
  firstName: string;
  lastName: string;
  phone?: string;
  roles: string[];
}

/**
 * Update User DTO
 */
export interface UpdateUserDto {
  firstName?: string;
  lastName?: string;
  phone?: string;
  avatarUrl?: string;
}
