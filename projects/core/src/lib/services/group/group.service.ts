import { Injectable, inject } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import {
  Group,
  GroupMember,
  GroupListResponse,
  GroupMemberListResponse,
  CreateGroupPayload,
  UpdateGroupPayload,
} from '../../models/group/group.model';
import { environment } from '../../../environments/environment';
import { API_ENDPOINTS } from '../../constants/api-endpoints.const';

@Injectable({
  providedIn: 'root',
})
export class GroupService {
  private http = inject(HttpClient);
  private baseUrl = `${environment.apiUrl}${API_ENDPOINTS.GROUPS.BASE}`;

  getMyGroups(): Observable<Group[]> {
    return this.http.get<Group[]>(this.baseUrl);
  }

  getById(groupId: string): Observable<Group> {
    return this.http.get<Group>(`${this.baseUrl}/${groupId}`);
  }

  create(payload: CreateGroupPayload): Observable<Group> {
    return this.http.post<Group>(this.baseUrl, payload);
  }

  update(groupId: string, payload: UpdateGroupPayload): Observable<Group> {
    return this.http.patch<Group>(`${this.baseUrl}/${groupId}`, payload);
  }

  delete(groupId: string): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/${groupId}`);
  }

  getMembers(groupId: string, page = 1, limit = 20): Observable<GroupMemberListResponse> {
    const params = new HttpParams()
      .set('page', page.toString())
      .set('limit', limit.toString());
    return this.http.get<GroupMemberListResponse>(`${this.baseUrl}/${groupId}/members`, { params });
  }

  removeMember(groupId: string, userId: string): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/${groupId}/members/${userId}`);
  }

  leaveGroup(groupId: string): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/${groupId}/members/me`);
  }

  selfJoin(groupId: string): Observable<GroupMember> {
    return this.http.post<GroupMember>(`${this.baseUrl}/${groupId}/join`, {});
  }

  generateJoinLink(groupId: string): Observable<{ message: string; token: string; expiresAt: string }> {
    return this.http.post<{ message: string; token: string; expiresAt: string }>(`${this.baseUrl}/${groupId}/join-link`, {});
  }

  revokeJoinLink(groupId: string): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/${groupId}/join-link`);
  }

  joinViaLink(token: string): Observable<GroupMember> {
    return this.http.post<GroupMember>(`${this.baseUrl}/join/${token}`, {});
  }
}
