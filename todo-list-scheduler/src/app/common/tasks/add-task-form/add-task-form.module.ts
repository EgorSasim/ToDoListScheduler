import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { ButtonModule } from 'src/app/common/buttons/button/button.module';
import { AddTaskModalFormComponent } from 'src/app/common/tasks/add-task-form/add-task-form.component';
import { InputModule } from 'src/app/common/inputs/input/input.module';
import { ErrorModule } from 'src/app/common/errors/error/error.module';

@NgModule({
  declarations: [AddTaskModalFormComponent],
  imports: [
    ReactiveFormsModule,
    ButtonModule,
    CommonModule,
    InputModule,
    ErrorModule,
  ],
  exports: [AddTaskModalFormComponent],
})
export class AddTaskModalFormModule {}
