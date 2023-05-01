import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthorizationPageComponent } from 'src/app/authorization-page/authorization-page.component';
import { TaskDetailedPageComponent } from 'src/app/common/tasks/tasks-detailed-page/task-detailed-page.component';
import { TasksPageComponent } from 'src/app/tasks/tasks-page/tasks-page.component';
import { WithNavBarComponent } from 'src/app/with-nav-bar/with-nav-bar.component';
import { WithoutNavBarComponent } from 'src/app/without-nav-bar/without-nav-bar.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'without-nav-bar',
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
        path: '',
        pathMatch: 'full',
        redirectTo: 'authorization',
      },
      {
        path: 'authorization',
        component: AuthorizationPageComponent,
        loadChildren: () =>
          import('./authorization-page/authorization-page.module').then(
            (m) => m.AuthorizationPageModule
          ),
      },
      {
        path: 'task-detailed-page/:id',
        component: TaskDetailedPageComponent,
        loadChildren: () =>
          import(
            '../app/common/tasks/tasks-detailed-page/task-detailed-page.module'
          ).then((m) => m.TaskDetailedPageModule),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
