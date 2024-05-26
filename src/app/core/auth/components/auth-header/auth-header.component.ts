import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-auth-header',
  templateUrl: './auth-header.component.html',
  styleUrls: ['./auth-header.component.css'],
})
export class AuthHeaderComponent {
  @Input() header: { type: string; title: string; subTitle: string } = {
    type: '',
    title: '',
    subTitle: '',
  };
}
