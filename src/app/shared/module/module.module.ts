import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoadingSectionComponent } from '../components/loading-section/loading-section.component';

@NgModule({
  declarations: [LoadingSectionComponent],
  imports: [CommonModule],
  exports: [LoadingSectionComponent],
})
export class ModuleModule {}
