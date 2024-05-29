import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CartItems } from 'src/app/models/cartItems';
import { CartService } from 'src/app/services/carts/cart.service';
import { ErrorService } from 'src/app/services/error/error.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent implements OnInit {
  constructor(
    private cartService: CartService,
    private errorService: ErrorService,
    private router: Router
  ) {}

  get checkoutState(): boolean {
    return this.cartService.getCheckoutState();
  }

  get userName(): string {
    return localStorage.getItem('username')!;
  }

  get cartItems(): CartItems[] {
    return this.cartService.getCartItems();
  }

  get userId(): string | null {
    return localStorage.getItem('user');
  }

  ngOnInit(): void {
    const userId = this.userId;

    if (!userId) {
      console.error('User not found');
      return;
    }
    this.cartService.getCartBooks(userId).subscribe(
      (response) => {
        const cartItems: CartItems[] = response.data.items.map((item: any) => ({
          _id: item._id,
          title: item.title,
          author: item.author,
          price: item.price,
          imageURL: item.imageURL,
          quantity: item.Qty,
          totalPrice: item.totalPrice,
        }));
        this.cartService.setCartItems(cartItems);
      },

      (error) => {
        this.errorService.setError('Error finding cart books');
      }
    );
  }

  onBackToHome() {
    this.cartService.setCheckoutToFalse();
    this.router.navigateByUrl('/');
  }
}
