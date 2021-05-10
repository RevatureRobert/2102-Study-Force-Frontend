import { Stacktrace } from "./stacktrace";
import { Subscription } from "./subscription";

export interface StacktraceSubscription{
  StacktraceSubscriptionId:{
    subscription:number,
    stacktrace:number
  }
  stacktrace:Stacktrace,
  subscription:Subscription
}
