import { Concert } from '../_models/concert';
import {PERFORMERS} from './performer_mock';
import {CONCERTROOM} from './concertRoom_mock';

export const CONCERTS: Concert[] = [
  {id: 1, title: 'Calineczka', performer: PERFORMERS[0], concertRoom: CONCERTROOM,
    date: new Date ('11/05/2016'), organizationCosts: 10000, ticketCosts: 20},
  {id: 2, title: 'Dziadek do orzechów', performer: PERFORMERS[1], concertRoom: CONCERTROOM,
    date: new Date('08/23/2017'), organizationCosts: 30000, ticketCosts: 60}
];
