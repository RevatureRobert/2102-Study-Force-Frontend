export interface User {
  userId: number;
  email: string;
  name: string;
  active: boolean;
  subscribedStacktrace: boolean;
  subscribedFlashcard: boolean;
  authority: string;
  registrationTime?: Date;
  lastLogin?: Date;
}
