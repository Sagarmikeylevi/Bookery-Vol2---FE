import { Component } from '@angular/core';
import { FormControl, NgForm } from '@angular/forms';

@Component({
  selector: 'app-registation-form',
  templateUrl: './registation-form.component.html',
  styleUrls: ['./registation-form.component.css'],
})
export class RegistationFormComponent {
  hide = true;

  changeHide = () => {
    this.hide = !this.hide;
  };

  onSubmit = (form: NgForm) => {};
}
