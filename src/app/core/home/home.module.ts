import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HeroSectionComponent } from './components/hero-section/hero-section.component';
import { HomeComponent } from './home.component';
import { AuthorSectionComponent } from './components/author-section/author-section.component';
import { ScrollableComponentComponent } from 'src/app/shared/components/scrollable-component/scrollable-component.component';
import { GenresSectionComponent } from './components/genres-section/genres-section.component';
import { FeaturedBooksComponent } from './components/featured-books/featured-books.component';
import { AuthorCardComponent } from './components/author-section/author-card/author-card.component';
import { FeaturedBooksCardComponent } from './components/featured-books/featured-books-card/featured-books-card.component';
import { GenreCardComponent } from './components/genres-section/genre-card/genre-card.component';
import { NewsletterComponent } from './components/newsletter/newsletter.component';
import { FooterComponent } from 'src/app/shared/components/footer/footer.component';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { LoadingSectionComponent } from 'src/app/shared/components/loading-section/loading-section.component';
import { ModuleModule } from 'src/app/shared/module/module.module';

@NgModule({
  declarations: [
    HeroSectionComponent,
    HomeComponent,
    AuthorSectionComponent,
    ScrollableComponentComponent,
    GenresSectionComponent,
    FeaturedBooksComponent,
    AuthorCardComponent,
    GenreCardComponent,
    NewsletterComponent,
    FeaturedBooksCardComponent,
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    ModuleModule,
    MatButtonModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,
    MatIconModule,
  ],
})
export class HomeModule {}
