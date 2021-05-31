import { Subjects, Publisher, OrderCancelledEvent } from '@actix123/common';

export class OrderCancelledPublisher extends Publisher<OrderCancelledEvent> {
  readonly subject = Subjects.OrderCancelled;
}