import { Component, Input, OnInit } from '@angular/core';
import { LOGIN_DETAILS, REGISTER_DETAILS } from 'src/app/app.constants';

@Component({
  selector: 'app-auth-footer',
  templateUrl: './auth-footer.component.html',
  styleUrls: ['./auth-footer.component.css'],
})
export class AuthFooterComponent implements OnInit {
  @Input() type: string = '';

  footerMessage: string = '';

  ngOnInit(): void {
    if (this.type === 'Login') {
      this.footerMessage = LOGIN_DETAILS.FOOTER_MESSAGE;
    } else {
      this.footerMessage = REGISTER_DETAILS.FOOTER_MESSAGE;
    }
  }
}
