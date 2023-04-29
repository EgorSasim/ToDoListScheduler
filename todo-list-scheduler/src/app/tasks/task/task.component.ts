import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
} from '@angular/core';
import { FormGroup } from '@angular/forms';
import { take } from 'rxjs';
import { TaskService } from 'src/app/common/services/tasks.service';
import { FormData } from 'src/app/common/typings/typings';
import { TRASH_SRC } from 'src/app/tasks/task/task.constants';
import { TaskForm } from 'src/app/tasks/task/task.typings';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TaskComponent implements OnInit {
  @Input() public formGroup: FormGroup<TaskForm>;
  @Output() public taskIsRemoved: EventEmitter<void> = new EventEmitter();
  public readonly trashSrc: string = TRASH_SRC;
  public readonly currDate: Date = new Date(
    new Date().setDate(new Date().getDate() - 1)
  );

  constructor(
    private taskService: TaskService,
    private cdr: ChangeDetectorRef
  ) {}

  public ngOnInit(): void {
    this.handleCompletedState();
  }
  public openDetailedTaskModal(task: FormGroup<TaskForm>): void {}

  public removeTask(id: number) {
    this.taskService.removeTask(id).subscribe((response) => {
      this.taskService.tasksListHasChanged$.next();
    });
  }

  public handleCompletedState(): void {
    this.formGroup.get('completed').valueChanges.subscribe(() => {
      this.taskService
        .updateTask({
          ...this.formGroup.value,
          completed: !this.formGroup.value.completed,
        } as FormData<TaskForm>)
        .subscribe((res) => {
          this.taskService.tasksListHasChanged$.next();
          this.cdr.markForCheck();
        });
    });
  }

  public formatDate(date: Date | string): string {
    const convertedDate = new Date(date);
    return `${convertedDate.getDate()}/${
      convertedDate.getMonth() + 1
    }/${convertedDate.getFullYear()}`;
  }

  public convertStringToDate(str: string): Date {
    return new Date(str);
  }
}
