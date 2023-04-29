import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { TaskDetailedPageComponent } from 'src/app/common/tasks/tasks-detailed-page/task-detailed-page.component';

@NgModule({
  declarations: [TaskDetailedPageComponent],
  imports: [ReactiveFormsModule],
  exports: [TaskDetailedPageComponent],
})
export class TaskDetailedPageModule {}
