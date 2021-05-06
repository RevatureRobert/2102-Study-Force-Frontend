export interface Flashcard {
  id?: number;
  creatorId?: number;
  topicName?: string;
  question: string;
  difficulty?: number;
  isResolved: boolean;
}
