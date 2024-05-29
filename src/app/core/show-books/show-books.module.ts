import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ShowBooksRoutingModule } from './show-books-routing.module';
import { ShowBooksComponent } from './show-books.component';
import { ShowBooksHeaderComponent } from './components/show-books-header/show-books-header.component';
import { BooksSectionComponent } from './components/books-section/books-section.component';
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

@NgModule({
  declarations: [
    ShowBooksComponent,
    ShowBooksHeaderComponent,
    BooksSectionComponent,
  ],
  imports: [
    CommonModule,
    ShowBooksRoutingModule,
    MatButtonModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,
    MatIconModule,
  ],
})
export class ShowBooksModule {}
