import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CartRoutingModule } from './cart-routing.module';
import { CartComponent } from './cart.component';
import { CartHeaderComponent } from './components/cart-header/cart-header.component';
import { CartItemsComponent } from './components/cart-items/cart-items.component';
import { CheckoutSectionComponent } from './components/checkout-section/checkout-section.component';
import { LoadingSectionComponent } from 'src/app/shared/components/loading-section/loading-section.component';
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
import { ModuleModule } from 'src/app/shared/module/module.module';

@NgModule({
  declarations: [
    CartComponent,
    CartHeaderComponent,
    CartItemsComponent,
    CheckoutSectionComponent,
  ],
  imports: [
    CommonModule,
    CartRoutingModule,
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
export class CartModule {}
