import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
} from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { TaskService } from 'src/app/common/services/tasks.service';
import { TaskDetailedPageBuilder } from 'src/app/common/tasks/tasks-detailed-page/task-detailed-page.bilder';
import { FormData } from 'src/app/common/typings/typings';
import { TaskForm } from 'src/app/tasks/task/task.typings';

@Component({
  selector: 'app-task-detailed-page',
  templateUrl: './task-detailed-page.component.html',
  styleUrls: ['./task-detailed-page.component.scss'],
  providers: [TaskDetailedPageBuilder],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TaskDetailedPageComponent {
  public formGroup: FormGroup<TaskForm> =
    this.taskDetailedPageBuilder.createForm();
  public taskId: number;

  constructor(
    private tasksService: TaskService,
    private activatedRoute: ActivatedRoute,
    private taskDetailedPageBuilder: TaskDetailedPageBuilder,
    private router: Router,
    private cdr: ChangeDetectorRef
  ) {
    this.activatedRoute.params.subscribe((val) => {
      this.taskId = val['id'];
      this.tasksService.getTask(this.taskId).subscribe((formGroup) => {
        this.formGroup.setValue(formGroup.value as FormData<TaskForm>);
        this.cdr.markForCheck();
      });
    });
  }

  public saveTask(): void {
    this.tasksService
      .updateTask(this.formGroup.value as FormData<TaskForm>)
      .subscribe();
    this.tasksService.tasksListHasChanged$.next();
    this.router.navigate(['/with-nav-bar/tasks-page']);
  }

  public resetTask(): void {
    this.tasksService.getTask(this.taskId).subscribe((formGroup) => {
      this.formGroup.setValue(formGroup.value as FormData<TaskForm>);
    });
  }
}
