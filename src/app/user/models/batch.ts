import { User } from './user';

export interface Batch {
  batchId: number;
  name: string;
  instructors: User[];
  users: User[];
  creationTime: Date;
}
