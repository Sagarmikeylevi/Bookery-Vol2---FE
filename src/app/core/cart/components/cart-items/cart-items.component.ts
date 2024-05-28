import { Component, Input } from '@angular/core';
import { BOOK_DEATILS } from 'src/app/app.constants';
import { CartItems } from 'src/app/models/cartItems';

@Component({
  selector: 'app-cart-items',
  templateUrl: './cart-items.component.html',
  styleUrls: ['./cart-items.component.css'],
})
export class CartItemsComponent {
  @Input() cartItems: CartItems[] = [];
  imageURLPrefix: string = BOOK_DEATILS.imageURLPrefix;
}
