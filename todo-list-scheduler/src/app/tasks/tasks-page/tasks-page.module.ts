import { AsyncPipe } from '@angular/common';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { PulsingButtonModule } from 'src/app/common/buttons/pulsing-button/pulsing-button.module';
import { AddTaskModalFormModule } from 'src/app/common/tasks/add-task-form/add-task-form.module';
import { TasksListModule } from 'src/app/tasks/tasks-list/tasks-list.module';
import { TasksPageComponent } from 'src/app/tasks/tasks-page/tasks-page.component';

@NgModule({
  declarations: [TasksPageComponent],
  imports: [
    TasksListModule,
    PulsingButtonModule,
    AsyncPipe,
    AddTaskModalFormModule,
    BrowserModule,
  ],
  exports: [TasksPageComponent],
})
export class TasksPageModule {}
