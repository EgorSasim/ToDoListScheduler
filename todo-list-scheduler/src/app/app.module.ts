import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { TaskDetailedPageModule } from 'src/app/common/tasks-detailed-page/task-detailed-page.module';
import { TasksPageModule } from 'src/app/tasks/tasks-page/tasks-page.module';
import { WithNavBarModule } from 'src/app/with-nav-bar/with-nav-bar.module';
import { WithoutNavBarModule } from 'src/app/without-nav-bar/without-nav-bar.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    WithNavBarModule,
    TasksPageModule,
    WithoutNavBarModule,
    TaskDetailedPageModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
