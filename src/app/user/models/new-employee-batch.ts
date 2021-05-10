import { UserEmail } from './user-email';

export interface NewEmployeeBatch {
    batchId: number;
    name: string;
    users: string[];
}
