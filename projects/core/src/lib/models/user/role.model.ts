/**
 * Role Model
 */
export interface Role {
  id: string;
  name: string; // e.g., "TRAINER", "CLIENT", "ADMIN"
  displayName: string; // e.g., "Trainer", "Client"
  description?: string;
  permissions: string[]; // Array of permission names
  createdAt: Date;
  updatedAt: Date;
}

/**
 * System Roles Enum
 */
export enum SystemRole {
  ADMIN = 'ADMIN',
  TRAINER = 'TRAINER',
  CLIENT = 'CLIENT',
}

/**
 * User Role Assignment
 */
export interface UserRoleAssignment {
  userId: string;
  roleId: string;
  roleName: string;
  assignedAt: Date;
}
