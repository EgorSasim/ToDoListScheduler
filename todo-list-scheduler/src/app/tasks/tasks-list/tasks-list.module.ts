import { NgModule } from '@angular/core';
import { TasksListComponent } from 'src/app/tasks/tasks-list/tasks-list.component';

@NgModule({
  declarations: [TasksListComponent],
  exports: [TasksListComponent],
})
export class TasksListModule {}
