import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnInit,
} from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { TaskService } from 'src/app/common/services/tasks.service';
import { TaskForm } from 'src/app/tasks/task/task.typings';

@Component({
  selector: 'app-task-detailed-page',
  templateUrl: './task-detailed-page.component.html',
  styleUrls: ['./task-detailed-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TaskDetailedPageComponent implements OnInit {
  public formGroup: FormGroup<TaskForm>;

  constructor(
    private tasksService: TaskService,
    private activatedRoute: ActivatedRoute
  ) {
    this.activatedRoute.params.subscribe((val) => {
      this.tasksService.getTask(val['id']).subscribe((formGroup) => {
        this.formGroup = formGroup;
        console.log('form group: ', formGroup);
      });
    });
  }

  public ngOnInit(): void {
    return;
  }
}
