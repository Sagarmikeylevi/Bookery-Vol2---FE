import { Component } from '@angular/core';
import { FormControl, NgForm } from '@angular/forms';
import { UserService } from 'src/app/services/users/user.service';

@Component({
  selector: 'app-registation-form',
  templateUrl: './registation-form.component.html',
  styleUrls: ['./registation-form.component.css'],
})
export class RegistationFormComponent {
  hide = true;
  loading = false;

  constructor(private userService: UserService) {}

  changeHide = () => {
    this.hide = !this.hide;
  };

  onSubmit = (myForm: NgForm) => {
    this.loading = true;
    this.userService
      .register({
        name: myForm.form.value.name,
        email: myForm.form.value.email,
        password: myForm.form.value.password,
      })
      .subscribe(
        (response) => {
          console.log('Registration successful!', response);
        },
        (error) => {
          console.error('Registration failed:', error);
          myForm.reset();
          this.loading = false;
        }
      );
  };
}
