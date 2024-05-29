import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-loading-section',
  templateUrl: './loading-section.component.html',
  styleUrls: ['./loading-section.component.css'],
})
export class LoadingSectionComponent {
  @Input() message: string = '';
}
