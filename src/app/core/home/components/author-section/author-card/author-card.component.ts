import { Component } from '@angular/core';
import { AUTHORS } from 'src/app/app.constants';

@Component({
  selector: 'app-author-card',
  templateUrl: './author-card.component.html',
  styleUrls: ['./author-card.component.css'],
})
export class AuthorCardComponent {
  authors = AUTHORS;
}
