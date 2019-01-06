import {Transaction} from './transaction';

export class MonthSummary {
  beginDate: string;
  endDate: string;
  totalExpenses: number;
  totalEarning: number;
  balance: number;
  transactions: Transaction[];
}
