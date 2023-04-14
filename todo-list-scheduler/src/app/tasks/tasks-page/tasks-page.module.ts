import { NgModule } from '@angular/core';
import { PulsingButtonModule } from 'src/app/common/pulsing-button/pulsing-button.module';
import { TasksListModule } from 'src/app/tasks/tasks-list/tasks-list.module';
import { TasksPageComponent } from 'src/app/tasks/tasks-page/tasks-page.component';

@NgModule({
  declarations: [TasksPageComponent],
  imports: [TasksListModule, PulsingButtonModule],
  exports: [TasksPageComponent],
})
export class TasksPageModule {}
