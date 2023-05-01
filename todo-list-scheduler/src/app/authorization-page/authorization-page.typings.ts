import { FormControl } from '@angular/forms';

export interface AuthorizationForm {
  login: FormControl<string>;
  password: FormControl<string>;
}
