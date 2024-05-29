import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginSectionComponent } from './login-section.component';

const routes: Routes = [{ path: 'sign-in', component: LoginSectionComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LoginSectionRoutingModule {}
