import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProjectsRoutingModule } from './projects-routing.module';
import { ProjectsComponent } from './projects.component';
import { ProjectComponent } from './project/project.component';
import { ProjectsNavigationComponent } from './projects-navigation/projects-navigation.component';
import { ProjectsLandingComponent } from './projects-landing/projects-landing.component';

@NgModule({
  declarations: [
    ProjectsComponent,
    ProjectComponent,
    ProjectsNavigationComponent,
    ProjectsLandingComponent,
  ],
  imports: [CommonModule, ProjectsRoutingModule],
  exports: [],
})
export class ProjectsModule {}
