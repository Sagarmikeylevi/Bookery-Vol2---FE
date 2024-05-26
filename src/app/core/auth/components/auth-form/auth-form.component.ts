import { Component, Input } from '@angular/core';
import { NgForm } from '@angular/forms';
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

  constructor(private userService: UserService) {}

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
    console.log(
      `${this.type.charAt(0).toUpperCase() + this.type.slice(1)} successful!`,
      response
    );
    myForm.reset();
    this.loading = false;
  }

  // Handle error response
  handleError(error: any, myForm: NgForm): void {
    console.error(`${this.type} failed:`, error);
    myForm.reset();
    this.loading = false;
  }

  // Handle form submission
  // onSubmit = (myForm: NgForm, type: string) => {
  //   const { name = '', email, password } = myForm.form.value;
  //   this.loading = true;
  //   if (type === 'register') {
  //     this.userService.register({ name, email, password }).subscribe(
  //       (response) => {
  //         console.log('Registration successful!', response);
  //         myForm.reset();
  //         this.loading = false;
  //       },
  //       (error) => {
  //         console.error('Registration failed:', error);
  //         myForm.reset();
  //         this.loading = false;
  //       }
  //     );
  //   } else {
  //     this.userService.login({ email, password }).subscribe(
  //       (response) => {
  //         console.log('Registration successful!', response);
  //         myForm.reset();
  //         this.loading = false;
  //       },
  //       (error) => {
  //         console.error('Registration failed:', error);
  //         myForm.reset();
  //         this.loading = false;
  //       }
  //     );
  //   }
  // };

  // Handle hide section in password
  changeHide = () => {
    this.hide = !this.hide;
  };
}
