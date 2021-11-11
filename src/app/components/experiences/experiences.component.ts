import { Component, OnInit } from '@angular/core';
import { JobExperience } from 'src/app/models/JobExperience';
import { ExperiencesService } from 'src/app/services/experiences.service';

@Component({
  selector: 'experiences',
  templateUrl: './experiences.component.html',
  styleUrls: ['./experiences.component.css']
})
export class ExperiencesComponent implements OnInit {
  jobs: JobExperience[] = [];

  constructor(service: ExperiencesService) {
    this.jobs = service.getExperiences();
  }

  ngOnInit(): void {
  }

}
