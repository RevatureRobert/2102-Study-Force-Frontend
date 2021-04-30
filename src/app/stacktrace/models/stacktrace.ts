import { Technology } from "./technology";

export interface Stacktrace {
  stacktraceId: number;
  // creator: User;
  title: string;
  body: string;
  technology: Technology;
  creationTime: string;
}
