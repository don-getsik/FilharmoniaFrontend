import {Performer} from './performer';
import {ConcertRoom} from './concertRoom';

export class Concert {
  id: number;
  performer: Performer;
  concertRoom: ConcertRoom;
  date: Date;
  title: string;
  organizationCosts: number;
  ticketCosts: number;
}
