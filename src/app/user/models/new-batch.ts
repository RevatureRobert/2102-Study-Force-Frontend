import { UserEmail } from '../models/user-email';

export interface NewBatch {
    batchId: number;
    name: string;
    instructors: string[];
    users: string[];
}
