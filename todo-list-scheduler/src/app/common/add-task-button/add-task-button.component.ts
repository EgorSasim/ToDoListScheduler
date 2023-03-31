import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-add-task-button',
  templateUrl: './add-task-button.html',
  styleUrls: ['./add-task-button.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AddTaskButtonComponent {}
