import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-author-section',
  templateUrl: './author-section.component.html',
  styleUrls: ['./author-section.component.css'],
})
export class AuthorSectionComponent {
  @ViewChild('scrollContainer') scrollContainer!: ElementRef;
  clickedButton: string = 'left';
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

  scrollLeft(): void {
    this.clickedButton = 'left';
    this.scrollContainer.nativeElement.scrollBy({
      left: -260,
      behavior: 'smooth',
    });
  }

  scrollRight(): void {
    this.clickedButton = 'right';
    this.scrollContainer.nativeElement.scrollBy({
      left: 260,
      behavior: 'smooth',
    });
  }
}
