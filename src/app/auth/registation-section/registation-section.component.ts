import { Component } from '@angular/core';

@Component({
  selector: 'app-registation-section',
  templateUrl: './registation-section.component.html',
  styleUrls: ['./registation-section.component.css'],
})
export class RegistationSectionComponent {
  headerContents: { title: string; subTitle: string } = {
    title: 'Create your account',
    subTitle: `Let's get started your reading journey`,
  };
}
