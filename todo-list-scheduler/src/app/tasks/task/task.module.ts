import { NgModule } from '@angular/core';
import { TaskComponent } from 'src/app/tasks/task/task.component';

@NgModule({
  declarations: [TaskComponent],
  exports: [TaskComponent],
})
export class TaskModule {}
