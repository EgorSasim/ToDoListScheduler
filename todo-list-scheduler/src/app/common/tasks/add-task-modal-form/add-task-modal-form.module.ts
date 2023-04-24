import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { AddTaskModalFormComponent } from 'src/app/common/tasks/add-task-modal-form/add-task-modal-form.component';

@NgModule({
  declarations: [AddTaskModalFormComponent],
  imports: [ReactiveFormsModule],
  exports: [AddTaskModalFormComponent],
})
export class AddTaskModalFormModule {}
