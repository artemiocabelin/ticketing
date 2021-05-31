import { Subjects, Publisher, PaymentCreatedEvent } from '@actix123/common';

export class PaymentCreatedPublisher extends Publisher<PaymentCreatedEvent> {
  readonly subject = Subjects.PaymentCreated;
}