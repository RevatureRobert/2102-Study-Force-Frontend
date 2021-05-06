export interface User {
  id:number;
  email:string;
  name:string;
  isActive:boolean;
  isSubscribedFlashcard:boolean;
  isSubscribedStacktrace:boolean;
  authority:string;
  registrationTime:number;
  lastLogin:number;
}
