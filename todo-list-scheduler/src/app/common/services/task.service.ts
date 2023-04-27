import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormArray, FormControl, FormGroup } from '@angular/forms';
import { BehaviorSubject, Observable, Subject, map, of, tap } from 'rxjs';
import { FormData } from 'src/app/common/typings/typings';
import { SERVER_ADDRESS } from 'src/app/constants/server.constants';
import { TaskForm } from 'src/app/tasks/task/task.typings';

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  constructor(private httpClient: HttpClient) {}

  private TASKS: FormArray<FormGroup<TaskForm>> = new FormArray([
    new FormGroup<TaskForm>({
      id: new FormControl(1),
      completed: new FormControl(false),
      title: new FormControl('wash the car'),
      description: new FormControl(
        'tomorrow to to the washing shop, buy staff, kiss my wife and wash da car!!!'
      ),
      date: new FormControl(new Date()),
    }),
    new FormGroup<TaskForm>({
      id: new FormControl(2),
      completed: new FormControl(true),
      title: new FormControl('say hello'),
      description: new FormControl(''),
      date: new FormControl(new Date('1992, 7, 1')),
    }),
    new FormGroup<TaskForm>({
      id: new FormControl(3),
      completed: new FormControl(false),
      title: new FormControl('do homework'),
      description: new FormControl(
        'math and physics in prior, other lessons are bullshit, obviously '
      ),
      date: new FormControl(new Date()),
    }),
  ]);

  public getTasks(): Observable<FormData<TaskForm[]>> {
    return this.httpClient
      .get<Observable<FormData<TaskForm[]>>>(SERVER_ADDRESS + '/tasks/get')
      .pipe(
        map((tasks: FormData<TaskForm[]>) =>
          this.convertTaskDataToReactiveForm(tasks)
        )
      ) as Observable<FormData<TaskForm[]>>;
  }

  public removeTask(id: number) {
    return this.httpClient.delete(SERVER_ADDRESS + '/tasks/remove', {
      body: id,
    });
  }

  public addTask(task: FormData<TaskForm>) {
    return this.httpClient.post(SERVER_ADDRESS + '/tasks/add', task);
  }

  private convertTaskDataToReactiveForm(
    tasks: FormData<TaskForm>[]
  ): FormArray<FormGroup<TaskForm>> {
    // const tasksCp = JSON.parse(JSON.stringify(tasks));
    // console.log('tasks: ', tasks);
    // const formArray = new FormArray(null);
    // console.log('task copy: ', tasksCp);

    // tasksCp.forEach((task) =>
    //   formArray.push(
    //     new FormGroup({
    //       id: new FormControl(task.id),
    //       completed: new FormControl(task.completed),
    //       title: new FormControl(task.title),
    //       description: new FormControl(task.description),
    //       date: new FormControl(task.date),
    //     })
    //   )
    // );
    // console.log('formArray: ', formArray);
    // return this.TASKS;
    return this.TASKS;
  }
  // public removeTask(id: number) {
  //   const index: number = this.TASKS.controls.findIndex(
  //     (control) => control.value.id === id
  //   );
  //   this.TASKS.removeAt(index);
  //   this.taskList$.next(this.TASKS);
  // }

  // public addTask(task: FormGroup<TaskForm>): void {
  //   this.TASKS.push(task);
  //   this.taskList$.next(this.TASKS);
  // }

  private buildTaskForm(task: FormData<TaskForm>): FormGroup<TaskForm> {
    return new FormGroup<TaskForm>({
      id: new FormControl(task.id),
      completed: new FormControl(task.completed),
      title: new FormControl(task.title),
      description: new FormControl(task.description),
      date: new FormControl(task.date),
    });
  }
}
