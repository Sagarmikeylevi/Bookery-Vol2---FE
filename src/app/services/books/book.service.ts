import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, retry } from 'rxjs';
import { API_ENDPOINTS } from 'src/app/app.constants';
import { Book } from 'src/app/models/book';

@Injectable({
  providedIn: 'root',
})
export class BookService {
  books: Book[] = [];

  constructor(private http: HttpClient) {}

  setAllBooks(books: Book[]): void {
    this.books = books;
  }

  getFilteredBooks(section: string, query: string = ''): Book[] {
    if (section === 'Featured Books') {
      return this.books.filter((book) => book.featured === true);
    }
    if (section === 'Best Seller') {
      return this.books.filter((book) => book.bestSeller === true);
    }

    if (section === 'Author') {
      return this.books.filter((book) => book.author === query);
    }

    if (section === 'Genres') {
      return this.books.filter((book) => book.genres.includes(query));
    }

    return this.books;
  }

  getAllBooks(): Observable<any> {
    return this.http.get(API_ENDPOINTS.GET_ALLBOOKS);
  }
}
