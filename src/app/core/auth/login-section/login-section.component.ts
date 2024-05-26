import { Component } from '@angular/core';
import { LOGIN_DETAILS } from 'src/app/app.constants';

@Component({
  selector: 'app-login-section',
  templateUrl: './login-section.component.html',
  styleUrls: ['./login-section.component.css'],
})
export class LoginSectionComponent {
  type = LOGIN_DETAILS.TYPE;
}
