import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Book } from 'src/app/models/book';
import { BookService } from 'src/app/services/books/book.service';

@Component({
  selector: 'app-show-books',
  templateUrl: './show-books.component.html',
  styleUrls: ['./show-books.component.css'],
})
export class ShowBooksComponent implements OnInit {
  section: string = '';
  query: string = '';

  constructor(
    private bookService: BookService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.queryParams.subscribe((params) => {
      this.query = params['query'];
      this.section = params['section'];
    });
  }

  get filteredBooks(): Book[] {
    return this.bookService.getFilteredBooks(this.section, this.query);
  }
}
