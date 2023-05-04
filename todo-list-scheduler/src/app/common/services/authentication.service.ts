import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { SERVER_ADDRESS } from 'src/app/constants/server.constants';

@Injectable()
export class AuthenticationService {
  constructor(private httpClient: HttpClient, private router: Router) {}

  public signUp(login: string, password: string): void {
    this.httpClient
      .post(SERVER_ADDRESS + '/user/registration', {
        data: { login: login, password: password },
      })
      .subscribe((data) => {
        this.clearStorageToken();
        localStorage.setItem('accessToken', data['token']);
        this.router.navigate(['/with-nav-bar/tasks-page']);
      });
  }
  public signIn(login: string, password: string): void {
    this.httpClient
      .post(SERVER_ADDRESS + '/user/login', {
        data: { login: login, password: password },
      })
      .subscribe((data) => {
        this.clearStorageToken();
        localStorage.setItem('accessToken', data['token']);
        this.router.navigate(['/with-nav-bar/tasks-page']);
      });
  }

  private clearStorageToken(): void {
    localStorage.removeItem('accessToken');
  }
}
