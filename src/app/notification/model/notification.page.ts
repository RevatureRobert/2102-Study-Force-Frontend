import {Notification} from './notification';

export interface NotificationPage {
  numberOfElements: number;
  totalPages: number;
  totalElements: number;
  number: number;
  content: Notification[];
}
