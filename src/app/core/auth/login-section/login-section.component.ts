import { Component } from '@angular/core';

@Component({
  selector: 'app-login-section',
  templateUrl: './login-section.component.html',
  styleUrls: ['./login-section.component.css'],
})
export class LoginSectionComponent {
  headerContents: { type: string; title: string; subTitle: string } = {
    type: 'login',
    title: 'Hey, hello',
    subTitle: 'Enter your login credentials',
  };
}
