import { Component } from '@angular/core';

@Component({
  selector: 'app-genres-section',
  templateUrl: './genres-section.component.html',
  styleUrls: ['./genres-section.component.css'],
})
export class GenresSectionComponent {
  title = 'Genres';
  genres = [
    {
      name: 'Horror',
      img: 'assets/horror1.jpg',
    },
    {
      name: 'Horror',
      img: 'assets/horror1.jpg',
    },
    {
      name: 'Horror',
      img: 'assets/horror1.jpg',
    },
    {
      name: 'Horror',
      img: 'assets/horror1.jpg',
    },
    {
      name: 'Horror',
      img: 'assets/horror1.jpg',
    },
    {
      name: 'Horror',
      img: 'assets/horror1.jpg',
    },
  ];
}
