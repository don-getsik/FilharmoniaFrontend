import {Ticket} from '../_models/ticket';
import {CONCERTS} from './concert_mock';
import {PURCHASES} from './purchase_mock';
import {SEATS} from './seat_mock';
import {DISCOUNTS} from './discount_mock';

export const TICKETS: Ticket[] = [
  {id: 1, concert: CONCERTS[0], purchase: PURCHASES[0], seat: SEATS[5], discount: DISCOUNTS[0]},
  {id: 2, concert: CONCERTS[0], purchase: PURCHASES[0], seat: SEATS[6], discount: DISCOUNTS[1]},
  {id: 3, concert: CONCERTS[1], purchase: PURCHASES[1], seat: SEATS[14], discount: DISCOUNTS[0]}
];

