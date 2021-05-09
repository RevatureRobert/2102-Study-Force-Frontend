/**
 * model for flashcard answer
 * associated with its question by flashcardId
 */
export interface Answer {
  answerId: number;
  creatorId: number;
  flashcardId: number;
  answerText: string;
  answerScore: number;
  selectedAnswer: boolean;
  trainerSelected: boolean;
  creationTime: string;
  resolutionTime: string;
}
