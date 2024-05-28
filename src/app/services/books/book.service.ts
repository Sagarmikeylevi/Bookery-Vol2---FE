import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { API_ENDPOINTS } from 'src/app/app.constants';
import { Book } from 'src/app/models/book';

@Injectable({
  providedIn: 'root',
})
export class BookService {
  private books: Book[] = [];
  private filteredBooks: Book[] = [];

  constructor(private http: HttpClient) {}

  setAllBooks(books: Book[]): void {
    this.books = books;
    this.filteredBooks = books;
  }

  searchedBooks(query: string): void {
    if (!query) {
      this.filteredBooks = this.books;
    } else {
      this.filteredBooks = this.books.filter((book) =>
        book.title.toLowerCase().includes(query.toLowerCase())
      );
    }
  }

  getOrderedBook(bookId: string): Book[] {
    return this.filteredBooks.filter((book) => book._id === bookId);
  }

  getFilteredBooks(section: string, query: string = ''): Book[] {
    let filtered = this.filteredBooks;

    switch (section) {
      case 'Featured Books':
        filtered = filtered.filter((book) => book.featured === true);
        break;
      case 'Best Seller':
        filtered = filtered.filter((book) => book.bestSeller === true);
        break;
      case 'Author':
        filtered = filtered.filter(
          (book) => book.author.toLowerCase() === query.toLowerCase()
        );
        break;
      case 'Genres':
        filtered = filtered.filter((book) =>
          book.genres.some(
            (genre) => genre.toLowerCase() === query.toLowerCase()
          )
        );
        break;
      default:
        break;
    }

    return filtered;
  }

  getAllBooks(): Observable<any> {
    return this.http.get(API_ENDPOINTS.GET_ALLBOOKS);
  }
}
