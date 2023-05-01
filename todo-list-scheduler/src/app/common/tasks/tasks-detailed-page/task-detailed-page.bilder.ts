import { Injectable } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { TaskForm } from 'src/app/tasks/task/task.typings';

@Injectable()
export class TaskDetailedPageBuilder {
  public createForm(): FormGroup<TaskForm> {
    return new FormGroup({
      id: new FormControl(null),
      completed: new FormControl(null),
      title: new FormControl(null, [Validators.required]),
      description: new FormControl(null),
      date: new FormControl(null),
    });
  }
}
