import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  EventEmitter,
  OnInit,
  Output,
} from '@angular/core';
import { FormGroup } from '@angular/forms';
import { TaskService } from 'src/app/common/services/task.service';
import { AddTaskFormBuilder } from 'src/app/common/tasks/add-task-form/add-task-form.builder';
import { FormData } from 'src/app/common/typings/typings';
import { TaskForm } from 'src/app/tasks/task/task.typings';

@Component({
  selector: 'app-add-task-form',
  templateUrl: './add-task-form.component.html',
  styleUrls: ['./add-task-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [AddTaskFormBuilder],
})
export class AddTaskModalFormComponent {
  @Output() public closeModal: EventEmitter<void> = new EventEmitter();

  public formGroup: FormGroup<TaskForm> = this.addTaskFormBuilder.create();
  constructor(
    private addTaskFormBuilder: AddTaskFormBuilder,
    private taskService: TaskService,
    private changeDetectorRef: ChangeDetectorRef
  ) {}

  public handleAddTaskButton(): void {
    this.formGroup.invalid ? this.formGroup.markAllAsTouched() : this.addTask();
  }

  private addTask(): void {
    this.taskService.addTask(this.formGroup.value as FormData<TaskForm>);
    this.closeModal.emit();
  }
}
