import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { RegistationSectionComponent } from './registation-section/registation-section.component';
import { LoginSectionComponent } from './login-section/login-section.component';
import { AuthHeaderComponent } from './components/auth-header/auth-header.component';
import { AuthFormComponent } from './components/auth-form/auth-form.component';
import { AuthFooterComponent } from './components/auth-footer/auth-footer.component';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [
    RegistationSectionComponent,
    LoginSectionComponent,
    AuthHeaderComponent,
    AuthFormComponent,
    AuthFooterComponent,
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    MatButtonModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,
    MatIconModule,
  ],
})
export class AuthModule {}
