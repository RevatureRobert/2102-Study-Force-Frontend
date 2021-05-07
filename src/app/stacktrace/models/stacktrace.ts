import { Technology } from "./technology";
import { StacktraceUser } from "./user";

export class Stacktrace {
  stacktraceId?: number;
  userId?: number;
  title?: string;
  body?: string;
  technologyId?: number;
  creationTime?: string;
}
