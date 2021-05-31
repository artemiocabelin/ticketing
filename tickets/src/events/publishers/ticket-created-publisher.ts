import { Publisher, Subjects, TicketCreatedEvent } from '@actix123/common';

export class TicketCreatedPublisher extends Publisher<TicketCreatedEvent> {
  readonly subject = Subjects.TicketCreated;
}