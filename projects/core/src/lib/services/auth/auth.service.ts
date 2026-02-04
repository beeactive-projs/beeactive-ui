import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject, tap } from 'rxjs';
import { LoginRequest } from '../../models/auth/login.model';
import { RegisterRequest } from '../../models/auth/register.model';
import { AuthResponse } from '../../models/auth/auth-response.model';
import { User } from '../../models/user/user.model';
import { TokenService } from './token.service';
import { API_ENDPOINTS } from '../../constants/api-endpoints.const';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private http = inject(HttpClient);
  private tokenService = inject(TokenService);

  private currentUserSubject = new BehaviorSubject<User | null>(null);
  public currentUser$ = this.currentUserSubject.asObservable();

  private isAuthenticatedSubject = new BehaviorSubject<boolean>(false);
  public isAuthenticated$ = this.isAuthenticatedSubject.asObservable();

  constructor() {
    this.checkAuthStatus();
  }

  private checkAuthStatus(): void {
    const token = this.tokenService.getAccessToken();
    const user = this.tokenService.getUser();

    if (token && user) {
      this.currentUserSubject.next(user);
      this.isAuthenticatedSubject.next(true);
    }
  }

  login(credentials: LoginRequest): Observable<AuthResponse> {
    return this.http
      .post<AuthResponse>(`${environment.apiUrl}${API_ENDPOINTS.AUTH.LOGIN}`, credentials)
      .pipe(tap((response) => this.handleAuthResponse(response)));
  }

  register(data: RegisterRequest): Observable<AuthResponse> {
    return this.http
      .post<AuthResponse>(`${environment.apiUrl}${API_ENDPOINTS.AUTH.REGISTER}`, data)
      .pipe(tap((response) => this.handleAuthResponse(response)));
  }

  logout(): Observable<void> {
    return this.http
      .post<void>(`${environment.apiUrl}${API_ENDPOINTS.AUTH.LOGOUT}`, {})
      .pipe(tap(() => this.clearAuthData()));
  }

  getCurrentUser(): User | null {
    return this.currentUserSubject.value;
  }

  isAuthenticated(): boolean {
    return this.isAuthenticatedSubject.value;
  }

  hasRole(role: string): boolean {
    const roles = this.tokenService.getRoles();
    return roles.includes(role);
  }

  hasPermission(permission: string): boolean {
    const permissions = this.tokenService.getPermissions();
    return permissions.includes(permission);
  }

  private handleAuthResponse(response: AuthResponse): void {
    this.tokenService.setAccessToken(response.accessToken);
    this.tokenService.setRefreshToken(response.refreshToken);
    this.tokenService.setUser(response.user);
    this.tokenService.setRoles(response.roles);
    this.tokenService.setPermissions(response.permissions);

    this.currentUserSubject.next(response.user);
    this.isAuthenticatedSubject.next(true);
  }

  private clearAuthData(): void {
    this.tokenService.clearTokens();
    this.currentUserSubject.next(null);
    this.isAuthenticatedSubject.next(false);
  }
}
