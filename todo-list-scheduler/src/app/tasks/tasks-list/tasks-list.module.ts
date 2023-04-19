import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { TaskModule } from 'src/app/tasks/task/task.module';
import { TasksListComponent } from 'src/app/tasks/tasks-list/tasks-list.component';

@NgModule({
  declarations: [TasksListComponent],
  imports: [TaskModule, CommonModule],
  exports: [TasksListComponent],
})
export class TasksListModule {}
