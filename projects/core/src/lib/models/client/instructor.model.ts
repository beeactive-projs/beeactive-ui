export interface Instructor {
  name: string;
  email: string;
}

import { PaginatedResponse } from '../common/pagination.model';

export type InstructorListResponse = PaginatedResponse<Instructor>;

export interface InstructorSearchResult {
  id: string;
  name: string;
  email: string;
}
