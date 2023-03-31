import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { WithoutNavBarComponent } from 'src/app/without-nav-bar/without-nav-bar.component';

@NgModule({
  declarations: [WithoutNavBarComponent],
  imports: [RouterModule],
  exports: [WithoutNavBarComponent],
})
export class WithoutNavBarModule {}
