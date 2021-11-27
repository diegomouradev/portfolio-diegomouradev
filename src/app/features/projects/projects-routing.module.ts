import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProjectComponent } from './project/project.component';
import { ProjectsComponent } from './projects.component';

const routes: Routes = [
  {
    path: '',
    component: ProjectsComponent,
    children: [
      {
        path: 'word-search-game',
        component: ProjectComponent,
        data: { project: 'word_search_game', urlPath: 'projects' },
      },
      {
        path: 'memory-game',
        component: ProjectComponent,
        data: { project: 'memory_game', urlPath: 'projects' },
      },
      {
        path: 'nested-todos',
        component: ProjectComponent,
        data: { project: 'nested_todos', urlPath: 'projects' },
      },
      {
        path: 'todo-tracker',
        component: ProjectComponent,
        data: { project: 'todo_tracker', urlPath: 'projects' },
      },
      {
        path: 'django-portfolio',
        component: ProjectComponent,
        data: { project: 'django_heroku', urlPath: 'projects' },
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProjectsRoutingModule {}
