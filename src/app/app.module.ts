import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './shared/components/navbar/navbar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { HeroSectionComponent } from './home/components/hero-section/hero-section.component';
import { HomeComponent } from './home/home.component';
import { AuthorSectionComponent } from './home/components/author-section/author-section.component';
import { MatCardModule } from '@angular/material/card';
import { ScrollableComponentComponent } from './shared/components/scrollable-component/scrollable-component.component';
import { GenresSectionComponent } from './home/components/genres-section/genres-section.component';
import { FeaturedBooksComponent } from './home/components/featured-books/featured-books.component';
import { AuthorCardComponent } from './shared/components/author-card/author-card.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HeroSectionComponent,
    HomeComponent,
    AuthorSectionComponent,
    ScrollableComponentComponent,
    GenresSectionComponent,
    FeaturedBooksComponent,
    AuthorCardComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCardModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
