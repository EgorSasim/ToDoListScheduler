import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  Input,
  OnInit,
} from '@angular/core';
import { FormArray, FormGroup } from '@angular/forms';
import { TaskForm } from 'src/app/tasks/task/task.typings';

@Component({
  selector: 'app-tasks-list',
  templateUrl: './tasks-list.component.html',
  styleUrls: ['./tasks-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TasksListComponent implements OnInit {
  @Input() public formArray: FormArray<FormGroup<TaskForm>> = new FormArray([]);

  constructor(private changeDetectorRef: ChangeDetectorRef) {}
  public ngOnInit(): void {
    this.handleFormArrayChanges();
  }

  private handleFormArrayChanges(): void {
    this.formArray.valueChanges.subscribe(() => {
      this.changeDetectorRef.markForCheck();
    });
  }
}
