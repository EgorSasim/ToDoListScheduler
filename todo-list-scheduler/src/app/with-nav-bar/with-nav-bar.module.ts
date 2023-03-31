import { NgModule } from '@angular/core';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { NavBarModule } from 'src/app/nav-bar/nav-bar.module';
import { WithNavBarComponent } from 'src/app/with-nav-bar/with-nav-bar.component';

@NgModule({
  declarations: [WithNavBarComponent],
  imports: [AppRoutingModule, NavBarModule],
  exports: [WithNavBarComponent],
})
export class WithNavBarModule {}
