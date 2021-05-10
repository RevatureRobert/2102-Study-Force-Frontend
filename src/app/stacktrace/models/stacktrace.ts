import { Technology } from "./technology";
import { StacktraceUser } from "./user";

//export interface Stacktrace {
export class Stacktrace {
  stacktraceId?: number;
  userId?: number;
  userName?: string;
  title?: string;
  body?: string;
  technologyId?: number;
  technologyName?: string;
  creationTime?: string;
}
