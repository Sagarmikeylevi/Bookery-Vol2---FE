import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-auth-header',
  templateUrl: './auth-header.component.html',
  styleUrls: ['./auth-header.component.css'],
})
export class AuthHeaderComponent {
  @Input() header: { title: string; subTitle: string } = {
    title: '',
    subTitle: '',
  };
}
