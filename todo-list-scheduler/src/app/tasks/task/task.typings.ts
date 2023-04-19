import { FormControl } from '@angular/forms';

export interface TaskForm {
  id: FormControl<number>;
  completed: FormControl<boolean>;
  title: FormControl<string>;
  text: FormControl<string>;
  date: FormControl<Date>;
}
