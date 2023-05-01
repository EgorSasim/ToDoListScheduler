import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AuthorizationPageComponent } from 'src/app/authorization-page/authorization-page.component';
import { ButtonModule } from 'src/app/common/buttons/button/button.module';
import { ErrorModule } from 'src/app/common/errors/error/error.module';
import { InputModule } from 'src/app/common/inputs/input/input.module';

@NgModule({
  declarations: [AuthorizationPageComponent],
  imports: [InputModule, ErrorModule, ButtonModule, ErrorModule, CommonModule],
  exports: [AuthorizationPageComponent],
})
export class AuthorizationPageModule {}
