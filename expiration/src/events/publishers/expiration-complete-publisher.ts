import { Subjects, Publisher, ExpirationCompleteEvent } from '@actix123/common';

export class ExpirationCompletePublisher extends Publisher<ExpirationCompleteEvent> {
  readonly subject = Subjects.ExpirationComplete;
}