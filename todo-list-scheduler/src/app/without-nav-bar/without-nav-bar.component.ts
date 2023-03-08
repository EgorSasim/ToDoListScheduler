import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'without-nav-bar',
  templateUrl: './without-nav-bar.component.html',
  styleUrls: ['./without-nav-bar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class WithoutNavBarComponent {}
