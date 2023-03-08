import { NgModule } from '@angular/core';
import { TasksPageComponent } from 'src/app/tasks/tasks-page/tasks-page.component';

@NgModule({
  declarations: [TasksPageComponent],
  exports: [TasksPageComponent],
})
export class TasksPageModule {}
