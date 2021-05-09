export interface Solution {
  solutionId: number;
  stackTraceId: number;
  userId: number;
  userName: string;
  body: string;
  adminSelected: boolean;
  userSelected: boolean;
  creationTime?: string;
  totalVote: number;
}
