import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { FormControl } from '@angular/forms';
import {
  InputError,
  InputTypes,
} from 'src/app/common/inputs/input/input.constants';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class InputComponent {
  @Input() public control: FormControl<any>;
  @Input() public type: InputTypes = InputTypes.Text;
  @Input() public errorsHandlers: InputError[];
  @Input() public height: number = 3;
  @Input() public width: number = 5;
}
