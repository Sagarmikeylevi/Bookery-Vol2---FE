import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginSectionRoutingModule } from './login-section-routing.module';
import { LoginSectionComponent } from './login-section.component';
import { AuthHeaderComponent } from '../components/auth-header/auth-header.component';
import { AuthFormComponent } from '../components/auth-form/auth-form.component';
import { AuthFooterComponent } from '../components/auth-footer/auth-footer.component';

@NgModule({
  declarations: [LoginSectionComponent],
  imports: [CommonModule, LoginSectionRoutingModule],
})
export class LoginSectionModule {}
