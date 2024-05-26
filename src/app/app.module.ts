import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './shared/components/navbar/navbar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { HeroSectionComponent } from './core/home/components/hero-section/hero-section.component';
import { HomeComponent } from './core/home/home.component';
import { AuthorSectionComponent } from './core/home/components/author-section/author-section.component';
import { MatCardModule } from '@angular/material/card';
import { ScrollableComponentComponent } from './shared/components/scrollable-component/scrollable-component.component';
import { GenresSectionComponent } from './core/home/components/genres-section/genres-section.component';
import { FeaturedBooksComponent } from './core/home/components/featured-books/featured-books.component';
import { AuthorCardComponent } from './core/home/components/author-section/author-card/author-card.component';
import { GenreCardComponent } from './core/home/components/genres-section/genre-card/genre-card.component';
import { BookCardComponent } from './shared/components/book-card/book-card.component';
import { NewsletterComponent } from './core/home/components/newsletter/newsletter.component';
import { FooterComponent } from './shared/components/footer/footer.component';
import { RegistationSectionComponent } from './core/auth/registation-section/registation-section.component';
import { LoginSectionComponent } from './core/auth/login-section/login-section.component';
import { AuthHeaderComponent } from './core/auth/components/auth-header/auth-header.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { RegistationFormComponent } from './core/auth/registation-section/registation-form/registation-form.component';
import { LoginFormComponent } from './core/auth/login-section/login-form/login-form.component';

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
    AuthHeaderComponent,
    RegistationFormComponent,
    LoginFormComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,
    MatIconModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
