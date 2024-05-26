import { Component } from '@angular/core';

@Component({
  selector: 'app-author-card',
  templateUrl: './author-card.component.html',
  styleUrls: ['./author-card.component.css'],
})
export class AuthorCardComponent {
  authors = [
    {
      name: 'William Shakespeare',
      img: 'https://upload.wikimedia.org/wikipedia/commons/3/31/William_Shakespeare_1609.jpg',
    },
    {
      name: 'Jane Austen',
      img: 'https://upload.wikimedia.org/wikipedia/commons/3/31/William_Shakespeare_1609.jpg',
    },
    {
      name: 'Mark Twain',
      img: 'https://upload.wikimedia.org/wikipedia/commons/3/31/William_Shakespeare_1609.jpg',
    },
    {
      name: 'Mark Twain',
      img: 'https://upload.wikimedia.org/wikipedia/commons/3/31/William_Shakespeare_1609.jpg',
    },
    {
      name: 'Mark Twain',
      img: 'https://upload.wikimedia.org/wikipedia/commons/3/31/William_Shakespeare_1609.jpg',
    },
    {
      name: 'Mark Twain',
      img: 'https://upload.wikimedia.org/wikipedia/commons/3/31/William_Shakespeare_1609.jpg',
    },
  ];
}
