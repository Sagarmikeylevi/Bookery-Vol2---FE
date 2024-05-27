import { Component } from '@angular/core';
import { GENRES } from 'src/app/app.constants';

@Component({
  selector: 'app-genre-card',
  templateUrl: './genre-card.component.html',
  styleUrls: ['./genre-card.component.css'],
})
export class GenreCardComponent {
  genres = GENRES;
}
