import { Answer } from "./answer";

/**
 * model for implementing pagination on the array of answers
 */
export interface AnswerPageable {
  content: Answer[];
}
