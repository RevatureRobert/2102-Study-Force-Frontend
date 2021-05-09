/**
 * model for a upvote or downvote on each flashcard answer
 */
export interface Vote {
  answerId: number,
  userId: number,
  value: number
}
