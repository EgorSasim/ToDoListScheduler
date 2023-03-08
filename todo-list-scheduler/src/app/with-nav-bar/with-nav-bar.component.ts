import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-with-nav-bar',
  templateUrl: './with-nav-bar.component.html',
  styleUrls: ['./with-nav-bar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class WithNavBarComponent {}
