import { FormControl } from '@angular/forms';

export interface TaskForm {
  id: FormControl<number>;
  completed: FormControl<boolean>;
  title: FormControl<string>;
  description: FormControl<string>;
  date: FormControl<string>;
}
