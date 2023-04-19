import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { TRASH_SRC } from 'src/app/tasks/task/task.constants';
import { TaskForm } from 'src/app/tasks/task/task.typings';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss'],
})
export class TaskComponent {
  @Input() public formGroup: FormGroup<TaskForm>;
  public readonly trashSrc: string = TRASH_SRC;

  public openDetailedTaskModal(task: FormGroup<TaskForm>): void {}

  public removeTask(taskId: number) {}
}
