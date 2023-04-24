import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ButtonComponent {
  @Input() public width: number = 20;
  @Input() public height: number = 5;
  @Input() public fontSize: number = 2;
  @Input() public content: string = '';
  @Input() public contentColor: string = 'white';
  @Input() public bgColor: string = 'rgb(0, 140, 255)';
  @Input() public borderRadius: number = 0;
  @Input() public disabled: boolean = false;

  @Output() public isClicked: EventEmitter<void> = new EventEmitter();
}
