export interface Flashcard {
  id?: number;
  creator?: number;
  topic?: number;
  question: string;
  questionDifficultyTotal?: number;
  questionDifficultyAverage?: number;
  createdTime?: string;
  resolutionTime?: string;
}
