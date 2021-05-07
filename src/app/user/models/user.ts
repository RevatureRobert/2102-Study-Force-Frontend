export interface User {
  id:number;
  email:string;
  name:string;
  active:boolean;
  subscribedStacktrace:boolean;
  subscribedFlashcard:boolean;
  authority:string;
  registrationTime:Date;
  lastLogin:Date;
}
