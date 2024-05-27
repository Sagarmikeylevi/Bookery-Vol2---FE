import { Component } from '@angular/core';
import { BOOK_DEATILS } from 'src/app/app.constants';
import { Book } from 'src/app/models/book';
import { BookService } from 'src/app/services/books/book.service';

@Component({
  selector: 'app-featured-books-card',
  templateUrl: './featured-books-card.component.html',
  styleUrls: ['./featured-books-card.component.css'],
})
export class FeaturedBooksCardComponent {
  imageURLPrefix = BOOK_DEATILS.imageURLPrefix;
  constructor(private bookService: BookService) {}

  get featuredBooks(): Book[] {
    return this.bookService.getFilteredBooks('Featured Books');
  }
}
