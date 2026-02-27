import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {
  FullProfileResponse,
  UpdateFullProfilePayload,
  UserProfile,
  UpdateUserProfilePayload,
  InstructorProfile,
  UpdateInstructorProfilePayload,
  CreateInstructorProfilePayload,
} from '../../models/profile/profile.model';
import { environment } from '../../../environments/environment';
import { API_ENDPOINTS } from '../../constants/api-endpoints.const';

@Injectable({
  providedIn: 'root',
})
export class ProfileService {
  private http = inject(HttpClient);
  private baseUrl = `${environment.apiUrl}${API_ENDPOINTS.PROFILE.BASE}`;

  getFullProfile(): Observable<FullProfileResponse> {
    return this.http.get<FullProfileResponse>(`${this.baseUrl}/me`);
  }

  updateFullProfile(payload: UpdateFullProfilePayload): Observable<FullProfileResponse> {
    return this.http.patch<FullProfileResponse>(`${this.baseUrl}/me`, payload);
  }

  getUserProfile(): Observable<UserProfile> {
    return this.http.get<UserProfile>(`${this.baseUrl}/user-profile`);
  }

  updateUserProfile(payload: UpdateUserProfilePayload): Observable<UserProfile> {
    return this.http.patch<UserProfile>(`${this.baseUrl}/user-profile`, payload);
  }

  createInstructorProfile(payload: CreateInstructorProfilePayload): Observable<InstructorProfile> {
    return this.http.post<InstructorProfile>(`${this.baseUrl}/instructor`, payload);
  }

  getInstructorProfile(): Observable<InstructorProfile> {
    return this.http.get<InstructorProfile>(`${this.baseUrl}/instructor`);
  }

  updateInstructorProfile(payload: UpdateInstructorProfilePayload): Observable<InstructorProfile> {
    return this.http.patch<InstructorProfile>(`${this.baseUrl}/instructor`, payload);
  }
}
