import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ShowBooksComponent } from './show-books.component';

const routes: Routes = [{ path: '', component: ShowBooksComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ShowBooksRoutingModule {}
