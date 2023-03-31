import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NavBarComponent } from 'src/app/nav-bar/nav-bar.component';

@NgModule({
  declarations: [NavBarComponent],
  imports: [RouterModule],
  exports: [NavBarComponent],
})
export class NavBarModule {}
