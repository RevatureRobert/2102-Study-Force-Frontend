import { UserEmail } from '../models/user-email';

export interface NewBatch {
  id: number;
  name: string;
  instructors: UserEmail[];
  users: UserEmail[];
}
