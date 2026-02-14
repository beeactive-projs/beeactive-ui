/**
 * Role Model
 */
export interface Role {
  id: string;
  name: string; // e.g., "ORGANIZER", "PARTICIPANT", "SUPER_ADMIN"
  displayName: string; // e.g., "Organizer", "Participant"
  description?: string;
  permissions: string[]; // Array of permission names
  createdAt: Date;
  updatedAt: Date;
}

/**
 * System Roles Enum
 */
export enum SystemRole {
  SUPER_ADMIN = 'SUPER_ADMIN',
  ORGANIZER = 'ORGANIZER',
  PARTICIPANT = 'PARTICIPANT',
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
