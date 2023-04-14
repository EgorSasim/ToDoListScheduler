import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-tasks-categories-panel',
  templateUrl: './tasks-categories-panel.component.html',
  styleUrls: ['./tasks-categories-panel.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TasksCategoriesPanelComponent {}
