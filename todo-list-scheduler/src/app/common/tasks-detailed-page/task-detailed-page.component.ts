import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-task-detailed-page',
  templateUrl: './task-detailed-page.component.html',
  styleUrls: ['./task-detailed-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TaskDetailedPageComponent {}
