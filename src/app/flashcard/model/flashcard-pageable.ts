import { Flashcard } from "./flashcard";

/**
 * model for implementing pagination on the array of flashcards
 */
export interface FlashcardPageable {
  content: Flashcard[];
}
