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

  getCartBooks(userId: string): Observable<any> {
    return this.http.get(`${API_ENDPOINTS.GET_CART_ITEMS}/${userId}`);
  }

  deleteCartItemById(cartId: string, userId: string): Observable<any> {
    return this.http.delete(
      `${API_ENDPOINTS.DELETE_CART_ITEMS_BY_ID}/${cartId}/${userId}`
    );
  }

  checkout(userId: string): Observable<any> {
    return this.http.delete(`${API_ENDPOINTS.CHECKOUT}/${userId}`);
  }
}
