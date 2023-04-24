import { Injectable } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { TaskForm } from 'src/app/tasks/task/task.typings';

@Injectable()
export class AddTaskModalFormBuilder {
  public create(): FormGroup<TaskForm> {
    return new FormGroup({
      id: new FormControl(null),
      completed: new FormControl(false),
      title: new FormControl(''),
      text: new FormControl(''),
      date: new FormControl(null),
    });
  }
}
