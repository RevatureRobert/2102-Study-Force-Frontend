import { Technology } from "./technology";

export interface Stacktrace {
  stacktraceId: number;
  userId: number;
  userName: string;
  title: string;
  body: string;
  technology: Technology;
  technologyName: string;
  creationTime: string;
}
