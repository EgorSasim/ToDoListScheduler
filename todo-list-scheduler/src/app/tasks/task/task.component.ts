import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnInit,
} from '@angular/core';
import { FormGroup } from '@angular/forms';
import { TaskService } from 'src/app/common/services/task.service';
import { TRASH_SRC } from 'src/app/tasks/task/task.constants';
import { TaskForm } from 'src/app/tasks/task/task.typings';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TaskComponent {
  @Input() public formGroup: FormGroup<TaskForm>;
  public readonly trashSrc: string = TRASH_SRC;

  constructor(private taskService: TaskService) {}

  public openDetailedTaskModal(task: FormGroup<TaskForm>): void {}

  public removeTask(id: number) {
    this.taskService.removeTask(id);
  }
}
