import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss'],
})
export class TaskComponent {
  @Input() public title: string;
  @Input() public notes: string;
  @Input() public isCompleted: boolean = false;
  @Input() public dueDate: Date;
}
