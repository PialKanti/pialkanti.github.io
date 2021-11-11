import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ExperiencesComponent } from './components/experiences/experiences.component';

const routes: Routes = [
  {path: 'experiences', component: ExperiencesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
