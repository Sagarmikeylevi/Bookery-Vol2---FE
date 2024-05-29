import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RegistationSectionRoutingModule } from './registation-section-routing.module';
import { RegistationSectionComponent } from './registation-section.component';
import { AuthHeaderComponent } from '../components/auth-header/auth-header.component';
import { AuthFormComponent } from '../components/auth-form/auth-form.component';
import { AuthFooterComponent } from '../components/auth-footer/auth-footer.component';

@NgModule({
  declarations: [RegistationSectionComponent],
  imports: [CommonModule, RegistationSectionRoutingModule],
})
export class RegistationSectionModule {}
