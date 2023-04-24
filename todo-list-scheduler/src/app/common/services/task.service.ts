import { Injectable } from '@angular/core';
import { FormArray, FormControl, FormGroup } from '@angular/forms';
import { BehaviorSubject, Observable, Subject, of } from 'rxjs';
import { TaskForm } from 'src/app/tasks/task/task.typings';

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  private TASKS: FormArray<FormGroup<TaskForm>> = new FormArray([
    new FormGroup<TaskForm>({
      id: new FormControl(1),
      completed: new FormControl(false),
      title: new FormControl('wash the car'),
      text: new FormControl(
        'tomorrow to to the washing shop, buy staff, kiss my wife and wash da car!!!'
      ),
      date: new FormControl(new Date()),
    }),
    new FormGroup<TaskForm>({
      id: new FormControl(2),
      completed: new FormControl(true),
      title: new FormControl('say hello'),
      text: new FormControl(''),
      date: new FormControl(new Date('1992, 7, 1')),
    }),
    new FormGroup<TaskForm>({
      id: new FormControl(3),
      completed: new FormControl(false),
      title: new FormControl('do homework'),
      text: new FormControl(
        'math and physics in prior, other lessons are bullshit, obviously '
      ),
      date: new FormControl(new Date()),
    }),
  ]);

  public taskList$: BehaviorSubject<FormArray<FormGroup<TaskForm>>> =
    new BehaviorSubject(this.TASKS);

  public removeTask(id: number) {
    const index: number = this.TASKS.controls.findIndex(
      (control) => control.value.id === id
    );
    this.TASKS.removeAt(index);
  }
}
