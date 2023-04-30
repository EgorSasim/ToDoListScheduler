import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { InputModule } from 'src/app/common/inputs/input/input.module';
import { TaskDetailedPageComponent } from 'src/app/common/tasks/tasks-detailed-page/task-detailed-page.component';
import { ButtonModule } from 'src/app/common/buttons/button/button.module';

@NgModule({
  declarations: [TaskDetailedPageComponent],
  imports: [ReactiveFormsModule, InputModule, ButtonModule],
  exports: [TaskDetailedPageComponent],
})
export class TaskDetailedPageModule {}
