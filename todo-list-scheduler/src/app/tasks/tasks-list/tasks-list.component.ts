import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  Input,
  OnInit,
} from '@angular/core';
import { FormArray, FormGroup } from '@angular/forms';
import { ReplaySubject } from 'rxjs';
import { TaskService } from 'src/app/common/services/task.service';
import { TaskForm } from 'src/app/tasks/task/task.typings';

@Component({
  selector: 'app-tasks-list',
  templateUrl: './tasks-list.component.html',
  styleUrls: ['./tasks-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TasksListComponent {
  public taskList$ = this.taskService.getTasks();

  constructor(
    private changeDetectorRef: ChangeDetectorRef,
    private taskService: TaskService
  ) {}
}
