import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  Input,
  OnInit,
} from '@angular/core';
import { FormArray, FormGroup } from '@angular/forms';
import { BehaviorSubject, ReplaySubject, Subject } from 'rxjs';
import { TaskService } from 'src/app/common/services/task.service';
import { TaskForm } from 'src/app/tasks/task/task.typings';

@Component({
  selector: 'app-tasks-list',
  templateUrl: './tasks-list.component.html',
  styleUrls: ['./tasks-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TasksListComponent implements OnInit {
  public tasksList$: BehaviorSubject<FormArray<FormGroup<TaskForm>>> =
    new BehaviorSubject(new FormArray([]));
  constructor(
    private changeDetectorRef: ChangeDetectorRef,
    private taskService: TaskService
  ) {}

  public ngOnInit(): void {
    this.getTasks();
  }

  public getTasks(): void {
    this.taskService.getTasks().subscribe((tasksList) => {
      console.log('tasks list: ', tasksList);
      this.tasksList$.next(tasksList);
    });
  }
}
