import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { API_ENDPOINTS } from 'src/app/app.constants';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  constructor(private http: HttpClient) {}

  addToCart(
    orderDetails: { bookId: string | undefined; qty: number },
    userId: string
  ): Observable<any> {
    return this.http.post(
      `${API_ENDPOINTS.ADD_TO_CART}/${userId}`,
      orderDetails
    );
  }
}
