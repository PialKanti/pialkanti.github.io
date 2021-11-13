import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ExperiencesComponent } from './components/experiences/experiences.component';
import { ProjectsComponent } from './components/projects/projects.component';

const routes: Routes = [
  {path: 'experiences', component: ExperiencesComponent},
  {path: 'projects', component: ProjectsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
