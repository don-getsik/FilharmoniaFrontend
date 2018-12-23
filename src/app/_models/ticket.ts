import {Purchase} from './Purchase';
import {Concert} from './concert';
import {Seat} from './seat';
import {Discount} from './discount';

export class Ticket {
  id: number;
  purchase: Purchase;
  discount: Discount;
  concert: Concert;
  seat: Seat;
}
