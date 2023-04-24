import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { ButtonModule } from 'src/app/common/buttons/button/button.module';
import { AddTaskModalFormComponent } from 'src/app/common/tasks/add-task-form/add-task-form.component';

@NgModule({
  declarations: [AddTaskModalFormComponent],
  imports: [ReactiveFormsModule, ButtonModule, CommonModule],
  exports: [AddTaskModalFormComponent],
})
export class AddTaskModalFormModule {}
