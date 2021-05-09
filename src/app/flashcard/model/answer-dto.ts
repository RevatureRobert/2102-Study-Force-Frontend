/**
 * data transfer object of the answer model
 * doesn't contain all the answer metadata that the backend needs
 */
export class AnswerDTO {
  userId: number = 0;
  flashcardId: number = 0;
  answer: string = "";
}
