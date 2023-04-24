import { Injectable } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { TaskForm } from 'src/app/tasks/task/task.typings';

@Injectable()
export class AddTaskFormBuilder {
  public create(): FormGroup<TaskForm> {
    return new FormGroup({
      id: new FormControl(null),
      completed: new FormControl(false),
      title: new FormControl('', [Validators.required]),
      description: new FormControl(''),
      date: new FormControl(null),
    });
  }
}
