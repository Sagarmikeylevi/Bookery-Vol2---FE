import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ErrorService {
  private error: { state: boolean; message: string } = {
    state: false,
    message: '',
  };

  getError(): { state: boolean; message: string } {
    return this.error;
  }

  setError(message: string): void {
    this.error.state = true;
    this.error.message = message;
  }

  setNormalState(): void {
    this.error.state = false;
    this.error.message = '';
  }

  constructor() {}
}
