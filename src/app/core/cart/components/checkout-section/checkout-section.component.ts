import { Component, Input } from '@angular/core';
import { CartItems } from 'src/app/models/cartItems';

@Component({
  selector: 'app-checkout-section',
  templateUrl: './checkout-section.component.html',
  styleUrls: ['./checkout-section.component.css'],
})
export class CheckoutSectionComponent {
  @Input() cartItems: CartItems[] = [];

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
}
