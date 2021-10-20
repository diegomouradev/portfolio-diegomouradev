import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component';
import { HomepageComponent } from './components/homepage/homepage.component';
import { ProjectsComponent } from './components/projects/projects.component';

const routes: Routes = [
  {
    path: 'homepage',
    component: HomepageComponent,
    data: { urlPath: 'homepage' },
  },
  {
    path: 'projects',
    children: [
      {
        path: 'word-search-game',
        component: ProjectsComponent,
        data: { project: 'word_search_game', urlPath: 'projects' },
      },
      {
        path: 'memory-game',
        component: ProjectsComponent,
        data: { project: 'memory_game', urlPath: 'projects' },
      },
      {
        path: 'nested-todos',
        component: ProjectsComponent,
        data: { project: 'nested_todos', urlPath: 'projects' },
      },
      {
        path: 'todo-tracker',
        component: ProjectsComponent,
        data: { project: 'todo_tracker', urlPath: 'projects' },
      },
      {
        path: 'django-portfolio',
        component: ProjectsComponent,
        data: { project: 'django_heroku', urlPath: 'projects' },
      },
    ],
  },
  {
    path: 'about',
    component: AboutComponent,
    data: { urlPath: 'about' },
  },
  {
    path: 'contact',
    component: ContactComponent,
    data: { urlPath: 'contact' },
  },
  { path: '', redirectTo: '/homepage', pathMatch: 'full' },
  { path: '**', redirectTo: '/homepage', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
