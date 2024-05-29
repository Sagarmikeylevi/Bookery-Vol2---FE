import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { API_ENDPOINTS } from 'src/app/app.constants';
import { CartItems } from 'src/app/models/cartItems';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  private cartItems: CartItems[] = [];
  private checkoutState: boolean = false;
  constructor(private http: HttpClient) {}

  setCartItems(cartItems: CartItems[]): void {
    this.cartItems = cartItems;
  }

  getCartItems(): CartItems[] {
    return this.cartItems;
  }

  getCheckoutState(): boolean {
    return this.checkoutState;
  }

  setCheckoutToFalse(): void {
    this.checkoutState = false;
  }

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
    this.cartItems = this.cartItems.filter((item) => item._id !== cartId);
    return this.http.delete(
      `${API_ENDPOINTS.DELETE_CART_ITEMS_BY_ID}/${cartId}/${userId}`
    );
  }

  checkout(userId: string): Observable<any> {
    this.checkoutState = true;
    this.cartItems = [];
    return this.http.delete(`${API_ENDPOINTS.CHECKOUT}/${userId}`);
  }
}
