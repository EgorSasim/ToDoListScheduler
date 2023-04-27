import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  OnInit,
} from '@angular/core';
import { FormArray, FormGroup } from '@angular/forms';
import { BehaviorSubject, Observable, ReplaySubject, Subject } from 'rxjs';
import { TaskService } from 'src/app/common/services/task.service';
import { TaskForm } from 'src/app/tasks/task/task.typings';
// import { AddTaskModalFormComponent } from 'src/app/common/tasks/add-task-modal-form/add-task-modal-form.component';

@Component({
  selector: 'app-tasks-page',
  templateUrl: './tasks-page.component.html',
  styleUrls: ['./tasks-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TasksPageComponent implements OnInit {
  public isOpenedAddTaskModal: BehaviorSubject<boolean> = new BehaviorSubject(
    false
  );

  constructor(
    private tasksService: TaskService,
    private changeDetectorRef: ChangeDetectorRef
  ) {}

  public ngOnInit(): void {}

  public openAddTaskModal(): void {
    this.isOpenedAddTaskModal.next(true);
  }

  public closeAddTaskModal(): void {
    this.isOpenedAddTaskModal.next(false);
  }
}
