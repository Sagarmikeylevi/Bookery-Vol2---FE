import { Component, Input } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ErrorService } from 'src/app/services/error/error.service';
import { UserService } from 'src/app/services/users/user.service';

@Component({
  selector: 'app-auth-form',
  templateUrl: './auth-form.component.html',
  styleUrls: ['./auth-form.component.css'],
})
export class AuthFormComponent {
  @Input() type: string = '';
  hide = true;
  loading = false;

  constructor(
    private userService: UserService,
    private router: Router,
    private errorService: ErrorService
  ) {}

  // Handle From Submission
  onSubmit(myForm: NgForm): void {
    const { name = '', email, password } = myForm.form.value;
    this.loading = true;

    const request$ =
      this.type === 'Login'
        ? this.userService.login({ email, password })
        : this.userService.register({ name, email, password });

    request$.subscribe(
      (response) => this.handleSuccess(response, myForm),
      (error) => this.handleError(error, myForm)
    );
  }

  // Handle successful response
  handleSuccess(response: any, myForm: NgForm): void {
    myForm.reset();
    this.loading = false;

    if (this.type === 'Login') {
      const { token, userId, username } = response.data;

      this.userService.setAuthItems(token, userId, username);

      this.router.navigateByUrl('/');
    } else {
      this.router.navigateByUrl('/sign-in');
    }
  }

  // Handle error response
  handleError(error: any, myForm: NgForm): void {
    console.error(`${this.type} failed:`, error);
    myForm.reset();
    this.loading = false;

    if (error.status === 409 || error.status === 422) {
      this.errorService.setError(error.error);
    } else {
      this.errorService.setError('Something went wrong');
    }
  }

  // Handle hide section in password
  changeHide = () => {
    this.hide = !this.hide;
  };
}
