import { Injectable } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthorizationForm } from 'src/app/authorization-page/authorization-page.typings';

@Injectable()
export class AuthorizationPageBuilder {
  public createForm(): FormGroup<AuthorizationForm> {
    return new FormGroup({
      login: new FormControl(null, [Validators.required]),
      password: new FormControl(null, [Validators.required]),
    });
  }
}
