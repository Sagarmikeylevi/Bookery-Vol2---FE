import { Component } from '@angular/core';
import { REGISTER_DETAILS } from 'src/app/app.constants';
import { ErrorService } from 'src/app/services/error/error.service';

@Component({
  selector: 'app-registation-section',
  templateUrl: './registation-section.component.html',
  styleUrls: ['./registation-section.component.css'],
})
export class RegistationSectionComponent {
  type = REGISTER_DETAILS.TYPE;

  constructor(private errorService: ErrorService) {}

  // check error state
  get isError(): { state: boolean; message: string } {
    return this.errorService.getError();
  }
}
