import { Component, Input } from '@angular/core';
import { ErrorService } from 'src/app/services/error/error.service';

@Component({
  selector: 'app-error-section',
  templateUrl: './error-section.component.html',
  styleUrls: ['./error-section.component.css'],
})
export class ErrorSectionComponent {
  @Input() message: string = '';

  constructor(private errorService: ErrorService) {}

  onNormalState() {
    this.errorService.setNormalState();
  }
}
