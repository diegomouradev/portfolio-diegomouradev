import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './components/about/about.component';
import { HomepageComponent } from './components/homepage/homepage.component';

const routes: Routes = [
  {
    path: 'homepage',
    component: HomepageComponent,
    data: { urlPath: 'homepage' },
  },
  {
    path: 'projects',
    loadChildren: () =>
      import('./features/projects/projects.module').then(
        (m) => m.ProjectsModule
      ),
  },
  {
    path: 'about',
    component: AboutComponent,
    data: { urlPath: 'about' },
  },
  {
    path: 'contact',
    loadChildren: () =>
      import('./features/contact/contact.module').then((m) => m.ContactModule),
  },
  { path: '', redirectTo: '/homepage', pathMatch: 'full' },
  { path: '**', redirectTo: '/homepage', pathMatch: 'full' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      initialNavigation: 'enabled',
      enableTracing: true,
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
