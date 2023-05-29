import { Component, OnInit } from '@angular/core';
import { Experience } from 'src/app/models/Experience';
import { JobExperience } from 'src/app/models/JobExperience';
import { ExperiencesService } from 'src/app/services/experiences.service';

@Component({
  selector: 'experiences',
  templateUrl: './experiences.component.html',
  styleUrls: ['./experiences.component.css'],
})
export class ExperiencesComponent implements OnInit {
  jobs: JobExperience[] = [];
  experieneces: Experience[] = [];

  constructor(private service: ExperiencesService) {
    this.jobs = service.getExperiences1();
  }

  ngOnInit(): void {
    this.service.getExperiences().subscribe((data) => {
      this.experieneces = data;
    });
  }
}
