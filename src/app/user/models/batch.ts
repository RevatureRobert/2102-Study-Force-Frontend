import { User } from './user';

export interface Batch {
    id: number;
    name: string;
    instructors: User[];
    users: User[];
    creationTime: string;
}