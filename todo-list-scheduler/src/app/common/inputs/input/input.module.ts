import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { InputComponent } from 'src/app/common/inputs/input/input.component';

@NgModule({
  declarations: [InputComponent],
  imports: [ReactiveFormsModule, CommonModule],
  exports: [InputComponent],
})
export class InputModule {}
