export interface Notification {
  id: number;
  body: string;
  read: boolean;
  timeToLive: Date;
  createdTime: Date;
  featureArea: string;
  userId: number;
  referenceId: number;
}
