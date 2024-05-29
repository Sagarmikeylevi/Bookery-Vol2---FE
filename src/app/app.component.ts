import { Component, OnInit } from '@angular/core';
import { BookService } from './services/books/book.service';
import { ErrorService } from './services/error/error.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  constructor(
    private bookService: BookService,
    private errorService: ErrorService
  ) {}

  ngOnInit(): void {
    this.bookService.getAllBooks().subscribe(
      (response) => {
        const { books } = response.data;
        this.bookService.setAllBooks(books);
      },
      (error) => {
        this.errorService.setError('Something went wrong');
      }
    );
  }

  // check error state
  get isError(): { state: boolean; message: string } {
    return this.errorService.getError();
  }
}
