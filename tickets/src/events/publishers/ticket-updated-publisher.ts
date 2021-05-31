import { Publisher, Subjects, TicketUpdatedEvent } from '@actix123/common';
import { natsWrapper } from '../../nats-wrapper';

export class TicketUpdatedPublisher extends Publisher<TicketUpdatedEvent> {
  readonly subject = Subjects.TicketUpdated;
}

// new TicketUpdatedPublisher(natsWrapper.client).publish({

// });