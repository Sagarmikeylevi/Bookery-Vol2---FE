import { Component, Input } from '@angular/core';
import { BOOK_DEATILS } from 'src/app/app.constants';

import { Book } from 'src/app/models/book';
import { CartService } from 'src/app/services/carts/cart.service';

@Component({
  selector: 'app-order-main',
  templateUrl: './order-main.component.html',
  styleUrls: ['./order-main.component.css'],
})
export class OrderMainComponent {
  @Input() book: Book[] = [];
  imageURLPrefix = BOOK_DEATILS.imageURLPrefix;
  bookCount = 1;

  constructor(private cartService: CartService) {}

  get userId(): string | null {
    return localStorage.getItem('user');
  }

  handleAddToCart() {
    const userId = this.userId;
    const book = this.book[0];

    if (!userId) {
      console.error('User not found');
      return;
    }

    if (!book) {
      console.error('Book not found');
      return;
    }

    const { _id: bookId } = book;
    const qty = this.bookCount;

    this.cartService.addToCart({ bookId, qty }, userId).subscribe(
      (response) => {
        console.log('Book added to cart:', response);
      },
      (error) => {
        console.error('Failed to add book to cart:', error);
      }
    );
  }

  minusBookCount() {
    this.bookCount = Math.max(1, this.bookCount - 1);
  }

  plusBookCount() {
    const maxQty = this.book[0]?.totalQty || 0;
    this.bookCount = Math.min(this.bookCount + 1, maxQty);
  }
}
