import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { AuthorizationPageBuilder } from 'src/app/authorization-page/authorization-page.builder';
import { AuthorizationForm } from 'src/app/authorization-page/authorization-page.typings';

@Component({
  selector: 'app-authorization-page',
  templateUrl: './authorization-page.component.html',
  styleUrls: ['./authorization-page.component.scss'],
  providers: [AuthorizationPageBuilder],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AuthorizationPageComponent {
  public formGroup: FormGroup<AuthorizationForm> =
    this.authorizationPageBuilder.createForm();

  constructor(private authorizationPageBuilder: AuthorizationPageBuilder) {}
}
