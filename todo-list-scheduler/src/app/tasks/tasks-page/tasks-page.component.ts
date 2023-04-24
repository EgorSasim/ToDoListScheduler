import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { FormArray, FormGroup } from '@angular/forms';
import { ReplaySubject } from 'rxjs';
import { TaskService } from 'src/app/common/services/task.service';
import { MatDialog } from '@angular/material/dialog';
import { TaskForm } from 'src/app/tasks/task/task.typings';
import { AddTaskModalFormComponent } from 'src/app/common/tasks/add-task-modal-form/add-task-modal-form.component';
// import { AddTaskModalFormComponent } from 'src/app/common/tasks/add-task-modal-form/add-task-modal-form.component';

@Component({
  selector: 'app-tasks-page',
  templateUrl: './tasks-page.component.html',
  styleUrls: ['./tasks-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TasksPageComponent implements OnInit {
  public tasksList$: ReplaySubject<FormArray<FormGroup<TaskForm>>> =
    new ReplaySubject(null);

  constructor(
    private tasksService: TaskService,
    private matDialog: MatDialog
  ) {}

  public ngOnInit(): void {
    this.handleTasksList();
  }

  public handleTasksList(): void {
    this.tasksService.taskList$.subscribe((tasksList) => {
      this.tasksList$.next(tasksList);
    });
  }

  public openAddTaskModal(): void {
    const dialogRef = this.matDialog.open(AddTaskModalFormComponent, {
      width: '60rem',
      height: '40rem',
      autoFocus: true,
      closeOnNavigation: true,
      enterAnimationDuration: 1000,
      exitAnimationDuration: 1000,
      position: { top: '5%', left: '25%' },
    });

    dialogRef.afterClosed().subscribe((task) => console.log(task));
  }
}
