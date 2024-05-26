import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './core/home/home.component';
import { RegistationSectionComponent } from './core/auth/registation-section/registation-section.component';
import { LoginSectionComponent } from './core/auth/login-section/login-section.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'sign-up', component: RegistationSectionComponent },
  { path: 'sign-in', component: LoginSectionComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
