import { Component } from '@angular/core';
import { REGISTER_DETAILS } from 'src/app/app.constants';

@Component({
  selector: 'app-registation-section',
  templateUrl: './registation-section.component.html',
  styleUrls: ['./registation-section.component.css'],
})
export class RegistationSectionComponent {
  type = REGISTER_DETAILS.TYPE;
}
