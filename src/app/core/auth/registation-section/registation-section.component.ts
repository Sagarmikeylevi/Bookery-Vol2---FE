import { Component } from '@angular/core';

@Component({
  selector: 'app-registation-section',
  templateUrl: './registation-section.component.html',
  styleUrls: ['./registation-section.component.css'],
})
export class RegistationSectionComponent {
  headerContents: { type: string; title: string; subTitle: string } = {
    type: 'register',
    title: 'Create your account',
    subTitle: `Let's get started your reading journey`,
  };
}
