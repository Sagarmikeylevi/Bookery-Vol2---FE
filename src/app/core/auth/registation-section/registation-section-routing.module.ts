import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegistationSectionComponent } from './registation-section.component';

const routes: Routes = [
  { path: 'sign-up', component: RegistationSectionComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RegistationSectionRoutingModule {}
