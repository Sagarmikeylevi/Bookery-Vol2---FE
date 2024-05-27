import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
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

  getFeaturedBooks(): Book[] {
    const featuredBooks = this.books.filter((book) => book.featured === true);
    return featuredBooks;
  }

  getAllBooks(): Observable<any> {
    return this.http.get(API_ENDPOINTS.GET_ALLBOOKS);
  }
}
