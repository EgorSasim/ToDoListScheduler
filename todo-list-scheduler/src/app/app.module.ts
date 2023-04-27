import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { TasksPageModule } from 'src/app/tasks/tasks-page/tasks-page.module';
import { WithNavBarModule } from 'src/app/with-nav-bar/with-nav-bar.module';
import { WithoutNavBarModule } from 'src/app/without-nav-bar/without-nav-bar.module';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    WithNavBarModule,
    TasksPageModule,
    WithoutNavBarModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
