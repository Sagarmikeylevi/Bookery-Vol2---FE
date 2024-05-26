import { Component, Input, OnInit } from '@angular/core';
import { LOGIN_DETAILS, REGISTER_DETAILS } from 'src/app/app.constants';

@Component({
  selector: 'app-auth-header',
  templateUrl: './auth-header.component.html',
  styleUrls: ['./auth-header.component.css'],
})
export class AuthHeaderComponent implements OnInit {
  @Input() type: string = '';

  title: string = '';
  subTitle: string = '';

  ngOnInit(): void {
    if (this.type === 'Login') {
      this.title = LOGIN_DETAILS.TITLE;
      this.subTitle = LOGIN_DETAILS.SUB_TITLE;
    } else {
      this.title = REGISTER_DETAILS.TITLE;
      this.subTitle = REGISTER_DETAILS.SUB_TITLE;
    }
  }
}
