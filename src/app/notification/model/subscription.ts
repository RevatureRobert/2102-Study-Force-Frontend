import { User } from "./user";

export interface Subscription{
  id:number,
  user:User,
  endpoint:string,
  key:string,
  auth:string
}
