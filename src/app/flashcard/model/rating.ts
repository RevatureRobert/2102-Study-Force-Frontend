/**
 * model for difficulty rating of a question
 */
export interface Rating {
  id: number,
  flashcardId: number,
  userId: number,
  ratingScore: number
}
