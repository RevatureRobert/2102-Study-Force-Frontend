import { Flashcard } from "./flashcard";
import { Subscription } from "./subscription";

export interface FlashcardSubscription{
  flashcardSubscriptionId:{
    subscription:number,
    flashcard:number
  }
  flashcard:Flashcard,
  subscription:Subscription
}
