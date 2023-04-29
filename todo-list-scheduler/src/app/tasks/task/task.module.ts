import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { TaskComponent } from 'src/app/tasks/task/task.component';

@NgModule({
  declarations: [TaskComponent],
  imports: [ReactiveFormsModule, CommonModule],
  exports: [TaskComponent],
})
export class TaskModule {}
