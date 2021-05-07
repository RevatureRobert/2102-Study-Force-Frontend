import { Flashcard } from "./flashcard";

export interface FlashcardPage {
  numberOfElements: number;
  totalPages: number;
  totalElements: number
  number: number;
  content: Flashcard[];
}
