import { Component, Input } from '@angular/core';
import { BOOK_DEATILS } from 'src/app/app.constants';
import { CartItems } from 'src/app/models/cartItems';
import { CartService } from 'src/app/services/carts/cart.service';
import { ErrorService } from 'src/app/services/error/error.service';

@Component({
  selector: 'app-cart-items',
  templateUrl: './cart-items.component.html',
  styleUrls: ['./cart-items.component.css'],
})
export class CartItemsComponent {
  @Input() cartItems: CartItems[] = [];
  imageURLPrefix: string = BOOK_DEATILS.imageURLPrefix;

  constructor(
    private cartService: CartService,
    private errorService: ErrorService
  ) {}

  get userId(): string | null {
    return localStorage.getItem('user');
  }

  onDelete(itemId: string | undefined) {
    const userId = this.userId;

    if (!userId) {
      console.error('User not found');
      return;
    }
    this.cartService.deleteCartItemById(itemId!, userId).subscribe(
      (response) => {
        console.log(response);
      },
      (error) => {
        this.errorService.setError('Error deleting cart books');
      }
    );
  }
}
