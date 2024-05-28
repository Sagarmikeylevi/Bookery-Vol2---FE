import { Component, OnInit } from '@angular/core';
import { CartItems } from 'src/app/models/cartItems';
import { CartService } from 'src/app/services/carts/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent implements OnInit {
  constructor(private cartService: CartService) {}
  cartItems: CartItems[] = [];

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
        this.cartItems = response.data.items.map((item: any) => ({
          _id: item._id,
          title: item.title,
          author: item.author,
          price: item.price,
          imageURL: item.imageURL,
          quantity: item.Qty,
          totalPrice: item.totalPrice,
        }));
      },

      (error) => console.log(error)
    );
  }
}
