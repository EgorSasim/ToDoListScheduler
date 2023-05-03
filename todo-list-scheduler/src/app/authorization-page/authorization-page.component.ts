import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { AuthorizationPageBuilder } from 'src/app/authorization-page/authorization-page.builder';
import { AuthorizationForm } from 'src/app/authorization-page/authorization-page.typings';
import { AuthenticationService } from 'src/app/common/services/authentication.service';

@Component({
  selector: 'app-authorization-page',
  templateUrl: './authorization-page.component.html',
  styleUrls: ['./authorization-page.component.scss'],
  providers: [AuthorizationPageBuilder, AuthenticationService],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AuthorizationPageComponent {
  public formGroup: FormGroup<AuthorizationForm> =
    this.authorizationPageBuilder.createForm();

  constructor(
    private authorizationPageBuilder: AuthorizationPageBuilder,
    private authenticationService: AuthenticationService
  ) {}

  public signUp() {
    this.authenticationService.signUp(
      this.formGroup.get('login').value,
      this.formGroup.get('password').value
    );
  }

  public signIn() {
    console.log('sign in');
    this.authenticationService.signIn(
      this.formGroup.get('login').value,
      this.formGroup.get('password').value
    );
  }
}
