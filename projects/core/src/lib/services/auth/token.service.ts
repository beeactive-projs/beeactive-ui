import { Injectable } from '@angular/core';
import { User } from '../../models/user/user.model';
import { STORAGE_KEYS } from '../../constants/storage-keys.const';

@Injectable({
  providedIn: 'root',
})
export class TokenService {
  setAccessToken(token: string): void {
    localStorage.setItem(STORAGE_KEYS.ACCESS_TOKEN, token);
  }

  getAccessToken(): string | null {
    return localStorage.getItem(STORAGE_KEYS.ACCESS_TOKEN);
  }

  setRefreshToken(token: string): void {
    localStorage.setItem(STORAGE_KEYS.REFRESH_TOKEN, token);
  }

  getRefreshToken(): string | null {
    return localStorage.getItem(STORAGE_KEYS.REFRESH_TOKEN);
  }

  setUser(user: User): void {
    localStorage.setItem(STORAGE_KEYS.USER, JSON.stringify(user));
  }

  getUser(): User | null {
    const userJson = localStorage.getItem(STORAGE_KEYS.USER);
    return userJson ? JSON.parse(userJson) : null;
  }

  setRoles(roles: string[]): void {
    localStorage.setItem(STORAGE_KEYS.ROLES, JSON.stringify(roles));
  }

  getRoles(): string[] {
    const rolesJson = localStorage.getItem(STORAGE_KEYS.ROLES);
    return rolesJson ? JSON.parse(rolesJson) : [];
  }

  setPermissions(permissions: string[]): void {
    localStorage.setItem(STORAGE_KEYS.PERMISSIONS, JSON.stringify(permissions));
  }

  getPermissions(): string[] {
    const permissionsJson = localStorage.getItem(STORAGE_KEYS.PERMISSIONS);
    return permissionsJson ? JSON.parse(permissionsJson) : [];
  }

  clearTokens(): void {
    localStorage.removeItem(STORAGE_KEYS.ACCESS_TOKEN);
    localStorage.removeItem(STORAGE_KEYS.REFRESH_TOKEN);
    localStorage.removeItem(STORAGE_KEYS.USER);
    localStorage.removeItem(STORAGE_KEYS.ROLES);
    localStorage.removeItem(STORAGE_KEYS.PERMISSIONS);
  }
}
