import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: './tasks-categories-panel',
  templateUrl: './tasks-categories-panel.component.html',
  styleUrls: ['./tasks-categories-panel.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TasksCategoriesPanelComponent {}
