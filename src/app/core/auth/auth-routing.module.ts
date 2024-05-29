import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegistationSectionComponent } from './registation-section/registation-section.component';
import { LoginSectionComponent } from './login-section/login-section.component';

const routes: Routes = [
  { path: 'sign-up', component: RegistationSectionComponent },
  { path: 'sign-in', component: LoginSectionComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AuthRoutingModule {}
