import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { ExperiencesComponent } from './components/experiences/experiences.component';
import { ExperienceComponent } from './components/experience/experience.component';
import { ExperiencesService } from './services/experiences.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ExperiencesComponent,
    ExperienceComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [ExperiencesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
