import { Flashcard } from "./flashcard";

/**
 * model for flashcard pages
 */
export interface FlashcardPage {
  numberOfElements: number;
  totalPages: number;
  totalElements: number
  number: number;
  content: Flashcard[];
}
