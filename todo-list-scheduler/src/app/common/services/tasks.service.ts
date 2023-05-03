import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormArray, FormControl, FormGroup } from '@angular/forms';
import { Observable, Subject, map, startWith, tap } from 'rxjs';
import { FormData } from 'src/app/common/typings/typings';
import { SERVER_ADDRESS } from 'src/app/constants/server.constants';
import { TaskForm } from 'src/app/tasks/task/task.typings';

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  constructor(private httpClient: HttpClient) {}

  public tasksListHasChanged$: Subject<void> = new Subject();

  public getTasks(): Observable<FormArray<FormGroup<TaskForm>>> {
    return this.httpClient
      .get<FormData<TaskForm[]>>(SERVER_ADDRESS + '/tasks/get', {
        headers: {
          authorization: `Bearer ${localStorage.getItem('accessToken')}`,
        },
      })
      .pipe(
        map((tasks: FormData<TaskForm[]>) =>
          this.convertTaskDataArrayToReactiveFormArray(tasks)
        )
      ) as Observable<FormData<TaskForm[]>>;
  }

  public getTask(id: number): Observable<FormGroup<TaskForm>> {
    return this.httpClient
      .get<FormData<TaskForm>>(SERVER_ADDRESS + '/tasks/' + id, {
        headers: {
          authorization: `Bearer ${localStorage.getItem('accessToken')}`,
        },
      })
      .pipe(
        map((task) => this.convertTaskDataToReactiveForm(task))
      ) as Observable<FormGroup<TaskForm>>;
  }

  public removeTask(id: number) {
    return this.httpClient.delete(SERVER_ADDRESS + '/tasks/remove', {
      headers: {
        authorization: `Bearer ${localStorage.getItem('accessToken')}`,
      },
      body: { id: id },
    });
  }

  public addTask(task: FormData<TaskForm>) {
    console.log('service add task');
    return this.httpClient.post(
      SERVER_ADDRESS + '/tasks/add',
      {
        task: task,
      },
      {
        headers: {
          authorization: `Bearer ${localStorage.getItem('accessToken')}`,
        },
      }
    );
  }

  public updateTask(task: FormData<TaskForm>) {
    return this.httpClient.put(
      SERVER_ADDRESS + '/tasks/update',
      {
        task: task,
      },
      {
        headers: {
          authorization: `Bearer ${localStorage.getItem('accessToken')}`,
        },
      }
    );
  }

  private convertTaskDataArrayToReactiveFormArray(
    tasks: FormData<TaskForm>[]
  ): FormArray<FormGroup<TaskForm>> {
    const formArray = new FormArray([]);

    tasks.forEach((task) =>
      formArray.push(
        new FormGroup({
          id: new FormControl(task.id),
          completed: new FormControl(task.completed),
          title: new FormControl(task.title),
          description: new FormControl(task.description),
          date: new FormControl(task.date),
        })
      )
    );
    return formArray;
  }

  private convertTaskDataToReactiveForm(
    task: FormData<TaskForm>
  ): FormGroup<TaskForm> {
    return new FormGroup({
      id: new FormControl(task.id),
      completed: new FormControl(task.completed),
      title: new FormControl(task.title),
      description: new FormControl(task.description),
      date: new FormControl(task.date),
    });
  }
}
