/**
 * Permission Model
 */
export interface Permission {
  id: string;
  name: string; // e.g., "clients.create", "sessions.read"
  displayName: string; // e.g., "Create Clients"
  description?: string;
  resource: string; // e.g., "clients", "sessions"
  action: string; // e.g., "create", "read", "update", "delete"
  createdAt: Date;
  updatedAt: Date;
}

/**
 * Pre-defined Permissions
 */
export const PERMISSIONS = {
  // Clients
  CLIENTS_CREATE: 'clients.create',
  CLIENTS_READ: 'clients.read',
  CLIENTS_UPDATE: 'clients.update',
  CLIENTS_DELETE: 'clients.delete',

  // Sessions
  SESSIONS_CREATE: 'sessions.create',
  SESSIONS_READ: 'sessions.read',
  SESSIONS_UPDATE: 'sessions.update',
  SESSIONS_DELETE: 'sessions.delete',

  // Programs
  PROGRAMS_CREATE: 'programs.create',
  PROGRAMS_READ: 'programs.read',
  PROGRAMS_UPDATE: 'programs.update',
  PROGRAMS_DELETE: 'programs.delete',

  // Messages
  MESSAGES_SEND: 'messages.send',
  MESSAGES_READ: 'messages.read',

  // Payments
  PAYMENTS_CREATE: 'payments.create',
  PAYMENTS_READ: 'payments.read',
  PAYMENTS_UPDATE: 'payments.update',
} as const;

/**
 * Permission type for type safety
 */
export type PermissionName = (typeof PERMISSIONS)[keyof typeof PERMISSIONS];
