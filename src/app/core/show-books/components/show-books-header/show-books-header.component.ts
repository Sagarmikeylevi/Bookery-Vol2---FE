import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-show-books-header',
  templateUrl: './show-books-header.component.html',
  styleUrls: ['./show-books-header.component.css'],
})
export class ShowBooksHeaderComponent {
  @Input() section: string = '';
}
