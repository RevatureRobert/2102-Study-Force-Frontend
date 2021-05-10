import { Topic } from "./topic";
import { User } from "./user";

export interface Flashcard{
  id:number,
  creator:User,
  topic:Topic,
  question:string,
  questionDifficultyTotal:number,
  questionDifficultyAverage:number,
  createdTime:Date,
  resolutionTime:Date,
  resolved:boolean
}
