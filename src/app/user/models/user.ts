export enum Authority {
  User = 0,
  Admin = 1,
  SuperAdmin = 2
}

export interface User {
    id: number;
    email: string;
    password: string;
    name: string;
    isActive: boolean;
    isSubscribedFlashcard: boolean;
    isSubscribedStacktrace: boolean;
    authority: Authority;
    registrationTime: string;
    lastLogin: string;

}
