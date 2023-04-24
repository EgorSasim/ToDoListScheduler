import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { AddTaskModalFormBuilder } from 'src/app/common/tasks/add-task-modal-form/add-task-modal-form.builder';
import { TaskForm } from 'src/app/tasks/task/task.typings';

@Component({
  selector: 'app-add-task-form',
  templateUrl: './add-task-modal-form.component.html',
  styleUrls: ['./add-task-modal-form.component.scss'],
  providers: [AddTaskModalFormBuilder],
})
export class AddTaskModalFormComponent {
  public formGroup: FormGroup<TaskForm> = this.addTaskModalFormBuilder.create();
  constructor(
    private addTaskModalFormBuilder: AddTaskModalFormBuilder,
    private matDialogRef: MatDialogRef<AddTaskModalFormComponent>
  ) {}

  public ngOnInit(): void {
    console.log('form group: ', this.formGroup);
  }
  public close(): void {
    this.matDialogRef.close();
  }

  public add(): void {
    return;
  }
}
