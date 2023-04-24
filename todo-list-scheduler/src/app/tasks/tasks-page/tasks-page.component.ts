import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { FormArray, FormGroup } from '@angular/forms';
import { ReplaySubject } from 'rxjs';
import { TaskService } from 'src/app/common/services/task.service';
import { TaskForm } from 'src/app/tasks/task/task.typings';

@Component({
  selector: 'app-tasks-page',
  templateUrl: './tasks-page.component.html',
  styleUrls: ['./tasks-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TasksPageComponent implements OnInit {
  public tasksList$: ReplaySubject<FormArray<FormGroup<TaskForm>>> =
    new ReplaySubject(null);

  constructor(private tasksService: TaskService) {}

  public ngOnInit(): void {
    this.handleTasksList();
  }

  public handleTasksList(): void {
    this.tasksService.taskList$.subscribe((tasksList) => {
      this.tasksList$.next(tasksList);
    });
  }

  public openAddTaskModal(): void {
    console.log('add task');
  }
}
