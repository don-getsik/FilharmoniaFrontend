import {Performers} from './performers';
import {ConcertRoom} from './concertRoom';

export class Concert {
  id: number;
  performers: Performers;
  concertRoom: ConcertRoom;
  date: Date;
  title: string;
  organizationCosts: number;
  ticketCosts: number;
}
