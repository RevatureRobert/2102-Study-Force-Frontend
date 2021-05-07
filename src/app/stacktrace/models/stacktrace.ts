import { Technology } from "./technology";
import { StacktraceUser } from "./user";

export class Stacktrace {
  stacktraceId?: number;
  creator?: number;
  title?: string;
  body?: string;
  technology?: number;
  creationTime?: string;
}
