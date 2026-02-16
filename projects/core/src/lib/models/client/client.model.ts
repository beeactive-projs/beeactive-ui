export interface Client {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  phone?: string;
  avatarUrl?: string;
  status: ClientStatus;
  joinedAt: string;
  lastSessionAt?: string;
  totalSessions: number;
}

export type ClientStatus = 'active' | 'inactive' | 'pending';
