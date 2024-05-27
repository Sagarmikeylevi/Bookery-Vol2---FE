import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

import { UserService } from 'src/app/services/users/user.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent {
  showNavbar: boolean = true;

  constructor(private router: Router, private userService: UserService) {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.showNavbar = !['/sign-in', '/sign-up'].includes(
          event.urlAfterRedirects
        );
      }
    });
  }

  get authState(): boolean {
    return this.userService.getAuthState();
  }

  scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  logOut = () => {
    this.userService.logout();
  };
}
