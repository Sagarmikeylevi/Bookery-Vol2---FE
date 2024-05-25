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
import { AuthorCardComponent } from './home/components/author-section/author-card/author-card.component';
import { GenreCardComponent } from './home/components/genres-section/genre-card/genre-card.component';
import { BookCardComponent } from './shared/components/book-card/book-card.component';
import { NewsletterComponent } from './home/components/newsletter/newsletter.component';
import { FooterComponent } from './shared/components/footer/footer.component';
import { RegistationSectionComponent } from './auth/components/registation-section/registation-section.component';
import { LoginSectionComponent } from './auth/components/login-section/login-section.component';

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
    GenreCardComponent,
    BookCardComponent,
    NewsletterComponent,
    FooterComponent,
    RegistationSectionComponent,
    LoginSectionComponent,
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
