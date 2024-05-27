import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { API_ENDPOINTS } from 'src/app/app.constants';
import { User } from 'src/app/models/user';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private authState: boolean = this.isTokenAvailble();

  getAuthState(): boolean {
    return this.authState;
  }

  setAuthItems(token: string, userId: string, username: string): void {
    localStorage.setItem('token', token);
    localStorage.setItem('user', userId);
    localStorage.setItem('username', username);
    this.authState = true;
  }

  isTokenAvailble(): boolean {
    return !!localStorage.getItem('token');
  }

  constructor(private http: HttpClient) {}

  register(user: User): Observable<any> {
    return this.http.post(API_ENDPOINTS.REGISTER, user);
  }

  login(credentials: { email: string; password: string }): Observable<any> {
    return this.http.post(API_ENDPOINTS.LOGIN, credentials);
  }

  logout(): void {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    localStorage.removeItem('username');
    this.authState = false;
  }
}
