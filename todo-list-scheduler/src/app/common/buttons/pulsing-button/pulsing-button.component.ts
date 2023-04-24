import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
} from '@angular/core';

@Component({
  selector: 'app-pulsing-button',
  templateUrl: './pulsing-button.component.html',
  styleUrls: ['./pulsing-button.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PulsingButtonComponent {
  @Input() public width: number = 5;
  @Input() public height: number = 5;
  @Input() public backgroundColor: string = 'rgb(0, 140, 255)';
  @Input() public contentColor: string = 'white';
  @Input() public content: string = '';
  @Input() public contentSize: number = 5;

  @Output() public isClicked: EventEmitter<void> = new EventEmitter();
}
