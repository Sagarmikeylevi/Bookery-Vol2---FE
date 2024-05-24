import { Component } from '@angular/core';

@Component({
  selector: 'app-featured-books',
  templateUrl: './featured-books.component.html',
  styleUrls: ['./featured-books.component.css'],
})
export class FeaturedBooksComponent {
  title = 'Featured Books';

  featuredBooks = [
    {
      name: 'THE ALCHEMIST',
      img: 'https://dailytimes.com.pk/assets/uploads/2021/07/06/the-alchemist-a-graphic-novel-1017x1536.jpg',
      price: 700,
    },
    {
      name: 'THE ALCHEMIST',
      img: 'https://dailytimes.com.pk/assets/uploads/2021/07/06/the-alchemist-a-graphic-novel-1017x1536.jpg',
      price: 700,
    },
    {
      name: 'THE ALCHEMIST',
      img: 'https://dailytimes.com.pk/assets/uploads/2021/07/06/the-alchemist-a-graphic-novel-1017x1536.jpg',
      price: 700,
    },
    {
      name: 'THE ALCHEMIST',
      img: 'https://dailytimes.com.pk/assets/uploads/2021/07/06/the-alchemist-a-graphic-novel-1017x1536.jpg',
      price: 700,
    },
    {
      name: 'THE ALCHEMIST',
      img: 'https://dailytimes.com.pk/assets/uploads/2021/07/06/the-alchemist-a-graphic-novel-1017x1536.jpg',
      price: 700,
    },
    {
      name: 'THE ALCHEMIST',
      img: 'https://dailytimes.com.pk/assets/uploads/2021/07/06/the-alchemist-a-graphic-novel-1017x1536.jpg',
      price: 700,
    },
  ];
}
