import { Injectable } from '@angular/core';
import {Discount} from '../_models/discount';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DiscountService {

  constructor(private http: HttpClient) {
  }

  editDiscount(d: Discount) {
    return this.http.post<Discount[]>('http://localhost:8081/admin/discount',d);
  }

  deleteDiscount (id: string) {
    return this.http.delete<Discount[]>('http://localhost:8081/admin/discount/'+id);
  }

  getDiscounts () {
    return this.http.get<Discount[]>('http://localhost:8081/discount');
  }
}
