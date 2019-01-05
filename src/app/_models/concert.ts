import {PieceOfMusic} from './pieceOfMusic';

export class Concert {
  idConcert: number;
  concertPerformers: string;
  date: string;
  concertTitle: string;
  additionalOrganisationCosts: number;
  ticketCost: number;
  concertRoomName: string;
  concertRoomAddress: string;
  repertoire: PieceOfMusic[];
  approved: boolean;
}
