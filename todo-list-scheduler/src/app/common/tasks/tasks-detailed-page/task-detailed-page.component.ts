import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { TaskService } from 'src/app/common/services/tasks.service';
import { FormData } from 'src/app/common/typings/typings';
import { TaskForm } from 'src/app/tasks/task/task.typings';

@Component({
  selector: 'app-task-detailed-page',
  templateUrl: './task-detailed-page.component.html',
  styleUrls: ['./task-detailed-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TaskDetailedPageComponent {
  public formGroup: FormGroup<TaskForm> = this.initEmptyFormGroup();

  constructor(
    private tasksService: TaskService,
    private activatedRoute: ActivatedRoute
  ) {
    this.activatedRoute.params.subscribe((val) => {
      this.tasksService.getTask(val['id']).subscribe((formGroup) => {
        console.log('formGroup: ', formGroup);
        this.formGroup.setValue(formGroup.value as FormData<TaskForm>);
      });
    });
  }

  private initEmptyFormGroup(): FormGroup<TaskForm> {
    return new FormGroup({
      id: new FormControl(null),
      completed: new FormControl(null),
      title: new FormControl(null),
      description: new FormControl(null),
      date: new FormControl(null),
    });
  }
}
