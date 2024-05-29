import { Component, Input } from '@angular/core';
import { CartItems } from 'src/app/models/cartItems';
import { CartService } from 'src/app/services/carts/cart.service';

@Component({
  selector: 'app-checkout-section',
  templateUrl: './checkout-section.component.html',
  styleUrls: ['./checkout-section.component.css'],
})
export class CheckoutSectionComponent {
  @Input() cartItems: CartItems[] = [];

  constructor(private cartService: CartService) {}

  get checkoutPrice(): {
    totalPrice: number;
    discount: number;
    shipment: number;
  } {
    const totalPrice = this.cartItems.reduce(
      (acc: number, curr: CartItems): number => {
        return acc + curr.totalPrice;
      },
      0
    );

    return {
      totalPrice,
      discount: totalPrice * 0.05,
      shipment: totalPrice * 0.1,
    };
  }

  get userId(): string | null {
    return localStorage.getItem('user');
  }

  onCheckout() {
    const userId = this.userId;

    if (!userId) {
      console.error('User not found');
      return;
    }

    this.cartService.checkout(userId).subscribe(
      (response) => console.log(response),
      (error) => console.log(error)
    );
  }
}
