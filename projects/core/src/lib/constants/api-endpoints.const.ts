export const API_ENDPOINTS = {
  AUTH: {
    LOGIN: '/auth/login',
    REGISTER: '/auth/register',
    LOGOUT: '/auth/logout',
    REFRESH: '/auth/refresh',
    GOOGLE: '/auth/google',
    FACEBOOK: '/auth/facebook',
  },
  USERS: {
    BASE: '/users',
    ME: '/users/me',
  },
  CLIENTS: {
    BASE: '/clients',
  },
  SESSIONS: {
    BASE: '/sessions',
  },
} as const;
