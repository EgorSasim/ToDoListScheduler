import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormArray, FormControl, FormGroup } from '@angular/forms';
import { Observable, Subject, catchError, map, of, startWith, tap } from 'rxjs';
import { NO_INET_ACCESS } from 'src/app/common/constants/internet_errors.constants';
import { FormData } from 'src/app/common/typings/typings';
import { SERVER_ADDRESS } from 'src/app/constants/server.constants';
import { TaskForm } from 'src/app/tasks/task/task.typings';
import {
  convertTaskDataArrayToReactiveFormArray,
  convertTaskDataToReactiveForm,
} from 'src/app/common/services/helpers';

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
          convertTaskDataArrayToReactiveFormArray(tasks)
        ),
        catchError(() => of(alert(NO_INET_ACCESS)))
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
        map((task) => convertTaskDataToReactiveForm(task)),
        catchError(() => of(alert(NO_INET_ACCESS)))
      ) as Observable<FormGroup<TaskForm>>;
  }

  public removeTask(id: number) {
    return this.httpClient
      .delete(SERVER_ADDRESS + '/tasks/remove', {
        headers: {
          authorization: `Bearer ${localStorage.getItem('accessToken')}`,
        },
        body: { id: id },
      })
      .pipe(catchError(() => of(alert(NO_INET_ACCESS))));
  }

  public addTask(task: FormData<TaskForm>) {
    return this.httpClient
      .post(
        SERVER_ADDRESS + '/tasks/add',
        {
          task: task,
        },
        {
          headers: {
            authorization: `Bearer ${localStorage.getItem('accessToken')}`,
          },
        }
      )
      .pipe(catchError(() => of(alert(NO_INET_ACCESS))));
  }

  public updateTask(task: FormData<TaskForm>) {
    return this.httpClient
      .put(
        SERVER_ADDRESS + '/tasks/update',
        {
          task: task,
        },
        {
          headers: {
            authorization: `Bearer ${localStorage.getItem('accessToken')}`,
          },
        }
      )
      .pipe(catchError(() => of(alert(NO_INET_ACCESS))));
  }
}
