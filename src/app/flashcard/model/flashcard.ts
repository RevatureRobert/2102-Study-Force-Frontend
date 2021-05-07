export interface Flashcard {
  flashcardId?: number;
  creatorId?: number;
  topicName?: string;
  question: string;
  difficulty?: number;
  isResolved: boolean;
}
