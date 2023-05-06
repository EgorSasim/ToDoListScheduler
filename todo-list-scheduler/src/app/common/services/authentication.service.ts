import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { catchError, of, tap, throwError } from 'rxjs';
import { NO_INET_ACCESS } from 'src/app/common/constants/internet_errors.constants';
import { SERVER_ADDRESS } from 'src/app/constants/server.constants';

@Injectable()
export class AuthenticationService {
  constructor(private httpClient: HttpClient, private router: Router) {}

  public signUp(login: string, password: string): void {
    this.httpClient
      .post(SERVER_ADDRESS + '/user/registration', {
        data: { login: login, password: password },
      })
      .pipe(catchError(() => of(alert(NO_INET_ACCESS))))
      .subscribe((data) => {
        if (data['token'] == '409') {
          alert('user with such name already exists!!!');
          return;
        }
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
      .pipe(catchError(() => of(alert(NO_INET_ACCESS))))
      .subscribe((data) => {
        this.clearStorageToken();
        if (data['token'] == '404') {
          alert('user not found!!!');
          return;
        }
        if (data['token'] == '401') {
          alert('invalid password!!!');
          return;
        }
        localStorage.setItem('accessToken', data['token']);
        this.router.navigate(['/with-nav-bar/tasks-page']);
      });
  }

  public clearStorageToken(): void {
    localStorage.removeItem('accessToken');
  }
}
