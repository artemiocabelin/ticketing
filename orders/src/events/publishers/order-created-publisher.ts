import { Publisher, OrderCreatedEvent, Subjects } from '@actix123/common';

export class OrderCreatedPublisher extends Publisher<OrderCreatedEvent> {
  readonly subject = Subjects.OrderCreated
}