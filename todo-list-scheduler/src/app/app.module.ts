import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { TasksPageModule } from 'src/app/tasks/tasks-page/tasks-page.module';
import { WithNavBarModule } from 'src/app/with-nav-bar/with-nav-bar.module';
import { WithoutNavBarModule } from 'src/app/without-nav-bar/without-nav-bar.module';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { AuthorizationPageModule } from 'src/app/authorization-page/authorization-page.module';
import { SpinnerComponent } from 'src/app/common/spinner/spinner.component';
import { LoadingInterceptor } from 'src/app/loading.interceptor';

@NgModule({
  declarations: [AppComponent, SpinnerComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    WithNavBarModule,
    TasksPageModule,
    WithoutNavBarModule,
    HttpClientModule,
    AuthorizationPageModule,
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: LoadingInterceptor,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
