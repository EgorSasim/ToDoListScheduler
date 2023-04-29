import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { TaskComponent } from 'src/app/tasks/task/task.component';

@NgModule({
  declarations: [TaskComponent],
  imports: [ReactiveFormsModule, CommonModule, AppRoutingModule],
  exports: [TaskComponent],
})
export class TaskModule {}
