import { Component, OnInit } from '@angular/core';
import { BookService } from './services/books/book.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  constructor(private bookService: BookService) {}

  ngOnInit(): void {
    this.bookService.getAllBooks().subscribe(
      (response) => {
        const { books } = response.data;
        this.bookService.setAllBooks(books);
      },
      (error) => console.log(error)
    );
  }
}
