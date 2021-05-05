import { Technology } from "./technology";
import { StacktraceUser } from "./user";

export interface Stacktrace {
  stacktraceId?: number;
  creator: StacktraceUser;
  title: string;
  body: string;
  technology?: Technology;
  creationTime?: string;
}
