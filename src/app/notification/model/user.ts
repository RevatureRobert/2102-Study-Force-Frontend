import { Authority } from "./authority";

export interface User{
  userId:number,
  email:string,
  name:string,
  authority:Authority,
  registrationTime:Date,
  lastLogin:Date,
  active:boolean,
  enabled:boolean,
  subscribedStacktrace:boolean,
  subscribedFlashcard:boolean,
  username:string,
  authorities:Authority[],
  accountNonLocked:boolean,
  credentialsNonExpired:boolean,
  accountNonExpired:boolean
}
