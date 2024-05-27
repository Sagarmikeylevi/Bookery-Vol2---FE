import { Component, Input } from '@angular/core';
import { BOOK_DEATILS } from 'src/app/app.constants';
import { Book } from 'src/app/models/book';

@Component({
  selector: 'app-books-section',
  templateUrl: './books-section.component.html',
  styleUrls: ['./books-section.component.css'],
})
export class BooksSectionComponent {
  @Input() filteredBooks: Book[] = [];
  imageURLPrefix = BOOK_DEATILS.imageURLPrefix;
}
