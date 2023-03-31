import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TaskDetailedPageComponent } from 'src/app/common/tasks-detailed-page/task-detailed-page.component';
import { TasksPageComponent } from 'src/app/tasks/tasks-page/tasks-page.component';
import { WithNavBarComponent } from 'src/app/with-nav-bar/with-nav-bar.component';
import { WithoutNavBarComponent } from 'src/app/without-nav-bar/without-nav-bar.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'with-nav-bar',
  },
  {
    path: 'with-nav-bar',
    component: WithNavBarComponent,
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'tasks-page',
      },
      {
        path: 'tasks-page',
        component: TasksPageComponent,
      },
    ],
  },
  {
    path: 'without-nav-bar',
    component: WithoutNavBarComponent,
    children: [
      {
        path: 'task-detailed-page',
        component: TaskDetailedPageComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
