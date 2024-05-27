import { Component, Input } from '@angular/core';
import { BookService } from 'src/app/services/books/book.service';

@Component({
  selector: 'app-show-books-header',
  templateUrl: './show-books-header.component.html',
  styleUrls: ['./show-books-header.component.css'],
})
export class ShowBooksHeaderComponent {
  @Input() section: string = '';
  searchQuery: string = '';
  constructor(private bookService: BookService) {}

  onSearch() {
    setTimeout(() => {
      this.bookService.searchedBooks(this.searchQuery);
    }, 300);
  }
}
