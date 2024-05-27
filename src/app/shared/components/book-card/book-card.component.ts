import { Component } from '@angular/core';
import { BOOK_DEATILS } from 'src/app/app.constants';
import { Book } from 'src/app/models/book';
import { BookService } from 'src/app/services/books/book.service';

@Component({
  selector: 'app-book-card',
  templateUrl: './book-card.component.html',
  styleUrls: ['./book-card.component.css'],
})
export class BookCardComponent {
  constructor(private bookService: BookService) {}
  imageURLPrefix: string = BOOK_DEATILS.imageURLPrefix;

  get featuredBooks(): Book[] {
    return this.bookService.getFeaturedBooks();
  }
}
